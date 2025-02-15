import React, { useState, useEffect } from "react";
import styles from "./ProductCategory.module.css";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const ProductCategory = () => {
  const [imageLoaded1, setImageLoaded1] = useState(false);
  const [imageLoaded2, setImageLoaded2] = useState(false);
  const [imageLoaded3, setImageLoaded3] = useState(false);
  const [imageLoaded4, setImageLoaded4] = useState(false);
  const [imageLoaded5, setImageLoaded5] = useState(false);

  useEffect(() => {
    const img = document.createElement("img");
    img.src = "/assets/portable.webp";
    img.onload = () => setImageLoaded1(true);
  }, ["/assets/portable.webp"]);

  useEffect(() => {
    const img = document.createElement("img");
    img.src = "/assets/survival.webp";
    img.onload = () => setImageLoaded2(true);
  }, ["/assets/survival.webp"]);

  useEffect(() => {
    const img = document.createElement("img");
    img.src = "/assets/car.webp";
    img.onload = () => setImageLoaded3(true);
  }, ["/assets/car.webp"]);

  useEffect(() => {
    const img = document.createElement("img");
    img.src = "/assets/pet.webp";
    img.onload = () => setImageLoaded4(true);
  }, ["/assets/pet.webp"]);

  useEffect(() => {
    const img = document.createElement("img");
    img.src = "/assets/home.webp";
    img.onload = () => setImageLoaded5(true);
  }, ["/assets/home.webp"]);
  return (
    <section className={styles.main}>
      <Fade triggerOnce>
        <h1>
          Explore Our First Aid Kits{" "}
          <span className={styles.godetia}>by Categories.</span>
        </h1>
      </Fade>

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
              <Link href={"/products#portableKitsId"}>
                <div className={styles.learnMore}>
                  learn more{" "}
                  <Image
                    src="/icons/ctaArrow-teal.svg"
                    alt="arrow upright icon"
                    height={12}
                    width={12}
                  />
                </div>
              </Link>
            </div>
            {imageLoaded1 ? (
              <img
                className={styles.img}
                src="/assets/portable.webp"
                height={300}
                alt=""
              />
            ) : (
              <img
                className={styles.img}
                src="/assets/portable-blur.webp"
                height={300}
                alt=""
              />
            )}
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
              <Link href={"/products#survivalKitsId"}>
                <div className={styles.learnMore}>
                  learn more{" "}
                  <Image
                    src="/icons/ctaArrow-teal.svg"
                    alt="arrow upright icon"
                    height={12}
                    width={12}
                  />
                </div>
              </Link>
            </div>
            {imageLoaded2 ? (
              <img
                className={styles.img}
                src="/assets/survival.webp"
                height={300}
                alt="survial kits"
              />
            ) : (
              <img
                className={styles.img}
                src="/assets/survival-blur.webp"
                height={300}
                alt="survial kits"
              />
            )}
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
              <Link href={"/products#portableKitsId"}>
                <div className={styles.learnMore}>
                  learn more{" "}
                  <Image
                    src="/icons/ctaArrow-teal.svg"
                    alt="arrow upright icon"
                    height={12}
                    width={12}
                  />
                </div>
              </Link>
            </div>
            {imageLoaded3 ? (
              <img
                className={styles.img}
                src="/assets/car.webp"
                height={300}
                alt="car emergency kit"
              />
            ) : (
              <img
                className={styles.img}
                src="/assets/car-blur.webp"
                height={300}
                alt="car emergency kit"
              />
            )}
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
              <Link href={"/products#petKitsId"}>
                <div className={styles.learnMore}>
                  learn more{" "}
                  <Image
                    src="/icons/ctaArrow-teal.svg"
                    alt="arrow upright icon"
                    height={12}
                    width={12}
                  />
                </div>
              </Link>
            </div>
            {imageLoaded4 ? (
              <img
                className={styles.img}
                src="/assets/pet.webp"
                height={120}
                alt="pet safety kit"
              />
            ) : (
              <img
                className={styles.img}
                src="/assets/pet-blur.webp"
                height={120}
                alt="pet safety kit"
              />
            )}
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
              <Link href={"/products#portableKitsId"}>
                <div className={styles.learnMore}>
                  learn more{" "}
                  <Image
                    src="/icons/ctaArrow-teal.svg"
                    alt="arrow upright icon"
                    height={12}
                    width={12}
                  />
                </div>
              </Link>
            </div>
            {imageLoaded5 ? (
              <img
                className={styles.img}
                src="/assets/home.webp"
                height={120}
                alt="home first aid kit"
              />
            ) : (
              <img
                className={styles.img}
                src="/assets/home-blur.webp"
                height={120}
                alt="home first aid kit"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
