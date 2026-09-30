// Single source of truth for the (fictional) brand used by this portfolio demo.
// Changing the agency name, contact or links only requires editing this file.
export const BRAND = {
  name: "Mochila",
  legalName: "Mochila (proyecto de demostración sin actividad comercial)",
  contactEmail: "hola@example.com",
  logo: "brand/logo.svg",
  links: {
    github: "https://github.com/Jump0ts/travel_agency",
    linkedin: "https://www.linkedin.com/in/josanfersal/",
  },
  demoNotice:
    "Demo de portfolio: esta agencia es ficticia. No se realizan reservas ni se envían mensajes.",
} as const;
