import { Facebook, Instagram, Mail } from "@mui/icons-material";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useModal } from "@/context/modal";

const Footer = () => {
	const { t } = useTranslation();
	const { setShowCookiePolicy, setShowLegalWarning, setShowPrivacyPolicy } =
		useModal();

	return (
		<footer className="bg-orange-100 text-black py-4 border-t-2 border-gray-200 mt-auto">
			<div className="container mx-auto text-center width-full">
				<span
					className="text-black hover:text-gray-800 cursor-pointer"
					onClick={() => setShowPrivacyPolicy(true)}
				>
					{t("components.footer.privacyPolicy")}
				</span>
				<span className="mx-2">|</span>
				<span
					className="text-black hover:text-gray-800 cursor-pointer"
					onClick={() => setShowCookiePolicy(true)}
				>
					{t("components.footer.cookiePolicy")}
				</span>
				<span className="mx-2">|</span>
				<span
					className="text-black hover:text-gray-800 cursor-pointer"
					onClick={() => setShowLegalWarning(true)}
				>
					{t("components.footer.legalWarning")}
				</span>
			</div>
			<div className="container mx-auto text-center">
				<Link
					href="https://www.facebook.com/redestinea"
					className="text-black hover:text-gray-800"
				>
					<Facebook style={{ width: "40px", height: "40px" }} />
				</Link>
				<Link
					href="https://www.instagram.com/redestinea"
					className="text-black hover:text-gray-800"
				>
					<Instagram style={{ width: "40px", height: "40px" }} />
				</Link>
				<Link
					href="mailto:redestinea@gmail.com"
					className="text-black hover:text-gray-800"
				>
					<Mail style={{ width: "40px", height: "40px" }} />
				</Link>
			</div>
			<div className="container mx-auto text-center">
				<p>{t("components.footer.copyright")}</p>
			</div>
		</footer>
	);
};

export default Footer;
