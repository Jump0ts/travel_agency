import "@/styles/globals.css";
import "../lib/i18n";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import TopBar from "@/components/navbars/topBar";
import Footer from "@/components/footer";

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<TopBar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default appWithTranslation(App);
