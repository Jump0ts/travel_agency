import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";
import ImageWithFallback from "../imageWithFallback";

type CardProps = {
	title: string;
	description: string;
	image: string;
	sx?: React.CSSProperties;
	className?: string;
};

const Card = ({ title, description, image, sx, className }: CardProps) => {
	const { t } = useTranslation();
	return (
		<div
			className={`flex flex-row justify-around rounded-xl shadow-xl gap-4 w-full h-full text-center ${styles.wrapper} ${className}`}
			style={sx}
		>
			<div className={`flex flex-col gap-2 ${styles.textContainer}`}>
				<h2 className="text-xl font-bold">{t(title)}</h2>
				<p className="text-gray-600">{t(description)}</p>
			</div>
			<div className="flex flex-col gap-2 max-h-[300px] max-w-[500px]">
				<ImageWithFallback
					src={image}
					alt={`${title} Home Image"`}
					width={500}
					height={600}
					className="rounded-lg shadow-lg max-h-[300px] max-w-[500px] object-cover object-center transition-transform duration-300 hover:scale-105"
					loading="lazy"
				/>
			</div>
		</div>
	);
};

export default Card;
