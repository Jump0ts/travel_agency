import footer from "./components/footer";
import topBar from "./components/navBars/topBar";
import privacyPolicy from "./pages/privacyPolicy";
import home from "./pages/home";
import { customTrips } from "./pages/customTrips";

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
	},
};

export default es;
