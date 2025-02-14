import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={styles.logo}>
        <img src="/logo/logo_white.png" alt="godetia logo" />
      </div>

      <div className={styles.footerContent}>
        <div className={styles.left}>
          <div className={styles.col1}>
            <h4>Quick Links</h4>

            <ul>
              <Link href={"/"}>
                <li>Medical Kits</li>
              </Link>
              <Link href={"/"}>
                <li>Our Credentials</li>
              </Link>

              <Link href={"/"}>
                <li>Our Team Members</li>
              </Link>
              <Link href={"/"}>
                <li>About Us</li>
              </Link>
            </ul>
          </div>

          <div className={styles.col2}>
            <div className={styles.box1}>
              <h4>Contact Us</h4>
              <Link href={"/"}>
                <p>Fill up the form</p>
              </Link>
            </div>

            <div className={styles.box2}>
              <h4>Reach out us via:</h4>
              <ul>
                <li>
                  <span>🇨🇳</span>&nbsp;&nbsp;+86 13538501419
                </li>
                <li>
                  <span>🇨🇳</span>&nbsp;&nbsp;+86 13809649077
                </li>
              </ul>
            </div>

            <div className={styles.box3}>
              <h4>Email</h4>
              <Link href={"/"}>
                <p>sales8@godetiamedical.com</p>
              </Link>
            </div>
          </div>

          <div className={styles.col3}>
            <h4>Office Address:</h4>
            <p>
              Dongguan Godetias Medical Products Tech Co. Ltd, 4th Floor,
              Building 1, Xinhongyuan Ind. Park, Everbright Rd, Dongcheng,
              Dongguan, Guangdong.
            </p>
            <div className={styles.mapBtn}>
              <span>Open in Map</span>
              <Image
                className={styles.img}
                src="/icons/ctaArrow-saffron.svg"
                alt="arrow upright icon"
                height={12}
                width={12}
              />
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <h4>let's get connected: </h4>

          <div className={styles.whatsappBtn}>
            <span>WhatsApp</span>
            <Image
              className={styles.img}
              src="/icons/ctaArrow-saffron.svg"
              alt="arrow upright icon"
              height={12}
              width={12}
            />
          </div>
          <div className={styles.wechatBtn}>
            <span>WeChat</span>
            <Image
              className={styles.img}
              src="/icons/ctaArrow-saffron.svg"
              alt="arrow upright icon"
              height={12}
              width={12}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
