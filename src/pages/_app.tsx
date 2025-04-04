import "@/styles/globals.css";
import "../lib/i18n";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import TopBar from "@/components/navbars/topBar";

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<TopBar />
			<Component {...pageProps} />
		</>
	);
}

export default appWithTranslation(App);
