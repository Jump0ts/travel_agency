import { useOffers } from "@/context/offers";
import { poppins400, poppins500, poppins600, poppins700 } from "@/ui/fonts";
import CustomSlider from "../slider";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Offers = () => {
	const { offers } = useOffers();
	const { t } = useTranslation();

	return (
		<div
			className={`${poppins600.className} flex flex-col items-center justify-center w-full h-full p-4`}
		>
			<h1
				className={`${poppins700.className} text-3xl  md:text-4xl text-blue-400`}
			>
				{offers?.title}
			</h1>
			<p className="text-xl">{offers?.price.toUpperCase()}</p>
			<p className="text-2xl text-gray-600">{`${offers?.howLong} ---- ${offers?.when}`}</p>
			<p>{offers?.include}</p>
			<p>
				{offers?.activities.map((act) => {
					return (
						<div key={act.title} className="flex flex-col items-center">
							<h2 className={`${poppins500.className} text-2xl text-blue-400`}>
								{act.title}
							</h2>
							<ul className="list-disc list-inside">
								{act.points.map((point, index) => (
									<li
										key={index}
										className={`${poppins400.className} text-gray-600`}
									>
										{point}
									</li>
								))}
							</ul>
						</div>
					);
				})}
			</p>
			<p className="text-2xl text-gray-600">{offers?.capacity}</p>
			<Link
				href="/contact"
				className={`${poppins500.className} text-white mt-4 text-2xl bg-blue-400 rounded-lg p-2 hover:bg-blue-500 transition duration-300`}
			>
				{t("components.offers.contactUs")}
			</Link>
			<div className="flex flex-col gap-2 mt-4 mb-6 w-full flex-col md:flex-row items-center justify-center">
				<CustomSlider images={offers?.images || []} width={200} height={300} />
			</div>
		</div>
	);
};

export default Offers;
