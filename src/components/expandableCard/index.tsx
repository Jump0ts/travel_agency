import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";

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

	return expanded ? (
		<div
			className={`flex flex-col justify-around rounded-xl shadow-xl gap-4 w-full h-full text-center ${styles.wrapper} ${className}`}
			style={sx}
		>
			<h2 onClick={() => handleExpand()} className="text-xl font-bold">
				{t(title)}
			</h2>
			<p className="text-gray-600">{t(description)}</p>
		</div>
	) : (
		<div
			className={`flex flex-row justify-between rounded-xl shadow-xl gap-4 w-full h-full text-center ${styles.wrapper} ${className}`}
			style={sx}
			onClick={() => handleExpand()}
		>
			<p>{t(title)}</p>
			<AddCircleOutline className="text-gray-600" />
		</div>
	);
};

export default ExpandableCard;
