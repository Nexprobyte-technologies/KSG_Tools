import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL("/photos", request.url);
  return NextResponse.redirect(url, 307);
}
