/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  generateRobotsTxt: true, // También generará un robots.txt
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: [
    "/sw/**",
    "/brevo-frame.html",
    "/_next/**",
    "/api/**",
    "/404",
    "/500",
  ],
};
