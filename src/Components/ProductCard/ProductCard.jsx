import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = (props) => {
  return (
    <div className={styles.main}>
      <div key={props.index} className={styles.card}>
        <img
          src={props.imgSource}
          className={styles.cardImg}
          alt={props.imgAlt}
        />
        <h2>{props.heading}</h2>

        <div className={styles.actionBtns}>
          <div className={styles.readMoreBtn}>Read More</div>
          <div className={styles.sendInquiryBtn}>Send Inquiry</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
