// components/ServiceWorker.tsx
import { getOSNewsletter } from "@/utils/loadBrevoNewsletter";
import { useEffect } from "react";

export default function ServiceWorkerBrevo() {
  useEffect(() => {
    const os = getOSNewsletter();
    let swFile = "/sw.js"; // Archivo por defecto

    if (os === "Mac") {
      swFile = "/service-worker/_MACOSX/._sw.js"; // Archivo para macOS
    } else {
      swFile = "/service-worker/service-worker/sw.js"; // Archivo por defecto para otros sistemas operativos
    }

    // Registrar el Service Worker
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register(swFile)
        .then((registration) => {
          console.warn(
            "Service Worker Brevo Newsletter registrado con éxito:",
            registration,
          );
        })
        .catch((error) => {
          console.error(
            "Error al registrar el Service Worker Brevo Newsletter:",
            error,
          );
        });
    }
  }, []);

  return null;
}
