import { BRAND } from "@/config/brand";

const cookiePolicy = {
  title: "🍪 Política de Cookies",
  lastUpdated: "Última actualización: 8 de abril de 2025",
  description: `En ${BRAND.name} utilizamos cookies y tecnologías similares para garantizar el correcto funcionamiento de nuestro sitio web, mejorar la experiencia del usuario, analizar el tráfico y mostrarte contenido personalizado, incluyendo anuncios relevantes.`,
  whatIsCookie: {
    title: "¿Qué son las cookies?",
    description:
      "as cookies son pequeños archivos de texto que los sitios web colocan en tu dispositivo al visitarlos. Sirven para recordar tus preferencias, reconocerte en futuras visitas y recopilar información sobre tu navegación con el fin de mejorar nuestros servicios.",
  },
  types: {
    title: "Tipos de cookies que utilizamos",
    item1: {
      title: "1. Cookies técnicas y necesarias",
      description: `Estas cookies son esenciales para que ${BRAND.name} funcione correctamente. Permiten la navegación, el acceso a áreas seguras y la realización de reservas o solicitudes. No requieren tu consentimiento.`,
    },
    item2: {
      title: "2. Cookies de análisis o rendimiento",
      description:
        "Nos ayudan a entender cómo interactúan los visitantes con el sitio web, para poder mejorar nuestros contenidos y funcionalidades. Por ejemplo, usamos herramientas como Google Analytics.",
    },
    item3: {
      title: "3. Cookies de personalización",
      description:
        "Permiten recordar tus preferencias como el idioma o la ubicación, para ofrecerte una experiencia más adaptada a ti.",
    },
  },
  cookieManagement: {
    title: "¿Cómo puedes gestionar las cookies?",
    description:
      "Puedes aceptar, rechazar o configurar el uso de cookies (excepto las necesarias) a través de nuestro panel de configuración de cookies.",
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
