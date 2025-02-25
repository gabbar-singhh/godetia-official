import React from "react";
import styles from "./FinalCTA.module.css";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const FinalCTA = () => {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Fade triggerOnce>
            <h1>
              Partner with <span className={styles.godetia}>Godetia</span> for
              Reliable <br /> First Aid Solutions.
            </h1>
          </Fade>

          <Fade triggerOnce>
            <p>
              Ensure safety with our high-quality, customizable first aid kits.
              We guarantee compliance, durability, and global delivery.
            </p>
          </Fade>
          <Fade triggerOnce>
            <Link href={"/contact#contactFormId"}>
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
            </Link>
          </Fade>
        </div>
        <span className={styles.right}>
          <img src="/assets/final-cta1.webp" alt="girl with first aid kit" />
        </span>
      </div>
    </section>
  );
};

export default FinalCTA;
