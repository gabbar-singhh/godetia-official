import React from "react";
import styles from "./HeroSection.module.css";
import Image from "next/image";

const HeroSection = () => {
  const images = [
    {
      src: "/assets/hero_mehandi.png",
      alt: "lady with mehandi in hand img",
      column: 1,
    },
    {
      src: "/assets/hero_chef.png",
      alt: "indian chef img",
      column: 1,
    },
    {
      src: "/assets/hero_photographer.png",
      alt: "woman with a tripod & cam",
      column: 2,
    },
    {
      src: "/assets/hero_makeup.png",
      alt: "makeup artist img",
      column: 2,
    },
  ];
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h1>
          Your Premier Partner for{" "}
          <span className={styles.maroon}> First Aid Solutions.</span>
        </h1>
        <p>
        With 10+ years of expertise in manufacturing and exporting first aid kits, we offer OEM/ODM solutions tailored to your brand, delivering certified products to keep you safe and prepared
        </p>
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
      </div>
      <div className={styles.right}>
        <div className={styles.galleryGrid}>
          <div className={styles.galleryGridCol_1}>
            {images
              .filter((image) => image.column === 1)
              .map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
              ))}
          </div>
          <div className={styles.galleryGridCol_2}>
            {images
              .filter((image) => image.column === 2)
              .map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
