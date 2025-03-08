"use client";
import * as React from "react";
import classes from "./index.module.css";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export function CarouselDemo() {
  const initialTime = 30 * 24 * 60 * 60 + 18 * 60 * 60 + 20 * 60 + 11;
  const [timeLeft, setTimeLeft] = React.useState(initialTime);

  React.useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;
  const isMobile = useMediaQuery({
    query: "(max-width: 760px)",
  });

  return (
    <div style={{ position: "relative" }}>
      <div className={classes.banner}>
        {isMobile ? (
          <svg width="0" height="0">
            <defs>
              <clipPath
                id="smoothEllipseBottom"
                clipPathUnits="objectBoundingBox"
              >
                <path d="M0,0 H1 V0.9 C0.5 0.95, 0.5 0.95, 0 0.9 Z" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg width="0" height="0">
            <defs>
              <clipPath
                id="smoothEllipseBottom"
                clipPathUnits="objectBoundingBox"
              >
                <path d="M0,0 H1 V0.8 C0.5 1, 0.5 1, 0 0.8 Z" />
              </clipPath>
            </defs>
          </svg>
        )}

        <h2
          className={`${classes.bannerTitle} ${classes["font-white-center"]}`}
          style={{ fontFamily: playfair.style.fontFamily }}
        >
          We’re Getting Ready
        </h2>

        <div className={`${classes.time} ${classes.flexCenter}`}>
          <div>
            <h2
              className={classes.textTime}
              style={{ fontFamily: playfair.style.fontFamily }}
            >
              {days}
            </h2>
            <h2 style={{ fontWeight: "600" }}>Days</h2>
          </div>
          <div
            className={classes.textTime}
            style={{ fontFamily: playfair.style.fontFamily }}
          >
            :
          </div>
          <div>
            <h2
              className={classes.textTime}
              style={{ fontFamily: playfair.style.fontFamily }}
            >
              {hours}
            </h2>
            <h2 style={{ fontWeight: "600" }}>Hours</h2>
          </div>
          <div
            className={classes.textTime}
            style={{ fontFamily: playfair.style.fontFamily }}
          >
            :
          </div>
          <div>
            <h2
              className={classes.textTime}
              style={{ fontFamily: playfair.style.fontFamily }}
            >
              {minutes}
            </h2>
            <h2 style={{ fontWeight: "600" }}>Minutes</h2>
          </div>
          <div
            className={classes.textTime}
            style={{ fontFamily: playfair.style.fontFamily }}
          >
            :
          </div>
          <div>
            <h2
              className={classes.textTime}
              style={{ fontFamily: playfair.style.fontFamily }}
            >
              {seconds}
            </h2>
            <h2 style={{ fontWeight: "600" }}>Seconds</h2>
          </div>
        </div>

        <h3 className={classes.title}>
          We will back to something amazing. Getting the latest updates about
          our games. Please sign up to our newsletter.
        </h3>

        <div className={classes.customBox}>
          <input placeholder="Enter your email" />
          <ArrowRight />
        </div>
      </div>

      <Image
        className={classes.fixedPosition}
        src={"/assets/ongTien1.png"}
        alt="Banner"
        width={400}
        height={600}
        quality={100}
      />
    </div>
  );
}
