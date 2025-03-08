"use client";
import { MoreIcon } from "@/components/Icons/MoreIcon";
import { White_logoIcon2 } from "@/components/Icons/White_logoIcon2";
import { useState } from "react";
import { X, Check } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import styles from "./index.module.css";

const MENU_ITEMS = [
  { text: "ABOUT US" },
  { text: "GAMES" },
  { text: "PARTNERS" },
  { text: "CONTACT US" },
];

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div>
          <White_logoIcon2 className={styles.logo} />
        </div>

        <nav
          className={`${isMenuVisible ? styles.show : ""} ${styles.menuList}`}
        >
          {MENU_ITEMS.map(({ text }) => (
            <div
              key={text}
              className={`${styles.menuItem}`}
            >
              {text}
            </div>
          ))}
          <div className={`${styles.languageSelector} ${styles.menuItem}`}>
            <Popover>
              <PopoverTrigger asChild>
                <div>
                  <Image
                    src="/assets/78e0c9406a81fbb09f1d7a70fa3ac969.png"
                    alt="Select language"
                    width={40}
                    height={40}
                  />
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className={styles.languageMenu}>

                  <div className={styles.languageOption}>
                    <div className={styles.iconCheck}>

                      {/* <Check /> */}
                    </div>
                    <Image
                      src="/assets/1d84c4886fb2e673f2f9443c82a6404b.png"
                      alt="Vietnamese flag"
                      width={40}
                      height={40}
                    />
                    <label>Vietnamese</label>
                  </div>
                  <div className={styles.border}></div>
                  <div className={styles.languageOption}>
                    <div className={styles.iconCheck}>

                      <Check />
                    </div>
                    <Image
                      src="/assets/78e0c9406a81fbb09f1d7a70fa3ac969.png"
                      alt="English flag"
                      width={40}
                      height={40}
                    />
                    <label>English</label>
                  </div>
                </div>

              </PopoverContent>
            </Popover>
          </div>
          {isMenuVisible && (
            <X
              onClick={() => setIsMenuVisible(false)}
              className={styles.iconClose}
            />
          )}
        </nav>

        <div className={styles.iconRight}>
          <MoreIcon
            className={styles.iconMore}
            onClick={() => setIsMenuVisible(true)}
          />
        </div>
      </div>
    </header>
  );
}
