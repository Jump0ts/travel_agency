import ExpandableCard from "@/components/expandableCard";
import Slider from "@/lib/languages/components/slider";
import { poppins400, poppins600 } from "@/ui/fonts";
import { useTranslation } from "react-i18next";

const AuthorTrips = () => {
	const { t } = useTranslation();
	return (
		<div className="flex flex-col items-center justify-center w-full h-full p-4">
			<div className="flex flex-col w-1/2 gap-4 mt-4">
				<h1
					className={`text-center text-3xl text-gray-600 mt-4 ${poppins600.className}`}
				>
					{t("pages.authorTrips.title")}
				</h1>
				<p className="text-center text-gray-500 mt-2">
					{t("pages.home.welcomeCard.agencyDescription")}
				</p>
			</div>
			<div className="flex justify-around flex-row mt-4 mb-6 w-full">
				<Slider
					images={[
						{ label: "test", img: "/aaaaaa" },
						{ label: "test2", img: "/aaaaaa" },
						{ img: "/aaaaaa" },
					]}
				/>
			</div>
			<h1
				className={`text-center text-3xl text-gray-600 mt-4 ${poppins600.className}`}
			>
				{t("pages.authorTrips.howWorks")}
			</h1>
			<div className="flex flex-col w-3/4 gap-6 mt-4 mb-6">
				<ExpandableCard
					title="pages.authorTrips.tripStyle"
					description="pages.authorTrips.tripStyleDescription"
					className={`${poppins400.className} bg-green-100`}
				/>
				<ExpandableCard
					title="pages.authorTrips.tripStyle"
					description="pages.authorTrips.tripStyleDescription"
					className={`${poppins400.className} bg-green-100`}
				/>
			</div>
		</div>
	);
};

export default AuthorTrips;
