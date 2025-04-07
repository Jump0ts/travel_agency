import { ExpandLess } from "@mui/icons-material";
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	// Mostrar el botón cuando se hace scroll hacia abajo
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Función para volver al inicio
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		isVisible && (
			<button
				onClick={scrollToTop}
				className="fixed bottom-4 right-4 bg-gray-500 text-white p-3 rounded-full shadow-lg hover:bg-gray-400 transition"
			>
				<ExpandLess className="text-white" />
			</button>
		)
	);
};

export default ScrollToTopButton;
