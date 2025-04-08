import { Facebook, Instagram, Mail } from "@mui/icons-material";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
	const { t } = useTranslation();
	return (
		<footer className="bg-orange-100 text-black py-4 border-t-2 border-gray-200 mt-auto">
			<div className="container mx-auto text-center">
				<Link href="/privacyPolicy" className="text-black hover:text-gray-800">
					{t("components.footer.privacyPolicy")}
				</Link>
				<span className="mx-2">|</span>
				<Link href="/cookiePolicy" className="text-black hover:text-gray-800">
					{t("components.footer.cookiePolicy")}
				</Link>
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
