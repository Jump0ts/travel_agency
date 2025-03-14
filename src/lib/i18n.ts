import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./languages/es";

i18n.use(initReactI18next).init({
	fallbackLng: "es",
	debug: true,
	lng: "es",
	resources: {
		es: {
			common: es,
		},
	},
	interpolation: {
		escapeValue: false, // React already safes from xss
	},
});

export default i18n;
