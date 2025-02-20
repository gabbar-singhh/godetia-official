import React, { useState } from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import Modal from "../Modal/Modal";

const Footer = () => {
  const [modalVal, setModalVal] = useState(false);

  const openWhatsAppHandler = () => {
    const phoneNumber = "918208896517";
    const message = encodeURIComponent(
      "Hello there, I visited your website and I'd be interested in knowing more about Godetia!"
    );
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const modalHandler = () => {
    console.log("you clicked wechat btn", modalVal);
    setModalVal((prevState) => !prevState);
  };

  const closeModalHandler = () => {
    setModalVal(false);
  };

  const openMapUrl = () => {
    window.open("https://maps.app.goo.gl/qmfShD2kHS1kBMhZA", "_blank");
  };
  return (
    <>
      <footer className={`${styles.footer}`}>
        <Modal showModalVal={modalVal} closeModalHandler={closeModalHandler} />
        <div className={styles.logo}>
          <img src="/logo/logo-white.webp" alt="godetia logo" />
        </div>

        <div className={styles.footerContent}>
          <div className={styles.left}>
            <div className={styles.col1}>
              <h4>Quick Links</h4>

              <ul>
                <Link href={"/products"}>
                  <li>Medical Kits</li>
                </Link>
                <Link href={"/#certificateId"}>
                  <li>Our Credentials</li>
                </Link>

                <Link href={"/about#teamMembersId"}>
                  <li>Our Team Members</li>
                </Link>
                <Link href={"/about"}>
                  <li>About Us</li>
                </Link>
              </ul>
            </div>

            <div className={styles.col2}>
              <div className={styles.box1}>
                <h4>Contact Us</h4>
                <Link href={"/contact#contactFormId"}>
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
                <p>sales8@godetiamedical.com</p>
              </div>
            </div>

            <div className={styles.col3}>
              <h4>Office Address:</h4>
              <p>
                Dongguan Godetias Medical Products Tech Co. Ltd, 4th Floor,
                Building 1, Xinhongyuan Ind. Park, Everbright Rd, Dongcheng,
                Dongguan, Guangdong.
              </p>
              <div className={styles.mapBtn} onClick={openMapUrl}>
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

            <div className={styles.whatsappBtn} onClick={openWhatsAppHandler}>
              <img src="/icons/whatsapp-saffron.svg" alt="whatsapp icon" height={34} width={34} />
              <span>WhatsApp</span>
              <Image
                className={styles.img}
                src="/icons/ctaArrow-saffron.svg"
                alt="arrow upright icon"
                height={12}
                width={12}
              />
            </div>
            <div className={styles.wechatBtn} onClick={modalHandler}>
            <img src="/icons/wechat-saffron.svg" alt="wechat icon" height={36} width={36} />
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
      <div className={styles.footerFooter}>
        @2025 Godetias Medical Products Technology Co., Ltd All Right Reserved
      </div>
    </>
  );
};

export default Footer;
