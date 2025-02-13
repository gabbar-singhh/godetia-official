import React from "react";
import styles from "./HeroSectionNew.module.css";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

const HeroSectionNew = () => {
  return (
    <section className={styles.main}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/caro-1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className={styles.ctaButton}>
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
            src="/assets/caro-5.png"
            alt="First slide"
          />
          <Carousel.Caption>
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
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/caro-2.png"
            alt="First slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default HeroSectionNew;
