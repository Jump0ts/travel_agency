// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "POST") return res.status(405).end();

	const { name, email, subject, message } = req.body;

	try {
		const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
			method: "POST",
			headers: {
				"api-key": process.env.BREVO_API_KEY || "",
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				sender: { name, email: "redestinea@gmail.com" },
				to: [
					{ email: "josanfersal@gmail.com", name: "Redestinea" },
					{ email: "josanfersal@gmail.com", name: "Redestinea" },
				],
				subject: subject,
				htmlContent: `
	        <h3>Nuevo mensaje de contacto</h3>
	        <p><strong>Nombre:</strong> ${name}</p>
	        <p><strong>Email:</strong> ${email}</p>
	        <p><strong>Asunto:</strong> ${subject}</p>
	        <p><strong>Mensaje:</strong><br/>${message}</p>
	      `,
			}),
		});

		if (!brevoResponse.ok) throw new Error("Error al enviar el email");

		return res.status(200).json({ success: true, Object: brevoResponse });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: "Error al procesar el formulario" });
	}
}
