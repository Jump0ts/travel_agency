import { poppins500 } from "@/ui/fonts";
import { useTranslation } from "react-i18next";

const CookiePolicy = () => {
	const { t } = useTranslation();
	return (
		<div
			className={`flex flex-col justify-center w-full h-full p-4 ${poppins500.className}`}
		>
			<div className="flex flex-col gap-4 mt-4  w-full">
				<h1 className="text-center text-3xl text-gray-800 mt-4">
					{t("pages.cookiePolicy.title")}
				</h1>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.cookiePolicy.description")}
				</p>
			</div>
			<div className="flex justify-around flex-col text-left mt-4 mb-6 w-full">
				<h2 className="text-gray-700 mt-2 text-xl">
					{t("pages.cookiePolicy.whatIsCookie.title")}
				</h2>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.cookiePolicy.whatIsCookie.description")}
				</p>
			</div>
			<div className="flex justify-around flex-col text-left mt-4 mb-6 w-full">
				<h2 className="text-gray-700 mt-2 text-xl">
					{t("pages.cookiePolicy.types.title")}
				</h2>
				<h3 className="text-left text-gray-500 mt-2">
					{t("pages.cookiePolicy.types.item1.title")}
				</h3>
				<p className="text-left text-gray-500 mt-2 ml-4">
					{t("pages.cookiePolicy.types.item1.description")}
				</p>
				<h3 className="text-left text-gray-500 mt-2">
					{t("pages.cookiePolicy.types.item2.title")}
				</h3>
				<p className="text-left text-gray-500 mt-2 ml-4">
					{t("pages.cookiePolicy.types.item2.description")}
				</p>
				<h3 className="text-left text-gray-500 mt-2">
					{t("pages.cookiePolicy.types.item3.title")}
				</h3>
				<p className="text-left text-gray-500 mt-2 ml-4">
					{t("pages.cookiePolicy.types.item3.description")}
				</p>
			</div>
			<div className="flex justify-around flex-col text-left mt-4 mb-6 w-full">
				<h2 className="text-gray-700 mt-2 text-xl">
					{t("pages.cookiePolicy.cookieManagement.title")}
				</h2>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.cookiePolicy.cookieManagement.description")}
				</p>
			</div>
			<div className="flex justify-around flex-col text-left mt-4 mb-6 w-full">
				<h2 className="text-gray-700 mt-2 text-xl">
					{t("pages.cookiePolicy.changes.title")}
				</h2>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.cookiePolicy.changes.description")}
				</p>
			</div>
			<div className="flex justify-around flex-col text-left mt-4 mb-6 w-full">
				<h2 className="text-gray-700 mt-2 text-xl">
					{t("pages.cookiePolicy.contact.title")}
				</h2>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.cookiePolicy.contact.description")} redestinea@gmail.com
				</p>
			</div>
		</div>
	);
};

export default CookiePolicy;
