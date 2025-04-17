import "@/styles/globals.css";
import "../lib/i18n";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import TopBar from "@/components/navbars/topBar";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scrollToTopButton";
import CookieBanner from "@/components/cookieBanner";
import Head from "next/head";
import ServiceWorkerBrevo from "@/components/serviceWorkerBrevo";

function App({ Component, pageProps }: AppProps) {
	return (
		<div className="flex flex-col min-h-screen w-full">
			<Head>
				<meta name="viewport" content="viewport-fit=cover" />
			</Head>
			<CookieBanner />
			<ServiceWorkerBrevo />
			<TopBar />
			<Component {...pageProps} />
			<ScrollToTopButton />
			<Footer />
		</div>
	);
}

export default appWithTranslation(App);
