import footer from "./components/footer";
import topBar from "./components/navBars/topBar";
import privacyPolicy from "./pages/privacyPolicy";
import home from "./pages/home";
import authorTrips from "./pages/authorTrips";

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
		authorTrips,
	},
};

export default es;
