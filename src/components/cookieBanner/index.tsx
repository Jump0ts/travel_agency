// components/CookieBanner.tsx
import { useEffect, useState } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

declare global {
	interface Window {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		dataLayer: any[];
	}
}

export default function CookieBanner() {
	const [hasConsent, setHasConsent] = useState(false);

	useEffect(() => {
		if (getCookieConsentValue("userConsent") === "true") {
			setHasConsent(true);
		}
	}, []);

	useEffect(() => {
		if (!hasConsent) return;

		// Cargar Google Analytics (gtag)
		const script = document.createElement("script");
		script.src = "https://www.googletagmanager.com/gtag/js?id=G-E47NBXZ8GQ";
		script.async = true;
		document.head.appendChild(script);

		window.dataLayer = window.dataLayer || [];
		function gtag(...args: (string | Date)[]) {
			window.dataLayer.push(args);
		}
		gtag("js", new Date());
		gtag("config", "G-E47NBXZ8GQ");
		console.log("Consent granted, loading GA");
	}, [hasConsent]);

	return (
		<CookieConsent
			location="bottom"
			buttonText="Aceptar"
			declineButtonText="Rechazar"
			enableDeclineButton
			cookieName="userConsent"
			style={{ background: "#2B373B" }}
			buttonStyle={{ background: "#4CAF50", color: "#fff", fontSize: "13px" }}
			declineButtonStyle={{
				background: "#f44336",
				color: "#fff",
				fontSize: "13px",
			}}
			expires={150}
			onAccept={() => setHasConsent(true)}
		>
			Usamos cookies para mejorar tu experiencia. Puedes aceptar o rechazar.
		</CookieConsent>
	);
}
