import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
		<Html lang="en">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<meta name="theme-color" content="#ffffff" />
				<script src="https://cdn.brevo.com/js/sdk-loader.js" async></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
              window.Brevo = window.Brevo || [];
              Brevo.push([
                "init",
                {
                  client_key: "${process.env.NEXT_PUBLIC_BREVO_TRACKER_KEY}"
                }
              ]);
            `,
					}}
				/>
			</Head>
			<body className="antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
