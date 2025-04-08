import StandardPageRenderer from "@/components/standardPageRenderer";
import {
	CUSTOM_TRIPS_ENUM,
	CUSTOM_TRIPS_IMAGES,
} from "@/lib/pagesEnums/customTrips";
import { poppins400, poppins600 } from "@/ui/fonts";
import { getImages } from "@/utils/getImages";

const CustomTrips = () => {
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
		<StandardPageRenderer
			pageTitle="pages.customTrips.title"
			pageDescription="pages.customTrips.description"
			pageHowWorks="pages.customTrips.howItWorks"
			className={`${poppins400.className} ${poppins600.className}`}
			images={getImages(CUSTOM_TRIPS_IMAGES)}
			cards={cards}
		/>
	);
};

export default CustomTrips;
