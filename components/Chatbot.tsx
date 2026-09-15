"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Icon from "@/components/icons";
import {
  getBotReply,
  buildEnquiryMessage,
  INITIAL_STATE,
  type BotState,
  type Lead,
} from "@/lib/chatbot";
import { company, shredderKnives } from "@/lib/data";

interface Msg {
  role: "bot" | "user";
  text: string;
  lead?: Lead;
}

const DEFAULT_SUGGESTIONS = ["Our products", "Prices", "GST details", "Send enquiry"];

function getContextProduct(pathname: string): string | undefined {
  const match = pathname.match(/^\/products\/([^/]+)/);
  if (!match) return undefined;
  const product = shredderKnives.products.find(
    (p) => p.slug === decodeURIComponent(match[1])
  );
  return product?.name;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>(DEFAULT_SUGGESTIONS);
  const bodyRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<BotState>(INITIAL_STATE);
  const pathname = usePathname();
  const contextProduct = getContextProduct(pathname);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [msgs, typing, open]);

  const send = (text: string) => {
    const q = text.trim();
    if (!q) return;
    setMsgs((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setSuggestions([]);
    setTyping(true);
    const reply = getBotReply(q, stateRef.current, contextProduct);
    stateRef.current = reply.next;
    setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, { role: "bot", text: reply.text, lead: reply.lead }]);
      setSuggestions(reply.suggestions);
    }, 650 + Math.random() * 450);
  };

  return (
    <>
      <button
        className={`chat-toggle${open ? " open" : ""}`}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat with K.S.G. Tools assistant"}
      >
        {open ? <Icon name="close" size={22} /> : <Icon name="chat" size={24} />}
      </button>

      {open && (
        <div className="chat-panel" role="dialog" aria-label="Chat assistant">
          <div className="chat-head">
            <div className="chat-avatar">KSG</div>
            <div>
              <div className="chat-title">K.S.G. Tools Assistant</div>
              <div className="chat-sub">
                <span className="chat-online-dot" /> Online · replies instantly
              </div>
            </div>
            <button
              className="chat-head-btn"
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Minimise chat"
            >
              <Icon name="chevronDown" size={18} />
            </button>
          </div>

          <div className="chat-body" ref={bodyRef}>
            {msgs.length === 0 && (
              <div className="chat-msg bot">
                Vanakkam! Welcome to K.S.G. Tools, Coimbatore. I can help with our
                products, prices, specifications, GST, payments and more. You can also
                type &quot;enquiry&quot; to place an order on WhatsApp.
              </div>
            )}
            {msgs.map((m, i) => (
              <div className={`chat-msg-group ${m.role}`} key={i}>
                <div className={`chat-msg ${m.role}`}>
                  {m.text.split("\n").map((line, j) => (
                    <div key={j}>{line || "\u00A0"}</div>
                  ))}
                </div>
                {m.role === "bot" && m.lead && (
                  <a
                    className="chat-wa"
                    href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                      buildEnquiryMessage(m.lead)
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="wa-icon">
                      <Icon name="send" size={15} />
                    </span>
                    Send to WhatsApp
                  </a>
                )}
              </div>
            ))}
            {typing && (
              <div className="chat-msg bot typing">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>

          <div className="chat-suggestions">
            {suggestions.map((s) => (
              <button
                type="button"
                key={s}
                onClick={() => send(s)}
                disabled={typing}
              >
                {s}
              </button>
            ))}
          </div>

          <form
            className="chat-input"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              aria-label="Type your message"
            />
            <button type="submit" aria-label="Send message">
              <Icon name="send" size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}