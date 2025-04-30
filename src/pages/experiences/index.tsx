import CivitatisWidget from "@/components/civitatisWidget";
import { CIVITATIS_CITIES_ENUM } from "@/lib/pagesEnums/civtitatisCitiesEnum";
import { poppins400 } from "@/ui/fonts";
import { Button, MenuItem, Select, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Experiences = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [selectedZone, setSelectedZone] = useState(CIVITATIS_CITIES_ENUM[0]);

  return (
    <>
      <Head>
        <title>{t("components.titleMetadata.experiences.title")}</title>
        <meta
          name="description"
          content={t("components.titleMetadata.experiences.description")}
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
        />
        <meta
          property="og:title"
          content={t("components.titleMetadata.experiences.title")}
        />
        <meta
          property="og:description"
          content={t("components.titleMetadata.experiences.description")}
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_RSRC_REDESTINEA_URL}images/experiences/experience.jpg`}
        />
      </Head>
      <div
        className={`min-h-screen overflow-auto ${poppins400.className} antialiased p-4`}
      >
        <div className="shadow-md flex flex-row flex-wrap items-center justify-center gap-4 bg-gray-200 p-4 rounded-lg mb-4">
          <div className="flex flex-row flex-wrap items-center w-3/4 gap-4">
            <Typography
              variant="h6"
              className="text-center text-2xl font-bold mb-4"
            >
              {t("pages.experiences.question")}
            </Typography>
            <Select
              className="w-full md:w-1/2 lg:w-1/6"
              defaultValue={CIVITATIS_CITIES_ENUM[0].value}
              onChange={(e) => {
                const zone = CIVITATIS_CITIES_ENUM.find(
                  (z) => z.value === e.target.value,
                );
                if (zone) {
                  setSelectedZone(zone);
                }
              }}
            >
              {CIVITATIS_CITIES_ENUM.map((zone) => (
                <MenuItem key={zone.id} value={zone.value}>
                  {zone.name}
                </MenuItem>
              ))}
            </Select>
          </div>
          <Button
            variant="contained"
            className="w-full md:w-1/2 lg:w-1/6"
            style={{
              backgroundColor: "#86c4ae",
            }}
            onClick={() =>
              window.open(
                "https://www.civitatis.com/es/?ag_aid=75042",
                "_blank",
              )
            }
          >
            {t("pages.experiences.seeAllExperiences")}
          </Button>
        </div>
        <CivitatisWidget zone={selectedZone} />
      </div>
    </>
  );
};

export default Experiences;
