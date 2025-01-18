import { error } from "@sveltejs/kit";
import fs from "fs/promises";
import path from "path";

/** @type {import('./$types').RequestHandler} */
export async function GET({ setHeaders }) {
  try {
    const pdfPath = path.join(process.cwd(), "static", "example.pdf");

    const pdfBuffer = await fs.readFile(pdfPath);

    setHeaders({
      "Content-Type": "application/pdf",
    });

    return new Response(pdfBuffer, {
      status: 200,
    });
  } catch (err) {
    console.error("Error serving PDF:", err);
    throw error(500, "Could not serve PDF file");
  }
}
