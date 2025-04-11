/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: "https://redestinea.com", // Reemplaza con tu dominio real
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
