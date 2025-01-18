import QrCode from "$lib/script/qrcode";

/** @type {import('./$types').RequestHandler} */
export async function GET({ params, setHeaders }) {
  const input_text = params.rest;

  const matrix = QrCode.generate(input_text);
  const svg = QrCode.render("svg", matrix);

  setHeaders({ "Content-Type": "image/svg+xml" });
  return new Response(svg);
}
