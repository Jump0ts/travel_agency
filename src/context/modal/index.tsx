// context/ModalContext.tsx
import CookiePolicy from "@/components/cookiePolicy";
import LegalWarning from "@/components/legalWarning";
import Modal from "@/components/modal";
import PrivacyPolicy from "@/components/privacyPolicy";
import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from "react";
import { useOffers } from "../offers";
import Offers from "@/components/offers";
import { useRouter } from "next/router";

interface ModalContextType {
	setShowPrivacyPolicy: React.Dispatch<React.SetStateAction<boolean>>;
	setShowLegalWarning: React.Dispatch<React.SetStateAction<boolean>>;
	setShowCookiePolicy: React.Dispatch<React.SetStateAction<boolean>>;
	setShowOffersModal: React.Dispatch<React.SetStateAction<boolean>>;
	handleCloseModals: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
	const context = useContext(ModalContext);
	if (!context) throw new Error("useModal must be used within ModalProvider");
	return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
	const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
	const [showLegalWarning, setShowLegalWarning] = useState(false);
	const [showCookiePolicy, setShowCookiePolicy] = useState(false);
	const [showOffersModal, setShowOffersModal] = useState(false);
	const { offers } = useOffers();
	const router = useRouter();

	const handleCloseModals = () => {
		setShowPrivacyPolicy(false);
		setShowLegalWarning(false);
		setShowCookiePolicy(false);
		setShowOffersModal(false);
	};

	useEffect(() => {
		handleCloseModals();
	}, [router.asPath]);

	return (
		<ModalContext.Provider
			value={{
				setShowPrivacyPolicy,
				setShowLegalWarning,
				setShowCookiePolicy,
				setShowOffersModal,
				handleCloseModals,
			}}
		>
			<Modal
				isOpen={showPrivacyPolicy}
				onClose={() => setShowPrivacyPolicy(false)}
			>
				<PrivacyPolicy />
			</Modal>
			<Modal
				isOpen={showCookiePolicy}
				onClose={() => setShowCookiePolicy(false)}
			>
				<CookiePolicy />
			</Modal>
			<Modal
				isOpen={showLegalWarning}
				onClose={() => setShowLegalWarning(false)}
			>
				<LegalWarning />
			</Modal>
			{offers && (
				<Modal
					isOpen={showOffersModal}
					onClose={() => setShowOffersModal(false)}
				>
					<Offers />
				</Modal>
			)}
			{children}
		</ModalContext.Provider>
	);
};
