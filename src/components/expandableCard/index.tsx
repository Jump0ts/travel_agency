import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import { RemoveCircleOutline } from "@mui/icons-material";

type CardProps = {
	title: string;
	description: string;
	sx?: React.CSSProperties;
	className?: string;
};

const ExpandableCard = ({ title, description, sx, className }: CardProps) => {
	const [expanded, setExpanded] = useState(false);
	const { t } = useTranslation();

	const handleExpand = () => {
		setExpanded(!expanded);
	};

	return (
		<div
			className={`flex flex-col justify-around rounded-xl shadow-xl gap-4 w-full h-full text-left transition-all duration-300 ease-in-out ${styles.wrapper} ${className}`}
			style={sx}
			onClick={() => !expanded && handleExpand()}
		>
			{expanded ? (
				<>
					<div
						className="flex flex-row justify-between items-center"
						onClick={() => handleExpand()}
					>
						<h2 className="text-xl font-bold">{t(title)}</h2>
						<RemoveCircleOutline className="text-gray-600 cursor-pointer" />
					</div>
					<p className="text-gray-600">{t(description)}</p>
				</>
			) : (
				<div className="flex flex-row justify-between items-center">
					<p>{t(title)}</p>
					<AddCircleOutline className="text-gray-600" />
				</div>
			)}
		</div>
	);
};

export default ExpandableCard;
