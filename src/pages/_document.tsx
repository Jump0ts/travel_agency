import { Html, Head, Main, NextScript } from "next/document";
import { BRAND } from "@/config/brand";

const brevoTrackerKey = process.env.BREVO_TRACKER_KEY;

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="icon" href="/brand/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/brand/icon.svg" />
        <link rel="manifest" href="/brand/manifest.json" />
        <meta name="apple-mobile-web-app-title" content={BRAND.name} />
        <meta name="theme-color" content="#ffffff" />
        {/* Brevo tracking only loads when a tracker key is configured (disabled in the demo). */}
        {brevoTrackerKey && (
          <>
            <script src="https://cdn.brevo.com/js/sdk-loader.js" async></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.Brevo = window.Brevo || [];
              Brevo.push([
                "init",
                {
                  client_key: "${brevoTrackerKey}"
                }
              ]);
            `,
              }}
            />
          </>
        )}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
