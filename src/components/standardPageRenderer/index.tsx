import ExpandableCard from "@/components/expandableCard";
import Slider from "@/components/slider";
import { useTranslation } from "react-i18next";
import ContactForm from "../contactForm";

type StandardPageRendererProps = {
	pageTitle: string;
	pageDescription: string;
	pageHowWorks: string;
	className?: string;
	images: { label?: string; img: string }[]; // Array of image URLs
	cards?: {
		title: string;
		description: string;
		className?: string;
	}[]; // Array of image URLs
};

const StandardPageRenderer = ({
	pageTitle,
	pageDescription,
	images,
	className,
	pageHowWorks,
	cards,
}: StandardPageRendererProps) => {
	const { t } = useTranslation();
	return (
		<div
			className={`flex flex-col items-center justify-center w-full h-full p-4 ${className}`}
		>
			<div className={`flex flex-col w-full md:w-6/10 gap-4 mt-4`}>
				<h1 className={`text-center text-3xl text-gray-600 mt-4`}>
					{t(pageTitle)}
				</h1>
				<p className="text-center text-gray-500 mt-2">{t(pageDescription)}</p>
			</div>
			<div className="flex justify-around flex-row mt-4 mb-6 md:w-7/10 max-w-[500] h-full ">
				<Slider images={images} />
			</div>
			<h1 className={`text-center text-3xl text-gray-600 mt-4`}>
				{t(pageHowWorks)}
			</h1>
			{cards && (
				<div className="flex flex-col w-9/10 md:w-3/4 gap-6 mt-4 mb-6">
					{cards.map((card) => (
						<ExpandableCard
							key={card.title}
							title={card.title}
							description={card.description}
							className={`${card.className}`}
						/>
					))}
				</div>
			)}
			<div className="flex flex-col w-9/10 md:w-4/10 gap-6 mt-4 mb-6">
				<ContactForm subject={t(pageTitle)} />
			</div>
		</div>
	);
};

export default StandardPageRenderer;
