import styles from "./index.module.css"; // Updated class name for clarity

import { ArrowRight } from "lucide-react";
import { useTranslations } from 'next-intl';

import { AntDesignTwitterOutlinedIcon } from "@/components/Icons/AntDesignTwitterOutlinedIcon";
import { AntDesignFacebookFilledIcon } from "@/components/Icons/AntDesignFacebookFilledIcon";
import { AntDesignLinkedinFilledIcon } from "@/components/Icons/AntDesignLinkedinFilledIcon";
import { VuesaxBoldLocationIcon } from "@/components/Icons/VuesaxBoldLocationIcon";
import { VuesaxBoldMobileIcon } from "@/components/Icons/VuesaxBoldMobileIcon";
import { White_logoIcon2 } from "@/components/Icons/White_logoIcon2";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <div className={styles.footerBackground}>
      <div className={styles.horizontalDivider}></div>
      <div className={styles.footerContent}>
        <div className={styles.container}>
          <div className={styles.logoSection}>
            <White_logoIcon2 className={styles.logo} />
            <div className={styles.iconContainer}>
              <AntDesignTwitterOutlinedIcon />
              <AntDesignFacebookFilledIcon />
              <AntDesignLinkedinFilledIcon />
            </div>
          </div>

          <div className={styles.infoSection}>
            <div>
              <h4 className={styles.sectionTitle}>{t("address")}</h4>
              <div className={`${styles.contactInfo} ${styles.alignStart}`}>
                <VuesaxBoldLocationIcon className={styles.icon} />
                <div className={styles.addressInfo}>
                  <div>
                  {t("us")}
                  </div>
                  <div>
                  {t("vn")}
                  </div>
                </div>
              </div>
              <div className={styles.contactInfo}>
                <VuesaxBoldMobileIcon className={styles.icon} />
                {t("phone")}
              </div>
            </div>

            <div className={styles.subscribeSection}>
              <h4 className={styles.sectionTitle}>{t("subscribe")}</h4>
              <p style={{ marginTop: "40px"}}>
              {t("subscribeDesc")}
              </p>
              <div className={styles.subscribeBox}>
                <input type="email" placeholder={t("mail")} />
                <ArrowRight className={styles.subscribeIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.horizontalDivider}></div>
      <div className={styles.copyRight}>2017 Copyright. Policy.</div>
    </div>
  );
};

export default Footer;
