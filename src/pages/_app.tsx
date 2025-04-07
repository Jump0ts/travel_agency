import "@/styles/globals.css";
import "../lib/i18n";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import TopBar from "@/components/navbars/topBar";
import Footer from "@/components/footer";

function App({ Component, pageProps }: AppProps) {
	return (
		<div className="flex flex-col min-h-screen">
			<TopBar />
			<Component {...pageProps} />
			<Footer />
		</div>
	);
}

export default appWithTranslation(App);
