// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { BRAND } from "@/config/brand";

const escapeHtml = (value: unknown) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") return res.status(405).end();

  // Demo mode: without an email provider configured, nothing is sent.
  if (!process.env.BREVO_API_KEY || !process.env.CONTACT_EMAIL) {
    return res.status(200).json({ success: true, demo: true });
  }

  const { name, email, phone, subject, message } = req.body;

  try {
    const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: BRAND.name, email: process.env.CONTACT_EMAIL },
        to: [{ name: BRAND.name, email: process.env.CONTACT_EMAIL }],
        subject: String(subject ?? ""),
        htmlContent: `
	        <h3>Nuevo mensaje de contacto</h3>
	        <p><strong>Nombre: </strong> ${escapeHtml(name)}</p>
	        <p><strong>Email: </strong> ${escapeHtml(email)}</p>
	        <p><strong>Teléfono: </strong> ${escapeHtml(phone)}</p>
	        <p><strong>Asunto:</strong> ${escapeHtml(subject)}</p>
	        <p><strong>Mensaje: </strong><br/>${escapeHtml(message)}</p>
	      `,
      }),
    });

    if (!brevoResponse.ok) throw new Error("Error al enviar el email");

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error al procesar el formulario" });
  }
}
