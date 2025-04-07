import Image from "next/image";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { poppins400 } from "@/ui/fonts";

const NavButtons = [
	{ name: "Promotions", path: "/", label: "promotions" },
	{
		name: "Popular Destinations",
		path: "/hola",
		label: "popularDestinations",
	},
	{ name: "Contact", path: "/contact", label: "contact" },
];

const TopBar = () => {
	const { t } = useTranslation();
	const pathname = usePathname();

	return (
		<div className={`${styles.topBar} ${poppins400.className} antialiased`}>
			<div className={`${styles.news} bg-orange-400 `}>
				<p>{t("topBar.news")}</p>
			</div>
			<Image
				src="/redestinea-complete-logo.png"
				alt="Logo"
				width={300}
				height={80}
			/>
			<div
				className={`${styles.navButtons}`}
				style={{ backgroundColor: "#67b80eab" }}
			>
				{NavButtons.map((item) => (
					<div
						key={`${item.label}-container`}
						className={
							pathname == item.path
								? `${styles.link} text-decoration: underline underline-offset-4`
								: `${styles.link}`
						}
					>
						<Link href={item.path}>{t(`topBar.${item.label}`)}</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default TopBar;
