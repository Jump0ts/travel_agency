import StandardPageRenderer from "@/components/standardPageRenderer";
import {
	SPORTS_TRIPS_ENUM,
	SPORTS_TRIPS_IMAGES,
} from "@/lib/pagesEnums/sportsTrips";
import { poppins400, poppins600 } from "@/ui/fonts";
import { getImages } from "@/utils/getImages";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const SportsTrips = () => {
	const router = useRouter();
	const { t } = useTranslation();
	const cards = SPORTS_TRIPS_ENUM.map((item, index) => {
		return {
			title: `pages.sportsTrips.${item}.title`,
			description: `pages.sportsTrips.${item}.description`,
			className: `${index % 2 === 0 ? "bg-blue-200" : "bg-green-200"} ${
				poppins400.className
			} text-xl`,
		};
	});

	return (
		<>
			<Head>
				<title>{t("components.titleMetadata.sportsTrips.title")}</title>
				<meta
					name="description"
					content={t("components.titleMetadata.sportsTrips.description")}
				/>
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
				/>
				<meta
					property="og:title"
					content={t("components.titleMetadata.sportsTrips.title")}
				/>
				<meta
					property="og:description"
					content={t("components.titleMetadata.sportsTrips.description")}
				/>
				<meta
					property="og:url"
					content={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
				/>
				<meta property="og:type" content="website" />
				<meta property="og:image" content="/images/home/sportsTripsHome.jpg" />
			</Head>
			<StandardPageRenderer
				pageTitle="pages.sportsTrips.title"
				pageDescription="pages.sportsTrips.description"
				pageHowWorks="pages.sportsTrips.howItWorks"
				className={`${poppins400.className} ${poppins600.className}`}
				images={getImages(SPORTS_TRIPS_IMAGES)}
				cards={cards}
			/>
		</>
	);
};

export default SportsTrips;
