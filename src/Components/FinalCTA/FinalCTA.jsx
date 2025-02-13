import React from "react";
import styles from "./FinalCTA.module.css";
import Link from "next/link";
import Image from "next/image";

const FinalCTA = () => {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>
            Partner with <span className={styles.godetia}>Godetia</span> for
            Reliable <br /> First Aid Solutions.
          </h1>

          <p>
            Ensure safety with our high-quality, customizable first aid kits. We
            guarantee compliance, durability, and global delivery.
          </p>

          <div href={"/"} className={styles.ctaButton}>
            <span>Contact Us</span>
            <Image
              className={styles.img}
              src="/icons/ctaArrow.svg"
              alt="arrow upright icon"
              height={12}
              width={12}
            />
          </div>
        </div>
        <span className={styles.right}>
          <img src="/assets/final-cta.png" alt="girl with first aid kit" />
        </span>
      </div>
    </section>
  );
};

export default FinalCTA;
