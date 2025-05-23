import Card from "@/components/card";
import ImageWithFallback from "@/components/imageWithFallback";
import { useModal } from "@/context/modal";
import { useOffers } from "@/context/offers";
import { poppins600, poppins400, poppins700 } from "@/ui/fonts";
import Head from "next/head";
import { useTranslation } from "react-i18next";

const HOMESECTIONS = [
	"authorTrips",
	"customTrips",
	"groupTrips",
	"birdwatchingTrips",
	"sportsTrips",
] as const;

export default function Home() {
	const { t } = useTranslation();
	const { offers } = useOffers();
	const { setShowOffersModal } = useModal();

	return (
		<>
			<Head>
				<title>{t("components.titleMetadata.home.title")}</title>
				<meta
					name="description"
					content={t("components.titleMetadata.home.description")}
				/>
				<link rel="canonical" href="/" />
				<meta
					property="og:title"
					content={t("components.titleMetadata.home.title")}
				/>
				<meta
					property="og:description"
					content={t("components.titleMetadata.home.description")}
				/>
				<meta property="og:url" content="/" />
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content={`${process.env.NEXT_PUBLIC_RSRC_REDESTINEA_URL}images/home/Marian-3.jpg`}
				/>
			</Head>
			<div className="flex flex-col items-center justify-center w-full h-full p-4">
				<div className="flex flex-col w-full gap-4 mt-4">
					<h1
						className={`text-center text-3xl text-gray-600 mt-4 ${poppins600.className}`}
					>
						{t("pages.home.welcomeCard.title")}
					</h1>
					<p className="text-center text-gray-500 mt-2">
						{t("pages.home.welcomeCard.agencyDescription")}
					</p>
				</div>
				<div className="flex flex-wrap justify-around mt-4 mb-6 w-full flex-col md:flex-row gap-4 items-center">
					<ImageWithFallback
						src="home/paisajePueblo.jpg"
						alt="Home Image 1"
						width={500}
						height={600}
						className="rounded-lg shadow-lg max-w-[500px] w-full object-contain"
						loading="lazy"
					/>
					<ImageWithFallback
						src="home/Marian-3.jpg"
						alt="Personal Image"
						width={500}
						height={600}
						className="rounded-lg shadow-lg max-w-[500px] w-full object-contain"
						loading="lazy"
					/>
					<ImageWithFallback
						src="home/monument1.jpg"
						alt="Home Image 2"
						width={500}
						height={600}
						className="rounded-lg shadow-lg max-w-[500px] w-full object-contain"
						loading="lazy"
					/>
				</div>
				{offers && (
					<div
						className={`marquee-container flex flex-col w-full gap-4 mt-4 overflow-hidden ${poppins700.className} bg-orange-500 rounded-lg shadow-lg p-4 cursor-pointer`}
						onClick={() => {
							setShowOffersModal(true);
						}}
					>
						<div className="marquee-content whitespace-nowrap text-lg font-bold ml-4">
							<span>
								{`${t("pages.home.offers.title")} | `}
								<span className="text-gray-800 hidden md:inline">
									{`${t("pages.home.offers.description")} | `}
									<span className="text-blue-800 hover:underline">
										{t("pages.home.offers.seeMore")}
									</span>
								</span>
								<span className="text-blue-800 inline md:hidden hover:underline">
									{t("pages.home.offers.seeMore")}
								</span>
							</span>
							<span className="hidden md:inline">
								{`${t("pages.home.offers.title")} | `}
								<span className="text-gray-800 hidden md:inline">
									{`${t("pages.home.offers.description")} | `}
									<span className="text-blue-800 hover:underline">
										{t("pages.home.offers.seeMore")}
									</span>
								</span>
							</span>
						</div>
					</div>
				)}
				<h1
					className={`text-center text-3xl text-gray-600 mt-4 ${poppins600.className}`}
				>
					{t("pages.home.whatToOffer")}
				</h1>
				<div className="flex flex-col gap-4 mt-4 max-w-9/10 w-full">
					{HOMESECTIONS.map((section, index) => {
						const backgroundColor =
							index % 2 === 0
								? "bg-gray-100"
								: "bg-blue-100 flex-col md:flex-row-reverse";
						return (
							<Card
								key={`home-section-${index}`}
								title={`pages.home.${section}.title`}
								description={`pages.home.${section}.description`}
								image={`home/${section}Home.jpg`}
								className={`${poppins400.className} ${backgroundColor}`}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}
