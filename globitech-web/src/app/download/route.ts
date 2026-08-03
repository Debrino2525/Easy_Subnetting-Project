import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "globitech.html");
  const html = await readFile(filePath);

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition":
        'attachment; filename="Globitech-Cyber-Solutions.html"',
      "Cache-Control": "no-store",
    },
  });
}
