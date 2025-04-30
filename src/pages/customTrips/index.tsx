import StandardPageRenderer from "@/components/standardPageRenderer";
import {
	CUSTOM_TRIPS_ENUM,
	CUSTOM_TRIPS_IMAGES,
} from "@/lib/pagesEnums/customTrips";
import { poppins400, poppins600 } from "@/ui/fonts";
import { getImages } from "@/utils/getImages";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const CustomTrips = () => {
	const router = useRouter();
	const { t } = useTranslation();
	const cards = CUSTOM_TRIPS_ENUM.map((item, index) => {
		return {
			title: `pages.customTrips.${item}.title`,
			description: `pages.customTrips.${item}.description`,
			className: `${index % 2 === 0 ? "bg-blue-200" : "bg-green-200"} ${
				poppins400.className
			} text-xl`,
		};
	});

	return (
		<>
			<Head>
				<title>{t("components.titleMetadata.customTrips.title")}</title>
				<meta
					name="description"
					content={t("components.titleMetadata.customTrips.description")}
				/>
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
				/>
				<meta
					property="og:title"
					content={t("components.titleMetadata.customTrips.title")}
				/>
				<meta
					property="og:description"
					content={t("components.titleMetadata.customTrips.description")}
				/>
				<meta
					property="og:url"
					content={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content={`${process.env.NEXT_PUBLIC_RSRC_REDESTINEA_URL}images/customTrips/customTripsNY.jpg`}
				/>
			</Head>
			<StandardPageRenderer
				pageTitle="pages.customTrips.title"
				pageDescription="pages.customTrips.description"
				pageHowWorks="pages.customTrips.howItWorks"
				className={`${poppins400.className} ${poppins600.className}`}
				images={getImages(CUSTOM_TRIPS_IMAGES)}
				cards={cards}
			/>
		</>
	);
};

export default CustomTrips;
