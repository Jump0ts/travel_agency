import React from "react";
import { poppins500 } from "@/ui/fonts";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const LegalWarning = () => {
	const { t } = useTranslation();
	return (
		<div
			className={`flex flex-col justify-center w-full h-full p-4 ${poppins500.className}`}
		>
			<div className="flex flex-col gap-4 mt-4  w-full">
				<h1 className="text-center text-3xl text-gray-800 mt-4">
					{t("pages.legalWarning.title")}
				</h1>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.legalWarning.introduction")}
					{t("pages.legalWarning.personalData")}
					{t("pages.legalWarning.endOfIntroduction")}
				</p>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.legalWarning.legalBase")}
				</p>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.legalWarning.prospectiveOffer")}
				</p>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.legalWarning.dataRetention")}
				</p>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.legalWarning.dataCession")}
				</p>
				<p className="text-left text-gray-500 mt-2">
					{t("pages.legalWarning.confirmationRights")}
					<Link
						href="mailto:redestinea@gmail.com"
						className="text-blue-500 hover:underline"
					>
						redestineagmail.com
					</Link>
					{t("pages.legalWarning.endConfirmationRights")}
					<Link
						href="https://www.aepd.es"
						className="text-blue-500 hover:underline"
					>
						AEPD.
					</Link>
				</p>
			</div>
		</div>
	);
};

export default LegalWarning;
