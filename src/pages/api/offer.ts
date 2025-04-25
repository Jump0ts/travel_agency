// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "GET") return res.status(405).end();

	try {
		fetch(
			`https://rsrc.redestinea.com/offers/chiclanaMayo.json?ts=${Date.now()}`
		)
			.then((res) => res.json())
			.then((data) => res.status(200).json(data))
			.catch((err) => {
				console.error(err);
				return res.status(500).json({ error: "Error al procesar la oferta" });
			});
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: "Error al procesar la oferta" });
	}
}
