// pages/api/offer.ts
import type { NextApiRequest, NextApiResponse } from "next";
import offer from "@/data/offer.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).end();

  return res.status(200).json(offer);
}
