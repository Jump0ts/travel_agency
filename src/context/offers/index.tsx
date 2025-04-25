import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from "react";

interface OffersContextType {
	offers: IOffers | null;
}

interface IOffers {
	title: string;
	price: string;
	howLong: string;
	when: string;
	include: string;
	activities: {
		title: string;
		points: string[];
	}[];
	images: {
		src: string;
		alt: string;
	}[];
	capacity: string;
}

const OffersContext = createContext<OffersContextType | undefined>(undefined);

export const useOffers = () => {
	const context = useContext(OffersContext);
	if (!context) throw new Error("useOffers must be used within OffersProvider");
	return context;
};

const OffersProvider = ({ children }: { children: ReactNode }) => {
	const [offers, setOffers] = useState<IOffers | null>(null);

	useEffect(() => {
		fetch("/api/offer", {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		}).then((res) => {
			if (res.ok) {
				res.json().then((data) => {
					setOffers(data);
				});
			}
		});
	}, []);

	return (
		<OffersContext.Provider value={{ offers }}>
			{children}
		</OffersContext.Provider>
	);
};

export default OffersProvider;
