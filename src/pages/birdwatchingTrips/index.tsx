import StandardPageRenderer from "@/components/standardPageRenderer";
import {
	BIRDWATCHING_TRIPS_ENUM,
	BIRDWATCHING_TRIPS_IMAGES,
} from "@/lib/pagesEnums/birdwatchingTrips";
import { poppins400, poppins600 } from "@/ui/fonts";
import { getImages } from "@/utils/getImages";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const BirdwatchingTrips = () => {
	const router = useRouter();
	const { t } = useTranslation();
	const cards = BIRDWATCHING_TRIPS_ENUM.map((item, index) => {
		return {
			title: `pages.birdwatchingTrips.${item}.title`,
			description: `pages.birdwatchingTrips.${item}.description`,
			className: `${index % 2 === 0 ? "bg-blue-200" : "bg-green-200"} ${
				poppins400.className
			} text-xl`,
		};
	});

	return (
		<>
			<Head>
				<title>{t("components.titleMetadata.birdwatchingTrips.title")}</title>
				<meta
					name="description"
					content={t("components.titleMetadata.birdwatchingTrips.description")}
				/>
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
				/>
				<meta
					property="og:title"
					content={t("components.titleMetadata.birdwatchingTrips.title")}
				/>
				<meta
					property="og:description"
					content={t("components.titleMetadata.birdwatchingTrips.description")}
				/>
				<meta
					property="og:url"
					content={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content="/images/birdwatchingTrips/birdwatchingGroup.jpg"
				/>
			</Head>
			<StandardPageRenderer
				pageTitle="pages.birdwatchingTrips.title"
				pageDescription="pages.birdwatchingTrips.description"
				pageHowWorks="pages.birdwatchingTrips.howItWorks"
				className={`${poppins400.className} ${poppins600.className}`}
				images={getImages(BIRDWATCHING_TRIPS_IMAGES)}
				cards={cards}
			/>
		</>
	);
};

export default BirdwatchingTrips;
