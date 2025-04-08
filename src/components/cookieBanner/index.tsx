// components/CookieBanner.tsx
import { useEffect, useState } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

export default function CookieBanner() {
	const [hasConsent, setHasConsent] = useState(false);

	useEffect(() => {
		if (getCookieConsentValue() === "true") {
			setHasConsent(true);
		}
	}, []);

	useEffect(() => {
		if (!hasConsent) return;

		// Cargar Google Analytics (gtag)
		const script = document.createElement("script");
		script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX";
		script.async = true;
		document.head.appendChild(script);

		window.dataLayer = window.dataLayer || [];
		function gtag(...args: (string | Date)[]) {
			window.dataLayer.push(args);
		}
		gtag("js", new Date());
		gtag("config", "G-XXXXXXX");
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
		>
			Usamos cookies para mejorar tu experiencia. Puedes aceptar o rechazar.
		</CookieConsent>
	);
}
