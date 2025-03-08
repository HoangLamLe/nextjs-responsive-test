"use client";
import Image from "next/image";
import styles from "./index.module.css";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useMediaQuery } from "react-responsive";
import { VuesaxBoldPeopleIcon } from "@/components/Icons/VuesaxBoldPeopleIcon";
import { VuesaxBoldPenTool2Icon } from "@/components/Icons/VuesaxBoldPenTool2Icon";
import { VuesaxBoldCalendarTickIcon } from "@/components/Icons/VuesaxBoldCalendarTickIcon";
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
    title: "24-Hour",
    description:
      "24/7 access ensures operators' businesses run smoothly all year long.",
  },
  {
    icon: VuesaxBoldPenTool2Icon,
    title: "Design",
    description:
      "Combining imaginative universes, play dynamics, and unprecedented gameplay, our games transcend the boundaries of the virtual world by weaving innovative gameplay.",
  },
  {
    icon: VuesaxBoldPeopleIcon,
    title: "Team",
    description:
      "Etech is an award-winning, international studio of designers, artists, animators and producers that create content for the biggest names in film and video games.",
  },
];

export default function Session() {
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });

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
              About Us
            </h2>
            <p style={{ marginTop: "40px" }}>
              Browse our selection of free online games and have a great time
              without leaving the site! Our Kids Games option also includes game
              reviews, extensive game cheats and walkthroughs, and much more. We
              have exclusive free downloads, videos, and articles as well. Etech
              reviews the most popular kids games from all the most popular
              video gaming platforms, so you don’t need to search around for fun
              anywhere else on the Internet. Explore a whole new world of gaming
              on Etech.
            </p>
          </div>
          <div className={styles.userStats}>
            <div>
              <p className={styles.statText}>
                600<span style={{ fontSize: "40px" }}>M</span>+
              </p>
              <p>Users</p>
            </div>
            <div>
              <p className={styles.statText}>135+</p>
              <p>Games</p>
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
                <p className={styles.iconText}>{item.title}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.relativeMarginTop}>
        <Image
          src={"/assets/illustrator.png"}
          alt="banner"
          width={"533"}
          className={`${styles.autoMargin} ${styles.witch}`}
          height={0}
        />
        <Image
          src={"/assets/Pin-map - Copy.png"}
          alt=""
          width={1000}
          height={200}
          style={{ position: "absolute", top: "0", left: "20%" }}
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
          Our Games
        </p>
        <p className={styles.centeredContainer}>
          As a pioneer of mobile app gamification, we take pride in originality
          and individuality, providing global players with state-of-the-art
          games that feature splendid storylines, sensational sound effects, and
          magnificent animation that never cease to impress.
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
            Our Partners
          </p>
        </div>
        <Carousel
          style={{ width: "100%" }}
          opts={{
            align: "start",
          }}
        >
          <CarouselContent style={{ width: "100%" }}>
            {[
              "/assets/rectangle56.png",
              "/assets/rectangle55.png",
              "/assets/rectangle54.png",
              "/assets/rectangle53.png",
              "/assets/rectangle52.png",
              "/assets/rectangle56.png",
              "/assets/rectangle53.png",
              "/assets/rectangle54.png",
            ].map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/5">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div style={{ width: "150px", height: "auto" }}>
                    <Image
                      src={item}
                      alt=""
                      width={100}
                      height={100}
                      layout="responsive"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
