import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useModal } from "@/context/modal";
import { BRAND } from "@/config/brand";

const Footer = () => {
  const { t } = useTranslation();
  const { setShowCookiePolicy, setShowLegalWarning, setShowPrivacyPolicy } =
    useModal();

  return (
    <footer className="bg-orange-100 text-black py-4 border-t-2 border-gray-200 mt-auto">
      <div className="container mx-auto text-center width-full">
        <span
          className="text-black hover:text-gray-800 cursor-pointer"
          onClick={() => setShowPrivacyPolicy(true)}
        >
          {t("components.footer.privacyPolicy")}
        </span>
        <span className="mx-2">|</span>
        <span
          className="text-black hover:text-gray-800 cursor-pointer"
          onClick={() => setShowCookiePolicy(true)}
        >
          {t("components.footer.cookiePolicy")}
        </span>
        <span className="mx-2">|</span>
        <span
          className="text-black hover:text-gray-800 cursor-pointer"
          onClick={() => setShowLegalWarning(true)}
        >
          {t("components.footer.legalWarning")}
        </span>
      </div>
      <div className="container mx-auto text-center">
        <Link
          href={BRAND.links.github}
          aria-label="GitHub"
          className="text-black hover:text-gray-800"
        >
          <GitHub style={{ width: "40px", height: "40px" }} />
        </Link>
        <Link
          href={BRAND.links.linkedin}
          aria-label="LinkedIn"
          className="text-black hover:text-gray-800"
        >
          <LinkedIn style={{ width: "40px", height: "40px" }} />
        </Link>
        <Link
          href={`mailto:${BRAND.contactEmail}`}
          aria-label="Email"
          className="text-black hover:text-gray-800"
        >
          <Mail style={{ width: "40px", height: "40px" }} />
        </Link>
      </div>
      <div className="container mx-auto text-center">
        <p>{t("components.footer.copyright")}</p>
        <p className="text-sm text-gray-600 mt-1">{BRAND.demoNotice}</p>
      </div>
    </footer>
  );
};

export default Footer;
