import React, { useEffect, useState } from "react";
import styles from "./Certification.module.css";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Certification = () => {
  const certificates = [];

  for (let num = 1; num <= 5; num++) {
    certificates.push(`/assets/certificates/cert-${num}.webp`);
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
    <section className={styles.main} id="certificateId">
      <Fade triggerOnce>
        <p className={styles.chip}>Approved & Trusted Everywhere</p>
      </Fade>
      <Fade triggerOnce>
        <h1>
          <span className={styles.godetia}>Godetia</span> is Medically Certified
        </h1>
      </Fade>
      <Fade triggerOnce>
        <p>
          Internationally approved and medically safe, we take pride in
          providing top quality medical supplies—because your safety matters
          most.
        </p>
      </Fade>

      <Fade triggerOnce>
        <div className={styles.certificate}>
          <div className={styles.certificateSlide}>
            {certificates.map((src, index) => (
              <img
                key={index}
                src={src}
                width={250}
                alt={`brand logo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Certification;
