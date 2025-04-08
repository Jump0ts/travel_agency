import footer from "./components/footer";
import topBar from "./components/navBars/topBar";
import privacyPolicy from "./pages/privacyPolicy";
import home from "./pages/home";
import customTrips from "./pages/customTrips";
import groupTrips from "./pages/groupTrips";
import birdwatchingTrips from "./pages/birdwatchingTrips";

const es = {
	components: {
		navBars: {
			topBar,
		},
		footer,
	},
	pages: {
		privacyPolicy,
		home,
		customTrips,
		groupTrips,
		birdwatchingTrips,
	},
};

export default es;
