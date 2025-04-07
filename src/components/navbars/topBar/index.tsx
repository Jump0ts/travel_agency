import Image from "next/image";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { poppins500 } from "@/ui/fonts";

const NavButtons = [
	{ path: "/", label: "home" },
	{
		path: "/authorTrips",
		label: "authorTrips",
	},
	{ path: "/contact", label: "contact" },
];

const TopBar = () => {
	const { t } = useTranslation();
	const pathname = usePathname();

	return (
		<div className={`${styles.topBar} ${poppins500.className} antialiased`}>
			<div className={`${styles.news} bg-orange-400 `}>
				<p>{t("components.navBars.topBar.news")}</p>
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
						<Link href={item.path}>
							{t(`components.navBars.topBar.${item.label}`)}
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default TopBar;
