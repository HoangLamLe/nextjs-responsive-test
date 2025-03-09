"use client";
import Image from "next/image";
import styles from "./index.module.css";

import { useMediaQuery } from "react-responsive";
import { useTranslations } from 'next-intl';
import { VuesaxBoldPeopleIcon } from "@/components/Icons/VuesaxBoldPeopleIcon";
import { VuesaxBoldPenTool2Icon } from "@/components/Icons/VuesaxBoldPenTool2Icon";
import { VuesaxBoldCalendarTickIcon } from "@/components/Icons/VuesaxBoldCalendarTickIcon";
import  EmblaCarousel  from "../../../components/carousel/EmblaCarousel";

import { MapIcon } from "@/components/Icons/MapIcon";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const cards = [
  {
    title: "E-Space",
    banner: "/assets/bitmap.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Pirates",
    banner: "/assets/bitmap2.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Magic tree",
    banner: "/assets/bitmap3.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Kingland",
    banner: "/assets/bitmap4.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Witch Party",
    banner: "/assets/bitmap5.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Aborigines",
    banner: "/assets/bitmap6.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "The Last Game",
    banner: "/assets/bitmap7.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Rocky",
    banner: "/assets/bitmap8.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Cinderella",
    banner: "/assets/bitmap9.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "G-Dragon",
    banner: "/assets/bitmap10.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Blue Fire",
    banner: "/assets/bitmap11.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Egypt Game",
    banner: "/assets/bitmap12.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const features = [
  {
    icon: VuesaxBoldCalendarTickIcon,
    title: "24h",
    description: "24hDesc",
  },
  {
    icon: VuesaxBoldPenTool2Icon,
    title: "design",
    description: "designDesc",
  },
  {
    icon: VuesaxBoldPeopleIcon,
    title: "team",
    description: "teamDesc",
  },
]

export default function Session() {
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });
  const t = useTranslations("Session");
  

  const renderItems = (items: typeof cards) =>
    items.map((item) => (
      <div
        key={item.title}
        className={styles.gridItem}
        style={{
          backgroundImage: `linear-gradient(360deg, rgba(0, 9, 225, 0.5) 6.79%, rgba(0, 0, 0, 0) 61.34%), url(${item.banner})`,
        }}
      >
        <p className={styles.customFontStyle}>{item.title}</p>
        <p>{item.description}</p>
      </div>
    ));

  return (
    <div>
      <div className={styles.about}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            {" "}
            <h2
              className={styles.aboutUs}
              style={{ fontFamily: playfair.style.fontFamily }}
            >
              {t("aboutUs")}
            </h2>
            <p style={{ marginTop: "40px" }}>
              {t("desc")}
            </p>
          </div>
          <div className={styles.userStats}>
            <div>
              <p className={styles.statText}>
                600<span style={{ fontSize: "40px" }}>M</span>+
              </p>
              <p>
                {t("users")}

              </p>
            </div>
            <div>
              <p className={styles.statText}>135+</p>
              <p>
                {t("games")}

              </p>
            </div>
          </div>
        </div>
        <div className={styles.iconSection}>
          {features.map((item) => (
            
            <div className={styles.flexContainerStart} key={item.title}>
              <div className={styles.bgIcon}>
                <item.icon style={{ width: "24px" }} />
              </div>
              <div>
                <>
                </>
                <p className={styles.iconText}>{t(item.title)}</p>
                <p>{t(item.description)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.relativeMarginTop}>
      <Image
        src="/assets/illustrator.png"
        alt="banner"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: isMobile ? "40%" : "533px", height: "auto" }}
        className={`${styles.autoMargin} ${styles.witch}`}
      />
        <Image
          src={"/assets/Pin-map - Copy.png"}
          alt=""
          width={0}
          height={200}
          style={{ position: "absolute", top: "0", left: "20%", width: isMobile ? "80%" : "1000px" }}
        />
        <MapIcon className={styles.earthIcon} />
      </div>
      <div className={styles.marginSection}>
        <p
          className={styles.aboutUs}
          style={{
            textAlign: "center",
            fontFamily: playfair.style.fontFamily,
          }}
        >
          {t("ourGames")}

        </p>
        <p className={styles.centeredContainer}>
          {t("ourGamesDesc")}
        </p>
      </div>
      <div className={styles.gameSection}>
        <div>{renderItems(cards.slice(0, 3))}</div>
        <div style={{ marginTop: "118px" }}>
          {renderItems(cards.slice(3, 6))}
        </div>
        {!isMobile && (
          <>
            <div>{renderItems(cards.slice(6, 9))}</div>
            <div style={{ marginTop: "118px" }}>
              {renderItems(cards.slice(9, 12))}
            </div>
          </>
        )}
      </div>

      <div
        className={styles.fullWidthSection}
        style={{ background: "#F6F6F6", padding: "120px 0", marginTop: "128px" }}
      >
        <div>
          <p
            className={styles.aboutUs}
            style={{
              textAlign: "center",
              marginTop: "128px",
              fontFamily: playfair.style.fontFamily,
              marginBottom: "80px"
            }}
          >
            {t("ourPartners")}

          </p>
        </div>
        {/* s */}
        <EmblaCarousel/>
      </div>
    </div>
  );
}
