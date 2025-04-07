import Card from "@/components/card";
import ImageWithFallback from "@/components/imageWithFallback";
import { poppins600, poppins400 } from "@/ui/fonts";
import { useTranslation } from "react-i18next";

const HOMESECTIONS = [
	"authorTrips",
	"customTrips",
	"sportsTrips",
	"birdwatchingTrips",
	"groupTrips",
] as const;

export default function Home() {
	const { t } = useTranslation();
	return (
		<div className="flex flex-col items-center justify-center w-full h-full p-4">
			<div className="flex flex-col w-1/2 gap-4 mt-4">
				<h1
					className={`text-center text-3xl text-gray-600 mt-4 ${poppins600.className}`}
				>
					{t("pages.home.welcomeCard.title")}
				</h1>
				<p className="text-center text-gray-500 mt-2">
					{t("pages.home.welcomeCard.agencyDescription")}
				</p>
			</div>
			<div className="flex justify-around flex-row mt-4 mb-6 w-full">
				<ImageWithFallback
					src="/images/agency.jpg"
					alt="Agency Image"
					width={500}
					height={600}
					className="rounded-lg shadow-lg"
					loading="lazy"
				/>
				<ImageWithFallback
					src="/images/agency.jpg"
					alt="Agency Image"
					width={500}
					height={600}
					className="rounded-lg shadow-lg"
					loading="lazy"
				/>
				<ImageWithFallback
					src="/images/agency.jpg"
					alt="Agency Image"
					width={500}
					height={600}
					className="rounded-lg shadow-lg"
					loading="lazy"
				/>
			</div>
			<h1
				className={`text-center text-3xl text-gray-600 mt-4 ${poppins600.className}`}
			>
				{t("pages.home.whatToOffer")}
			</h1>
			<div className="flex flex-col gap-4 mt-4 w-9/10">
				{HOMESECTIONS.map((section, index) => {
					const backgroundColor =
						index % 2 === 0 ? "bg-gray-100" : "bg-blue-100 flex-row-reverse";
					return (
						<Card
							key={`home-section-${index}`}
							title={`pages.home.${section}.title`}
							description={`pages.home.${section}.description`}
							className={`${poppins400.className} ${backgroundColor}`}
						/>
					);
				})}
			</div>
		</div>
	);
}
