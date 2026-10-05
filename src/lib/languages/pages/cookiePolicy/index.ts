import { BRAND } from "@/config/brand";

const cookiePolicy = {
  title: "🍪 Política de Cookies",
  lastUpdated: "Última actualización: 5 de octubre de 2026",
  description: `${BRAND.name} es una web de demostración: no utiliza cookies de análisis, publicidad ni seguimiento.`,
  whatIsCookie: {
    title: "¿Qué son las cookies?",
    description:
      "Las cookies son pequeños archivos de texto que los sitios web colocan en tu dispositivo al visitarlos. Sirven para recordar preferencias o recopilar información sobre la navegación con el fin de mejorar nuestros servicios.",
  },
  types: {
    title: "Tipos de cookies que utilizamos",
    item1: {
      title: "1. Cookies técnicas y necesarias",
      description: `Solo se usarían cookies técnicas imprescindibles para que ${BRAND.name} funcione. No requieren tu consentimiento.`,
    },
    item2: {
      title: "2. Cookies de análisis o rendimiento",
      description:
        "No utilizamos cookies de análisis. Esta demo no incluye Google Analytics ni otras herramientas de medición.",
    },
    item3: {
      title: "3. Cookies de personalización y publicidad",
      description:
        "No utilizamos cookies de personalización, publicitarias ni de terceros.",
    },
  },
  cookieManagement: {
    title: "¿Cómo puedes gestionar las cookies?",
    description:
      "Como no usamos cookies opcionales, no hay nada que aceptar ni configurar. Puedes borrar o bloquear las cookies desde la configuración de tu navegador.",
  },
  changes: {
    title: "Cambios en la política de cookies",
    description: `${BRAND.name} se reserva el derecho a modificar esta política para adaptarla a futuras novedades legislativas o técnicas. Te recomendamos revisarla periódicamente.`,
  },
  contact: {
    title: "Contacto",
    description:
      "Si tienes alguna duda sobre nuestra política de cookies, puedes escribirnos a:",
  },
};
export default cookiePolicy;
