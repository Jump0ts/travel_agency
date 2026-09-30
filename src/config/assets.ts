// Where images live. By default they are served from /public (e.g. public/images/home/welcome.jpg);
// set NEXT_PUBLIC_ASSETS_URL (ending in "/") to serve them from a CDN instead.
const ASSETS_URL = process.env.NEXT_PUBLIC_ASSETS_URL || "/";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";

/** Image path usable by next/image and <img>. */
export const assetSrc = (path: string) => `${ASSETS_URL}${path}`;

/** Absolute image URL, required by Open Graph / Twitter meta tags. */
export const assetAbsoluteUrl = (path: string) =>
  ASSETS_URL.startsWith("http")
    ? `${ASSETS_URL}${path}`
    : `${BASE_URL}/${path}`;
