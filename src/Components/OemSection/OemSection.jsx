import React from "react";
import styles from "./OemSection.module.css";
import Image from "next/image";

const OemSection = () => {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.content}>
          <p className={styles.chip}>Our Solutions</p>
            <h1>
              10+ Years of Experience in <br />{" "}
              <span className={styles.godetia}>OEM & ODM</span> First Aid Kit.
            </h1>
            <p>
              We offer OEM/ODM solutions to meet your specific needs, allowing
              you to create first aid kits that align perfectly with your brands
              and requirements.
            </p>
          </span>

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
        </div>
        <img
          className={styles.rightImg}
          src="/assets/oem.webp"
          alt="china manufacturing img"
        />
      </div>
    </section>
  );
};

export default OemSection;
