import ContactForm from "@/components/contactForm";
import Head from "next/head";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
	const { t } = useTranslation();
	return (
		<>
			<Head>
				<title>{t("components.titleMetadata.contact.title")}</title>
				<meta
					name="description"
					content={t("components.titleMetadata.contact.description")}
				/>
				<link rel="canonical" href="/contact" />
				<meta
					property="og:title"
					content={t("components.titleMetadata.contact.title")}
				/>
				<meta
					property="og:description"
					content={t("components.titleMetadata.contact.description")}
				/>
				<meta property="og:url" content="/contact" />
				<meta property="og:type" content="website" />
			</Head>
			<div className="flex flex-col items-center min-h-screen mt-10 w-full">
				<div className="flex flex-col gap-4 w-9/10 md:w-4/10">
					<ContactForm subject="General Contact" />
				</div>
			</div>
		</>
	);
};

export default ContactPage;
