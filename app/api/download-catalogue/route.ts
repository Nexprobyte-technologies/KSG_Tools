import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "ksg-tools-product-catalogue.pdf");

  if (!fs.existsSync(filePath)) {
    return new NextResponse("Catalogue PDF not found", { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="KSG-Tools-Product-Catalogue.pdf"',
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
