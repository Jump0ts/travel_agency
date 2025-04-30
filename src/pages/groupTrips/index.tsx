import StandardPageRenderer from "@/components/standardPageRenderer";
import {
	GROUP_TRIPS_ENUM,
	GROUP_TRIPS_IMAGES,
} from "@/lib/pagesEnums/groupTrips";
import { poppins400, poppins600 } from "@/ui/fonts";
import { getImages } from "@/utils/getImages";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const GroupTrips = () => {
	const router = useRouter();
	const { t } = useTranslation();
	const cards = GROUP_TRIPS_ENUM.map((item, index) => {
		return {
			title: `pages.groupTrips.${item}.title`,
			description: `pages.groupTrips.${item}.description`,
			className: `${index % 2 === 0 ? "bg-blue-200" : "bg-green-200"} ${
				poppins400.className
			} text-xl`,
		};
	});

	return (
		<>
			<Head>
				<title>{t("components.titleMetadata.groupTrips.title")}</title>
				<meta
					name="description"
					content={t("components.titleMetadata.groupTrips.description")}
				/>
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
				/>
				<meta
					property="og:title"
					content={t("components.titleMetadata.groupTrips.title")}
				/>
				<meta
					property="og:description"
					content={t("components.titleMetadata.groupTrips.description")}
				/>
				<meta
					property="og:url"
					content={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content={`${process.env.NEXT_PUBLIC_RSRC_REDESTINEA_URL}images/groupTrips/groupTripsDisney.jpg`}
				/>
			</Head>
			<StandardPageRenderer
				pageTitle="pages.groupTrips.title"
				pageDescription="pages.groupTrips.description"
				pageHowWorks="pages.groupTrips.howItWorks"
				className={`${poppins600.className}`}
				images={getImages(GROUP_TRIPS_IMAGES)}
				cards={cards}
			/>
		</>
	);
};

export default GroupTrips;
