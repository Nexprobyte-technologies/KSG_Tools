"use client";

import { useState, useRef } from "react";
import Icon from "@/components/icons";
import { videos, company, VideoItem } from "@/lib/data";

export default function VideosSection() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [modalVideo, setModalVideo] = useState<VideoItem | null>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const handlePlayToggle = (v: VideoItem) => {
    const vidEl = videoRefs.current[v.id];
    if (!vidEl) return;

    if (playingId === v.id) {
      vidEl.pause();
      setPlayingId(null);
    } else {
      // Pause any other playing video
      Object.keys(videoRefs.current).forEach((id) => {
        if (id !== v.id && videoRefs.current[id]) {
          videoRefs.current[id]?.pause();
        }
      });
      vidEl.play().catch(() => {});
      setPlayingId(v.id);
    }
  };

  const handleVideoEnded = (id: string) => {
    if (playingId === id) {
      setPlayingId(null);
    }
  };

  const openCinemaModal = (v: VideoItem) => {
    // Pause any inline playing video
    Object.keys(videoRefs.current).forEach((id) => {
      videoRefs.current[id]?.pause();
    });
    setPlayingId(null);
    setModalVideo(v);
  };

  return (
    <section id="videos" className="section section-videos-showcase">
      <div className="container">
        {/* Section Header */}
        <div className="section-head center">
          <div className="video-live-badge">
            <span className="live-dot" />
            <span className="live-text">Live Machine &amp; Knife Demonstrations</span>
          </div>
          <h2>Watch Our Machines in Real-Time Action</h2>
          <p className="sub">
            Direct operational trials from our Coimbatore workshop — witness the raw
            cutting power, high torque precision, and durability of our industrial shredders
            and knives.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="videos-showcase-grid">
          {videos.map((v, index) => {
            const isPlaying = playingId === v.id;
            return (
              <div
                className={`video-showcase-card ${isPlaying ? "is-playing" : ""}`}
                key={v.id}
              >
                {/* Media Container */}
                <div className="video-media-box">
                  <video
                    ref={(el) => {
                      videoRefs.current[v.id] = el;
                    }}
                    src={v.src}
                    preload="metadata"
                    playsInline
                    controls={isPlaying}
                    onEnded={() => handleVideoEnded(v.id)}
                    className="video-element"
                  />

                  {/* Overlay when paused */}
                  {!isPlaying && (
                    <div
                      className="video-media-overlay"
                      onClick={() => handlePlayToggle(v)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Play ${v.title}`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handlePlayToggle(v);
                        }
                      }}
                    >
                      <div className="video-badges-row">
                        <span className="v-tag">{v.tag}</span>
                        {v.badge && <span className="v-pill-live">● {v.badge}</span>}
                      </div>

                      <button
                        type="button"
                        className="video-center-play"
                        aria-label="Play video"
                      >
                        <span className="play-pulse-ring" />
                        <Icon name="play" size={28} />
                      </button>

                      <div className="video-bottom-info">
                        <span className="v-duration">
                          <Icon name="video" size={13} /> {v.duration || "HD Demo"}
                        </span>
                        <span className="v-tap-hint">Click to play</span>
                      </div>
                    </div>
                  )}

                  {/* Cinema / Expand Button */}
                  <button
                    type="button"
                    className="video-expand-btn"
                    onClick={() => openCinemaModal(v)}
                    title="Watch in Cinema Mode"
                    aria-label={`Watch ${v.title} in cinema mode`}
                  >
                    <Icon name="maximize" size={16} />
                  </button>
                </div>

                {/* Card Details */}
                <div className="video-card-content">
                  <div className="video-card-top">
                    <span className="video-num">0{index + 1}</span>
                    <h3 className="video-title">{v.title}</h3>
                  </div>

                  <p className="video-desc">{v.desc}</p>

                  {/* Feature Highlights */}
                  {v.highlights && v.highlights.length > 0 && (
                    <div className="video-highlights">
                      {v.highlights.map((h) => (
                        <span className="vh-chip" key={h}>
                          <Icon name="check" size={12} /> {h}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="video-card-actions">
                    <a
                      href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                        `Hi K.S.G. Tools, I watched your video demo "${v.title}" on your website and would like technical specs and pricing.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-video-wa"
                    >
                      <Icon name="chat" size={15} />
                      <span>Enquire on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      className="btn-video-expand"
                      onClick={() => openCinemaModal(v)}
                      aria-label="Expand video"
                    >
                      <Icon name="maximize" size={15} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="videos-bottom-cta">
          <div className="cta-icon-box">
            <Icon name="gear" size={32} />
          </div>
          <div className="cta-text-box">
            <h4>Need a live trial for your specific material?</h4>
            <p>
              Send us your raw material samples (plastic, rubber, chicken, wood, scrap) —
              we will perform a trial run on our shredders and send you a custom video demo!
            </p>
          </div>
          <a
            href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
              "Hi K.S.G. Tools, I want to request a custom machine cutting trial / video demo for my material."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <Icon name="chat" size={18} /> Request Custom Trial Video
          </a>
        </div>
      </div>

      {/* Cinema / Lightbox Modal */}
      {modalVideo && (
        <div
          className="video-modal-backdrop"
          onClick={() => setModalVideo(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="video-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="video-modal-close"
              onClick={() => setModalVideo(null)}
              aria-label="Close video"
            >
              <Icon name="close" size={20} />
            </button>

            <div className="video-modal-screen">
              <video
                src={modalVideo.src}
                controls
                autoPlay
                playsInline
                className="modal-video-element"
              />
            </div>

            <div className="video-modal-meta">
              <div className="v-modal-header">
                <span className="v-tag">{modalVideo.tag}</span>
                <h3>{modalVideo.title}</h3>
                <p>{modalVideo.desc}</p>
              </div>

              <div className="v-modal-actions">
                <a
                  href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                    `Hi K.S.G. Tools, I watched your video "${modalVideo.title}" in cinema mode and need a price quote.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  <Icon name="chat" size={16} /> Get Price Quote on WhatsApp
                </a>
                <a
                  href={`tel:${company.phoneLink}`}
                  className="btn btn-secondary"
                >
                  <Icon name="phone" size={16} /> Call {company.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
