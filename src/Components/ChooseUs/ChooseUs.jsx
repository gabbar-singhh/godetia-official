import React from "react";
import styles from "./ChooseUs.module.css";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const ChooseUs = () => {
  return (
    <section className={styles.main}>
      <section className={styles.chooseUsMain}>
        <Fade triggerOnce>
          <h1>
            Why People Choose <span className={styles.godetia}>Godetia?</span>
          </h1>
        </Fade>

        <ul className={styles.cardStack}>
          <Fade cascade damping={0.1} triggerOnce>
            <li className={styles.card}>
              <img src="/icons/star.svg" height={62} alt="star image" />
              <h2>High quality, no cost cutting</h2>
              <p>
                We source materials from certified suppliers who follow strict
                quality checks, ensuring our product is safe and effective. We
                never compromise with your health.
              </p>
            </li>{" "}
            <li className={styles.card}>
              <img
                src="/icons/handshake.svg"
                height={56}
                alt="handshake image"
              />
              <h2>We Understand your needs</h2>
              <p>
                We understand every client has unique needs, so we work closely
                to create products that fit your brand. Our OEM/ODM solutions
                ensure they meet your exact requirements.
              </p>
            </li>{" "}
            <li className={styles.card}>
              <img src="/icons/shield.svg" height={62} alt="shield image" />
              <h2>Trusted Kits. Anytime. Anywhere</h2>
              <p>
                Every product is thoroughly tested and undergoes strict quality
                checks, ensuring it performs reliably in critical situations
                when you need it most.
              </p>
            </li>
          </Fade>
        </ul>

        <Fade triggerOnce>
        <Link href={"/contact#contactFormId"}>
          <div className={styles.ctaButton}>
            <span>Get Started Now</span>
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
      </section>
    </section>
  );
};

export default ChooseUs;
