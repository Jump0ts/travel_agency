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
import { ModalProvider } from "@/context/modal";
import OffersProvider from "@/context/offers";

function App({ Component, pageProps }: AppProps) {
	return (
		<div className="flex flex-col min-h-screen w-full">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<OffersProvider>
				<ModalProvider>
					<CookieBanner />
					<TopBar />
					<Component {...pageProps} />
					<ScrollToTopButton />
					<Footer />
				</ModalProvider>
			</OffersProvider>
		</div>
	);
}

export default appWithTranslation(App);
