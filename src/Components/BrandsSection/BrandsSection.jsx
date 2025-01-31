import React, { useEffect } from "react";
import styles from "./BrandsSection.module.css";

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
    <section className={styles.main}>
      <p className={styles.chip}>Partnered with the Best</p>
      <h1>Trusted By Industry Leading Brands</h1>
      <p>
        Godetia powers the first aid solutions for industry leaders, offering
        globally certified products and unmatched reliability.
      </p>
      <div className={styles.logos}>
        <div className={styles.logosSlide}>
          {logos.map((logo, index) => (
            <img
              key={index}
              src={`/logo/logo-col/${logo}.png`}
              alt={`${logo} logo`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
