import footer from "./components/footer";
import topBar from "./components/navBars/topBar";
import privacyPolicy from "./pages/privacyPolicy";
import home from "./pages/home";
import customTrips from "./pages/customTrips";
import groupTrips from "./pages/groupTrips";
import birdwatchingTrips from "./pages/birdwatchingTrips";
import sportsTrips from "./pages/sportsTrips";
import cookiePolicy from "./pages/cookiePolicy";
import contactForm from "./components/contactForm";

const es = {
	components: {
		navBars: {
			topBar,
		},
		footer,
		contactForm,
	},
	pages: {
		privacyPolicy,
		cookiePolicy,
		home,
		customTrips,
		groupTrips,
		birdwatchingTrips,
		sportsTrips,
	},
};

export default es;
