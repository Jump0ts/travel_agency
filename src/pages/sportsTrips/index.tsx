import StandardPageRenderer from "@/components/standardPageRenderer";
import {
	SPORTSTRIPSENUM,
	SPORTSTRIPSIMAGES,
} from "@/lib/pagesEnums/sportsTrips";
import { poppins400, poppins600 } from "@/ui/fonts";
import { getImages } from "@/utils/getImages";

const SportsTrips = () => {
	const cards = SPORTSTRIPSENUM.map((item, index) => {
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
			images={getImages(SPORTSTRIPSIMAGES)}
			cards={cards}
		/>
	);
};

export default SportsTrips;
