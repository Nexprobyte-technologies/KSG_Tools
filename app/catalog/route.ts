import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL("/api/download-catalogue", request.url);
  return NextResponse.redirect(url, 307);
}
