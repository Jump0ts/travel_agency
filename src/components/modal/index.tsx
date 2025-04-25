"use client";

import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import CancelIcon from "@mui/icons-material/Cancel";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
	// Evita renderizar en SSR
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};

		if (isOpen) {
			document.addEventListener("keydown", handleEscape);
		}

		return () => {
			document.removeEventListener("keydown", handleEscape);
		};
	}, [isOpen, onClose]);

	if (!isOpen || !mounted) return null;

	return ReactDOM.createPortal(
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/50"
			onClick={onClose}
		>
			<div
				className="bg-white p-6 rounded-xl shadow-xl max-w-[80%] w-full relative overflow-y-auto max-h-[85vh] h-content"
				onClick={(e) => e.stopPropagation()}
			>
				<button
					onClick={onClose}
					className="absolute top-2 right-2 text-gray-500 hover:text-black"
				>
					<CancelIcon className="w-6 h-6" />
				</button>
				<div className="overflow-y-auto max-h-[80vh]">
					{/* Contenido del modal */}
					{children}
				</div>
			</div>
		</div>,
		document.body
	);
}
