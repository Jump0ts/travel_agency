import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { poppins500 } from "@/ui/fonts";
import { useState } from "react";
import { Menu, Close } from "@mui/icons-material"; // Íconos para abrir/cerrar el menú
import ImageWithFallback from "@/components/imageWithFallback";

const NavButtons = [
  { name: "Home", path: "/", label: "home" },
  { path: "/experiences", label: "experiences" },
  { path: "/customTrips", label: "customTrips" },
  { path: "/groupTrips", label: "groupTrips" },
  { path: "/birdwatchingTrips", label: "birdwatchingTrips" },
  { path: "/sportsTrips", label: "sportsTrips" },
  { path: "/contact", label: "contact" },
];

const TopBar = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`${styles.topBar} ${poppins500.className} antialiased`}>
      <div className={`${styles.news} bg-orange-400`}>
        <p>{t("components.navBars.topBar.news")}</p>
      </div>
      <div className="flex flex-row justify-around items-center gap-4 p-4 rounded w-full">
        <ImageWithFallback
          src="redestinea-complete-logo.png"
          alt="Logo"
          width={200}
          height={60}
        />
        <div
          className="md:hidden p-2 rounded"
          style={{ backgroundColor: "#67b80eab" }}
        >
          {menuOpen ? (
            <Close
              className="text-gray-800 cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <Menu
              className="text-gray-800 cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>
      <div
        className={`${
          menuOpen ? styles.navButtons : "hidden"
        } w-full md:flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 md:bg-transparent md:p-2`}
        style={{ backgroundColor: "#67b80eab" }}
      >
        {NavButtons.map((item) => (
          <div
            key={`${item.label}-container`}
            className={
              pathname == item.path
                ? `${styles.link} bg-green-600 rounded h-[20px]`
                : `${styles.link} hover:bg-green-500 rounded h-[20px]`
            }
          >
            <Link href={item.path} onClick={() => setMenuOpen(false)}>
              {t(`components.navBars.topBar.${item.label}`)}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBar;

// <div className="md:hidden ">
// 					{menuOpen ? (
// 						<Close
// 							className="text-gray-800 cursor-pointer"
// 							onClick={toggleMenu}
// 						/>
// 					) : (
// 						<Menu
// 							className="text-gray-800 cursor-pointer"
// 							onClick={toggleMenu}
// 						/>
// 					)}
// 				</div>
