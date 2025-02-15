import React from "react";
import styles from "./HeroSection.module.css";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const HeroSection = () => {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <Fade triggerOnce direction="up">
          <p className={styles.chip}>Our Team @Godetia</p>
        </Fade>
        <Fade triggerOnce direction="up">
          <h1>
            Know Our Team at Godetia,
            <br /> Your Trusted Expert in First Aid Kit Manufacturing.
          </h1>
        </Fade>
        <Fade triggerOnce direction="up">
          <p>
            Our expert team designs reliable first aid kits for every need. With
            precision and care, we ensure you're always prepared for the
            unexpected.
          </p>
        </Fade>

        <Fade triggerOnce direction="up">
          <Link href={"/contact#contactFormId"}>
            <div className={styles.ctaButton}>
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
        </Fade>
      </div>
      <div className={styles.right}>
        <img src="/assets/aboutus.webp" alt="about team" />
      </div>
    </section>
  );
};

export default HeroSection;
