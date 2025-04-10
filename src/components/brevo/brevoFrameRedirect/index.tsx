// components/BrevoFrameRedirect.tsx
import { useEffect } from "react";
import { getOSNewsletter } from "@/utils/loadBrevoNewsletter";

export default function BrevoFrameRedirect() {
	useEffect(() => {
		const os = getOSNewsletter();
		let frameUrl = "/brevo-frame.html"; // Archivo por defecto

		if (os === "Mac") {
			frameUrl = "/service-worker/_MACOSX/._brevo-frame.html"; // Redirigir a la versión Mac
		} else {
			frameUrl = "/service-worker/service-worker/brevo-frame.html";
		}

		// Redirigir al archivo adecuado
		window.location.href = frameUrl;
	}, []);

	return null;
}
