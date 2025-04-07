import StandardPageRenderer from "@/components/standardPageRenderer";
import { CUSTOMTRIPSENUM } from "@/lib/pagesEnums/customTrips";
import { poppins400, poppins600 } from "@/ui/fonts";

const CustomTrips = () => {
	const cards = CUSTOMTRIPSENUM.map((item, index) => {
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
			images={[
				{ label: "Image 1", img: "/images/agency.jpg" },
				{ label: "Image 2", img: "/images/agency.jpg" },
				{ label: "Image 3", img: "/images/agency.jpg" },
			]}
			cards={cards}
		/>
	);
};

export default CustomTrips;
