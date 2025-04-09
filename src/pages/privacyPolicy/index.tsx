import { poppins500 } from "@/ui/fonts";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
	const { t } = useTranslation();
	return (
		<div
			className={`flex flex-col justify-center w-full h-full p-4 ${poppins500.className}`}
		>
			<div className="flex flex-col gap-4 mt-4  w-full">
				<h1 className="text-center text-3xl text-gray-800 mt-4">
					{t("pages.privacyPolicy.title")}
				</h1>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.privacyPolicy.description")}
				</p>
			</div>
			<div className="flex justify-around flex-col text-left mt-4 mb-6 w-full">
				<h2 className="text-gray-700 mt-2 text-xl">
					{t("pages.privacyPolicy.dataProcessing.title")}
				</h2>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.privacyPolicy.dataProcessing.description")}
				</p>
			</div>
			<div className="flex justify-around flex-col text-left mt-4 mb-6 w-full">
				<h2 className="text-gray-700 mt-2 text-xl">
					{t("pages.privacyPolicy.purpose.title")}
				</h2>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.privacyPolicy.purpose.description")}
				</p>
			</div>
			<div className="flex justify-around flex-col text-left mt-4 mb-6 w-full">
				<h2 className="text-gray-700 mt-2 text-xl">
					{t("pages.privacyPolicy.dataRetention.title")}
				</h2>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.privacyPolicy.dataRetention.description")}
				</p>
			</div>
			<div className="flex justify-around flex-col text-left mt-4 mb-6 w-full">
				<h2 className="text-gray-700 mt-2 text-xl">
					{t("pages.privacyPolicy.dataLegitimation.title")}
				</h2>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.privacyPolicy.dataLegitimation.item1")}
				</p>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.privacyPolicy.dataLegitimation.item2")}
				</p>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.privacyPolicy.dataLegitimation.item3")}
				</p>
			</div>
			<div className="flex justify-around flex-col text-left mt-4 mb-6 w-full">
				<h2 className="text-gray-700 mt-2 text-xl">
					{t("pages.privacyPolicy.dataRecipients.title")}
				</h2>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.privacyPolicy.dataRecipients.description")}
				</p>
			</div>
			<div className="flex justify-around flex-col text-left mt-4 mb-6 w-full">
				<h2 className="text-gray-700 mt-2 text-xl">
					{t("pages.privacyPolicy.dataTransfer.title")}
				</h2>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.privacyPolicy.dataTransfer.description")}
				</p>
			</div>
			<div className="flex justify-around flex-col text-left mt-4 mb-6 w-full">
				<h2 className="text-gray-700 mt-2 text-xl">
					{t("pages.privacyPolicy.rights.title")}
				</h2>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.privacyPolicy.rights.item1")}
				</p>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.privacyPolicy.rights.item2")}
				</p>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.privacyPolicy.rights.item3")}
				</p>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.privacyPolicy.rights.item4")}
				</p>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.privacyPolicy.rights.item5")}
				</p>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.privacyPolicy.rights.item6")}
				</p>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.privacyPolicy.rights.item7")}
					<Link
						href="https://www.aepd.es"
						className="text-blue-500 hover:underline"
					>
						{t("pages.privacyPolicy.rights.item8")}
					</Link>
				</p>
			</div>
			<div className="flex justify-around flex-col text-left mt-4 mb-6 w-full">
				<h2 className="text-gray-700 mt-2 text-xl">
					{t("pages.privacyPolicy.howObtainData.title")}
				</h2>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.privacyPolicy.howObtainData.item1")}
				</p>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.privacyPolicy.howObtainData.item2")}
				</p>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.privacyPolicy.howObtainData.item3")}
				</p>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
