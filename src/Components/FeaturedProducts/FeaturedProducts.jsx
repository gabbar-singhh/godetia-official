import React from "react";
import styles from "./FeaturedProducts.module.css";

const FeaturedProducts = ({heading, showBtnVal}) => {

  return (
    <section className={styles.main}>
      <div className={styles.header}>
        <h2>{heading}</h2>

        {showBtnVal? 
        <div className={styles.viewAll}>
          Detailed View{" "}
          <img
            src="/icons/arrow_up_right.svg"
            className={styles.img}
            alt="arrow upright icon"
            height={12}
            width={12}
          />
        </div>: <></>}
      </div>

      <div className={styles.container}>
        <div className={styles.card}>
          <img src="/assets/featured-1.png" alt="" />
          <h2>Mini First Aid Kit | 101 Pieces, Water-Resistant | Hard Shell Small Case</h2>
        </div>
        <div className={styles.card}>
          <img src="/assets/featured-2.png" alt="" />
          <h2>Large First Aid Kit</h2>
        </div>
        <div className={styles.card}>
          <img src="/assets/featured-8.png" alt="" />
          <h2>Pet's Large First Aid Bag</h2>
        </div>
        <div className={styles.card}>
          <img src="/assets/featured-3.png" alt="" />
          <h2>Outdoor Tactical Medical Kit | Mountaineering | Multifunction Tool Storage</h2>
        </div>
        <div className={styles.card}>
          <img src="/assets/featured-4.png" alt="" />
          <h2>Mini Survival Emergency Kit - Comprehensive And Lightweight | Durable Storage For Outdoor</h2>
        </div>
        <div className={styles.card}>
          <img src="/assets/featured-5.png" alt="" />
          <h2>IFAK Emergency Tactical First Aid | Civil Defence War Preparation</h2>
        </div>
        <div className={styles.card}>
          <img src="/assets/featured-6.png" alt="" />
          <h2>First Aid Travel Pouch</h2>
        </div>
        <div className={styles.card}>
          <img src="/assets/featured-7.png" alt="" />
          <h2>Pet's Emergency First Aid Kit</h2>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
