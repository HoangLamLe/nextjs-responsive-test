"use client";
import { MoreIcon } from "@/components/Icons/MoreIcon";
import { White_logoIcon2 } from "@/components/Icons/White_logoIcon2";
import { useState } from "react";
import { X, Check } from "lucide-react";
import { useTranslations } from 'next-intl';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import styles from "./index.module.css";
import { useI18n } from "@/i18nProvider";

export default function Header() {
  const t = useTranslations("Header");
  const { locale, changeLanguage } = useI18n();
  const MENU_ITEMS = [
    { text: t('aboutUs') },
    { text: t('games') },
    { text: t('partners') },
    { text: t('contactUs') },
  ];
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
                  {
                    locale === "en" ?
                      <Image
                        src="/assets/78e0c9406a81fbb09f1d7a70fa3ac969.png"
                        alt="Select language"
                        width={40}
                        height={40}
                      />
                      :
                      <Image
                        src="/assets/1d84c4886fb2e673f2f9443c82a6404b.png"
                        alt="Select language"
                        width={40}
                        height={40}
                      />
                  }
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className={styles.languageMenu}>

                  <div className={styles.languageOption}
                    onClick={
                      () => {
                        if (locale === "en") {
                          changeLanguage("vi")
                        }
                      }
                    }
                  >
                    <div className={styles.iconCheck}>
                      {locale === "vi" &&
                        <Check />
                      }
                    </div>
                    <Image
                      src="/assets/1d84c4886fb2e673f2f9443c82a6404b.png"
                      alt="Vietnamese flag"
                      width={40}
                      height={40}
                    />
                    <label>{t('vietnamese')}</label>
                  </div>
                  <div className={styles.border}></div>
                  <div className={styles.languageOption} onClick={
                    () => {
                      if (locale === "vi") {
                        changeLanguage("en")
                      }
                    }
                  }>
                    <div className={styles.iconCheck}>
                      {locale === "en" &&
                        <Check />
                      }
                    </div>
                    <Image
                      src="/assets/78e0c9406a81fbb09f1d7a70fa3ac969.png"
                      alt="English flag"
                      width={40}
                      height={40}
                    />
                    <label>{t('english')}</label>
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
