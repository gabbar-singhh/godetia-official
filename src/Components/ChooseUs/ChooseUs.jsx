import React from "react";
import styles from "./ChooseUs.module.css";

const ChooseUs = () => {
  return (
    <section className={styles.main}>
      <h1>
        Why People Trust <span className={styles.godetia}>Godetia?</span>
      </h1>

      <div className={styles.cardStack}>
        <div className={styles.card}>
          <img src="/icons/star.svg" height={62} alt="star image" />
          <h2>High quality, no cost cutting</h2>
          <p>
            We source materials from certified suppliers who follow strict
            quality checks, ensuring our product is safe and effective. We never
            compromise with your health.
          </p>
        </div>{" "}
        <div className={styles.card}>
          <img src="/icons/handshake.svg" height={62} alt="handshake image" />
          <h2>We Understand your needs</h2>
          <p>
            We understand every client has unique needs, so we work closely to
            create products that fit your brand. Our OEM/ODM solutions ensure
            they meet your exact requirements.
          </p>
        </div>{" "}
        <div className={styles.card}>
          <img src="/icons/shield.svg" height={62} alt="shield image" />
          <h2>Trusted Kits. Anytime. Anywhere</h2>
          <p>
            Every product is thoroughly tested and undergoes strict quality
            checks, ensuring it performs reliably in critical situations when
            you need it most.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
