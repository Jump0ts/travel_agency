import StandardPageRenderer from "@/components/standardPageRenderer";
import { GROUPTRIPSENUM, GROUPTRIPSIMAGES } from "@/lib/pagesEnums/groupTrips";
import { poppins400, poppins600 } from "@/ui/fonts";
import { getImages } from "@/utils/getImages";

const GroupTrips = () => {
	const cards = GROUPTRIPSENUM.map((item, index) => {
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
			images={getImages(GROUPTRIPSIMAGES)}
			cards={cards}
		/>
	);
};

export default GroupTrips;
