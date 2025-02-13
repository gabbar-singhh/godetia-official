import React from "react";
import styles from "./ProductCategory.module.css";
import Image from "next/image";

const ProductCategory = () => {
  return (
    <section className={styles.main}>
      <h1>
        Explore Our First Aid Kits{" "}
        <span className={styles.godetia}>by Categories.</span>
      </h1>

      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <span>
                <h2>
                  Portable <br /> First Aid Kits
                </h2>
                <p>
                  compact, travel-friendly emergency kits with essential medical
                  supplies for quick treatment of injuries.
                </p>
              </span>
              <div className={styles.learnMore}>
                learn more{" "}
                <Image
                  src="/icons/ctaArrow-teal.svg"
                  alt="arrow upright icon"
                  height={12}
                  width={12}
                />
              </div>
            </div>
            <img
              className={styles.img}
              src="/assets/portable.png"
              height={300}
              alt=""
            />
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <span>
                <h2>
                  Survival <br /> First Aid Kits
                </h2>
                <p>
                  includes essential IFAK tactical supplies, such as
                  tourniquets, pressure bandages, hemostatic gauze etc.
                </p>
              </span>
              <div className={styles.learnMore}>
                learn more{" "}
                <Image
                  src="/icons/ctaArrow-teal.svg"
                  alt="arrow upright icon"
                  height={12}
                  width={12}
                />
              </div>
            </div>
            <img
              className={styles.img}
              src="/assets/survival.png"
              height={300}
              alt=""
            />
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <span>
                <h2>
                  Car Emergency <br /> First Aid Kits
                </h2>
                <p>
                  lightweight, vehicle-friendly medical kits designed for
                  roadside injuries, accidents, and emergency situations.
                </p>
              </span>
              <div className={styles.learnMore}>
                learn more{" "}
                <Image
                  src="/icons/ctaArrow-teal.svg"
                  alt="arrow upright icon"
                  height={12}
                  width={12}
                />
              </div>
            </div>
            <img
              className={styles.img}
              src="/assets/car.png"
              height={300}
              alt=""
            />
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <span>
                <h2>
                  Pet Emergency <br /> First Aid Kits
                </h2>
                <p>
                  pet-friendly medical kit designed for treating minor injuries,
                  wounds etc.
                </p>
              </span>
              <div className={styles.learnMore}>
                learn more{" "}
                <Image
                  src="/icons/ctaArrow-teal.svg"
                  alt="arrow upright icon"
                  height={12}
                  width={12}
                />
              </div>
            </div>
            <img
              className={styles.img}
              src="/assets/pet.png"
              height={120}
              alt=""
            />
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <span>
                <h2>
                  Indoor / Home <br /> First Aid Kits
                </h2>
                <p>
                  essential medical kits designed for treating common household
                  injuries, cuts, burns etc.
                </p>
              </span>
              <div className={styles.learnMore}>
                learn more{" "}
                <Image
                  src="/icons/ctaArrow-teal.svg"
                  alt="arrow upright icon"
                  height={12}
                  width={12}
                />
              </div>
            </div>
            <img
              className={styles.img}
              src="/assets/home.png"
              height={120}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
