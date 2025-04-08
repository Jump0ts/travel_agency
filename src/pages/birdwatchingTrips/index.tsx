import StandardPageRenderer from "@/components/standardPageRenderer";
import {
	BIRDWATCHING_TRIPS_ENUM,
	BIRDWATCHING_TRIPS_IMAGES,
} from "@/lib/pagesEnums/birdwatchingTrips";
import { poppins400, poppins600 } from "@/ui/fonts";
import { getImages } from "@/utils/getImages";

const BirdwatchingTrips = () => {
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
		<StandardPageRenderer
			pageTitle="pages.birdwatchingTrips.title"
			pageDescription="pages.birdwatchingTrips.description"
			pageHowWorks="pages.birdwatchingTrips.howItWorks"
			className={`${poppins400.className} ${poppins600.className}`}
			images={getImages(BIRDWATCHING_TRIPS_IMAGES)}
			cards={cards}
		/>
	);
};

export default BirdwatchingTrips;
