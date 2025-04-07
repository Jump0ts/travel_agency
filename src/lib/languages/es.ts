import footer from "./components/footer";
import topBar from "./components/navBars/topBar";
import privacyPolicy from "./pages/privacyPolicy";
import home from "./pages/home";

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
	},
};

export default es;
