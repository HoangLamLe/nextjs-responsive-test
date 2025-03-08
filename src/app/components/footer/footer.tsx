import styles from "./index.module.css"; // Updated class name for clarity

import { ArrowRight } from "lucide-react";
import { AntDesignTwitterOutlinedIcon } from "@/components/Icons/AntDesignTwitterOutlinedIcon";
import { AntDesignFacebookFilledIcon } from "@/components/Icons/AntDesignFacebookFilledIcon";
import { AntDesignLinkedinFilledIcon } from "@/components/Icons/AntDesignLinkedinFilledIcon";
import { VuesaxBoldLocationIcon } from "@/components/Icons/VuesaxBoldLocationIcon";
import { VuesaxBoldMobileIcon } from "@/components/Icons/VuesaxBoldMobileIcon";
import { White_logoIcon2 } from "@/components/Icons/White_logoIcon2";

const Footer = () => {
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
              <h4 className={styles.sectionTitle}>Address</h4>
              <div className={`${styles.contactInfo} ${styles.alignStart}`}>
                <VuesaxBoldLocationIcon className={styles.icon} />
                <div className={styles.addressInfo}>
                  <div>
                    Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US
                  </div>
                  <div>
                    20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam
                  </div>
                </div>
              </div>
              <div className={styles.contactInfo}>
                <VuesaxBoldMobileIcon className={styles.icon} />
                (+1) 555-0108-000 or (+236) 555-0108
              </div>
            </div>

            <div className={styles.subscribeSection}>
              <h4 className={styles.sectionTitle}>Subscribe</h4>
              <p style={{ marginTop: "40px"}}>
                Subscribe to our newsletter and be the first to know about our
                updates
              </p>
              <div className={styles.subscribeBox}>
                <input type="email" placeholder="Enter your email" />
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
