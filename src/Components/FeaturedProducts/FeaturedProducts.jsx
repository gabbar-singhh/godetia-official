import React from "react";
import styles from "./FeaturedProducts.module.css";

const FeaturedProducts = () => {
  return (
    <section className={styles.main}>
      <div className={styles.header}>
        <h2>Our Top Selling Products</h2>
        <div className={styles.viewAll}>
          View All{" "}
          <img
            src="/icons/arrow_up_right.svg"
            className={styles.img}
            alt="arrow upright icon"
            height={12}
            width={12}
          />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.card}>
          <img src="/assets/featured-1.png" alt="" />
          <h2>Sidekick First Aid Pouch</h2>
        </div>
        <div className={styles.card}>
          <img src="/assets/featured-2.png" alt="" />
          <h2>Medic First Aid Travel Kit</h2>
        </div>
        <div className={styles.card}>
          <img src="/assets/featured-3.png" alt="" />
          <h2>250 in 1 Survival Kit</h2>
        </div>
        <div className={styles.card}>
          <img src="/assets/featured-4.png" alt="" />
          <h2>Protect Life First Aid Kit</h2>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
