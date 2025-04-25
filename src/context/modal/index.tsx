// context/ModalContext.tsx
import CookiePolicy from "@/components/cookiePolicy";
import LegalWarning from "@/components/legalWarning";
import Modal from "@/components/modal";
import PrivacyPolicy from "@/components/privacyPolicy";
import { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
	setShowPrivacyPolicy: React.Dispatch<React.SetStateAction<boolean>>;
	setShowLegalWarning: React.Dispatch<React.SetStateAction<boolean>>;
	setShowCookiePolicy: React.Dispatch<React.SetStateAction<boolean>>;
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

	return (
		<ModalContext.Provider
			value={{ setShowPrivacyPolicy, setShowLegalWarning, setShowCookiePolicy }}
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
			{children}
		</ModalContext.Provider>
	);
};
