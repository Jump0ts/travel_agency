// Liveness endpoint used by the Docker healthcheck, the deploy script and the CI smoke test.
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Cache-Control", "no-store");
  return res.status(200).json({
    status: "ok",
    version: process.env.APP_VERSION ?? "dev",
  });
}
