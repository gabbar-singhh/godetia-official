import React from "react";
import styles from "./HeroSection.module.css";
import Image from "next/image";

const HeroSection = () => {
  const images = [
    {
      src: "/assets/gallery1.png",
      alt: "1",
      column: 1,
    },
    {
      src: "/assets/gallery2.png",
      alt: "2",
      column: 1,
    },
    {
      src: "/assets/gallery3.png",
      alt: "3",
      column: 2,
    },
    {
      src: "/assets/gallery4.png",
      alt: "4",
      column: 2,
    },
  ];
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <p className={styles.chip}>
          <Image
            src="/icons/checkmark-chip.svg"
            height={24}
            width={24}
            alt="checkmark icon"
          />
          Globally Certified
        </p>
        <h1>
          Your Premier Partner for{" "}
          <span className={styles.maroon}> First Aid Solutions.</span>
        </h1>
        <p>
          With 10+ years of expertise in manufacturing and exporting first aid
          kits, we offer OEM/ODM solutions tailored to your brand, delivering
          certified products to keep you safe and prepared.
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
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={styles[`img_${image.alt}`]}
                />
              ))}
          </div>
          <div className={styles.galleryGridCol_2}>
            {images
              .filter((image) => image.column === 2)
              .map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={styles[`img_${image.alt}`]}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
