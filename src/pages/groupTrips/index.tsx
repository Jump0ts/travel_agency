import StandardPageRenderer from "@/components/standardPageRenderer";
import {
	GROUP_TRIPS_ENUM,
	GROUP_TRIPS_IMAGES,
} from "@/lib/pagesEnums/groupTrips";
import { poppins400, poppins600 } from "@/ui/fonts";
import { getImages } from "@/utils/getImages";

const GroupTrips = () => {
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
		<StandardPageRenderer
			pageTitle="pages.groupTrips.title"
			pageDescription="pages.groupTrips.description"
			pageHowWorks="pages.groupTrips.howItWorks"
			className={`${poppins600.className}`}
			images={getImages(GROUP_TRIPS_IMAGES)}
			cards={cards}
		/>
	);
};

export default GroupTrips;
