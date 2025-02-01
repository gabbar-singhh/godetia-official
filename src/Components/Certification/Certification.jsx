import React, { useEffect } from "react";
import styles from "./Certification.module.css";
import Image from "next/image";

const Certification = () => {
  const certificates = [];

  for (let num = 1; num <= 5; num++) {
    certificates.push(`/assets/cert-${num}.jpg`);
  }

  useEffect(() => {
    const certificateSlide = document.querySelector(
      `.${styles.certificateSlide}`
    );
    if (certificateSlide) {
      const copy = certificateSlide.cloneNode(true);
      document.querySelector(`.${styles.certificate}`).appendChild(copy);
    }
  }, []);

  return (
    <section className={styles.main}>
      <p className={styles.chip}>Trusted Certifications</p>
      <h1>
        <span className={styles.godetia}>Godetia</span> is Globally Certified.
      </h1>
      <p>
        Internationally approved and medically safe, we take pride in providing
        top quality medical supplies—because your safety matters most.
      </p>

      <div className={styles.certificate}>
        <div className={styles.certificateSlide}>
          {certificates.map((src, index) => (
            <img key={index} src={src} width={250} alt={`Logo ${index + 1}`} />
          ))}
        </div>
      </div>

      <div className={styles.ctaButton}>
          <span>Get Started Now</span>
          <Image
            className={styles.img}
            src="/icons/ctaArrow.svg"
            alt="arrow upright icon"
            height={12}
            width={12}
          />
        </div>
    </section>
  );
};

export default Certification;
