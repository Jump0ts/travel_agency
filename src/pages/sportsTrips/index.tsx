import StandardPageRenderer from "@/components/standardPageRenderer";
import {
	SPORTS_TRIPS_ENUM,
	SPORTS_TRIPS_IMAGES,
} from "@/lib/pagesEnums/sportsTrips";
import { poppins400, poppins600 } from "@/ui/fonts";
import { getImages } from "@/utils/getImages";

const SportsTrips = () => {
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
		<StandardPageRenderer
			pageTitle="pages.sportsTrips.title"
			pageDescription="pages.sportsTrips.description"
			pageHowWorks="pages.sportsTrips.howItWorks"
			className={`${poppins400.className} ${poppins600.className}`}
			images={getImages(SPORTS_TRIPS_IMAGES)}
			cards={cards}
		/>
	);
};

export default SportsTrips;
