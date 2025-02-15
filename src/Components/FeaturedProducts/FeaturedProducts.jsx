import React from "react";
import styles from "./FeaturedProducts.module.css";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const FeaturedProducts = ({ heading, showBtnVal }) => {
  return (
    <section className={styles.main}>
      <div className={styles.header}>
        <Fade triggerOnce>
          <h2>{heading}</h2>

          {showBtnVal ? (
            <Link href={"/products"}>
              <div className={styles.viewAll}>
                View More{" "}
                <img
                  src="/icons/arrow_up_right.svg"
                  className={styles.img}
                  alt="arrow upright icon"
                  height={12}
                  width={12}
                />
              </div>
            </Link>
          ) : (
            <></>
          )}
        </Fade>
      </div>

      <div className={styles.container}>
        <Fade cascade damping={0.1} triggerOnce>
          <div className={styles.card}>
            <img src="/assets/products/featured-1.webp" alt="" />
            <h2>
              Mini First Aid Kit | 101 Pieces, Water-Resistant | Hard Shell
              Small Case
            </h2>
          </div>
          <div className={styles.card}>
            <img src="/assets/products/featured-2.webp" alt="" />
            <h2>
              Large First Aid Kit for Outdoor Emergencies | Medical
              Kits, Businesses & Home Supplies
            </h2>
          </div>
          <div className={styles.card}>
            <img src="/assets/products/featured-8.webp" alt="" />
            <h2>Pet's Large First Aid Bag | Durable and organized storage for all pets</h2>
          </div>
          <div className={styles.card}>
            <img src="/assets/products/featured-3.webp" alt="" />
            <h2>
              Outdoor Tactical Medical Kit | Mountaineering | Multifunction Tool
              Storage
            </h2>
          </div>
          <div className={styles.card}>
            <img src="/assets/products/featured-4.webp" alt="" />
            <h2>
              Mini Survival Emergency Kit - Comprehensive And Lightweight |
              Durable Storage For Outdoor
            </h2>
          </div>
          <div className={styles.card}>
            <img src="/assets/products/featured-5.webp" alt="" />
            <h2>
              IFAK Emergency Tactical First Aid | Civil Defence War Preparation
            </h2>
          </div>
          <div className={styles.card}>
            <img src="/assets/products/featured-6.webp" alt="" />
            <h2>First Aid Kit Travel Pouch | Medicine Storage Organizer Bag with all necessary equipment </h2>
          </div>
          <div className={styles.card}>
            <img src="/assets/products/featured-7.webp" alt="" />
            <h2>Pet First Aid Kit with Emergency Collar | Ideal for any Emergencies for Pets</h2>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default FeaturedProducts;
