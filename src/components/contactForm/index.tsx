"use client";
import { Button, Checkbox, TextField } from "@mui/material";
import { useState } from "react";
import styles from "./styles.module.css";
import { poppins500 } from "@/ui/fonts";
import { useTranslation } from "react-i18next";
import Link from "next/link";

type ContactFormProps = {
	subject: string;
};

const ContactForm = ({ subject }: ContactFormProps) => {
	const [sent, setSent] = useState(false);
	const [privacyPolicy, setPrivacyPolicy] = useState(false);
	const [error, setError] = useState("");
	const { t } = useTranslation();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);

		const res = await fetch("/api/contact", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name: formData.get("name"),
				email: formData.get("email"),
				message: formData.get("message"),
				subject: subject,
			}),
		});

		if (res.ok) {
			setSent(true);
		} else {
			setError("Hubo un error al enviar el mensaje.");
		}
	};

	if (sent) return <p>✅ {t("components.contactForm.success")}</p>;

	return (
		<form onSubmit={handleSubmit} className="space-y-4 max-w-md w-full mx-auto">
			<div
				className={`bg-gray-100 shadow-xl rounded-xl ${styles.wrapper} ${poppins500.className}`}
			>
				<h2 className="text-xl font-bold">
					{t("components.contactForm.title")}
				</h2>
				<TextField
					name="name"
					required
					label={t("components.contactForm.name")}
					className="border w-full p-2"
					variant="outlined"
				/>
				<TextField
					name="email"
					required
					label={t("components.contactForm.email")}
					type="email"
					className="border w-full p-2"
					variant="outlined"
				/>
				<TextField
					name="message"
					required
					label={t("components.contactForm.message")}
					className="border w-full p-2"
					variant="outlined"
					multiline
					rows={4}
				/>
				<p className="text-sm text-gray-500">
					<Checkbox
						checked={privacyPolicy}
						onChange={() => {
							console.log("Privacy policy", !privacyPolicy);

							setPrivacyPolicy(!privacyPolicy);
						}}
					/>
					{t("components.contactForm.readAndAccept")}
					<Link href="/privacyPolicy" className="text-blue-600 underline">
						{t("components.contactForm.privacyPolicy")}
					</Link>
				</p>
				<Button
					type="submit"
					className="bg-blue-100 text-white px-4 py-2 w-1/3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
					disabled={!privacyPolicy}
					variant="contained"
				>
					{t("components.contactForm.send")}
				</Button>
				{error && (
					<p className="text-red-600">{t("components.contactForm.error")}</p>
				)}
			</div>
		</form>
	);
};

export default ContactForm;
