import React, { useEffect } from "react";
import styles from "./BrandsSection.module.css";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const BrandsSection = () => {
  useEffect(() => {
    const logosSlide = document.querySelector(`.${styles.logosSlide}`);
    if (logosSlide) {
      const copy = logosSlide.cloneNode(true);
      document.querySelector(`.${styles.logos}`).appendChild(copy);
    }
  }, []);

  const logos = [
    "jinke",
    "samsung",
    "shell",
    "agriculture-bank-china",
    "american-red-cross",
    "china-life",
    "china-post",
    "china-telecom",
    "lg",
    "china-merchant-bank",
    "china-minsheng-bank",
    "crcc",
    "ecolab",
    "toyota",
    "emtech-china",
    "foresea-life-insurance",
    "care-plus",
    "subway",
    "gulf-air",
    "hilton",
    "kaiser-permanente",
    "kantar",
    "lner",
    "nba",
    "poly-real-estate",
    "audi",
    "turkish-airlines",
    "united",
  ];
  return (
    <section className={`${styles.main}`}>
      <Fade triggerOnce>
        <h1>
          And Trusted by <span className={styles.godetia}>Global Brands.</span>
        </h1>
      </Fade>
      <Fade triggerOnce>
        <p>
          Godetia powers the first aid solutions for industry leaders, offering
          globally certified products and unmatched reliability.
        </p>
      </Fade>
      <Fade triggerOnce>
        <div className={styles.logos}>
          <div className={styles.logosSlide}>
            {logos.map((logo, index) => (
              <img
                key={index}
                src={`/logo/brands-logo/${logo}.webp`}
                alt={`${logo} logo`}
              />
            ))}
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default BrandsSection;
