import React from "react";
import styles from "./HeroSectionNew.module.css";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

const HeroSectionNew = () => {
  const openWhatsAppHandler = () => {
    const phoneNumber = "918208896517";
    const message = encodeURIComponent(
      "Hello there, I visited your website and I'd be interested in knowing more about Godetia!"
    );
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <section className={styles.main}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/caro-1.webp"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className={styles.ctaButton} onClick={openWhatsAppHandler}>
              <span>Reach out on WhatsApp</span>
              <Image
                className={styles.img}
                src="/icons/ctaArrow.svg"
                alt="arrow upright icon"
                height={12}
                width={12}
              />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/caro-5.webp"
            alt="First slide"
          />
          <Carousel.Caption>
            <Link href={'/contact'}>
            <div className={styles.getStartedBtn}>
              <span>Contact Us Now</span>
              <Image
                className={styles.img}
                src="/icons/ctaArrow.svg"
                alt="arrow upright icon"
                height={12}
                width={12}
                />
            </div>
                </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/caro-2.webp"
            alt="First slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default HeroSectionNew;
