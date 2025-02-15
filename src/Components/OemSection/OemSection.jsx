import React, { useState, useEffect } from "react";
import styles from "./OemSection.module.css";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const OemSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = document.createElement("img");
    img.src = "/assets/oem.webp";
    img.onload = () => setImageLoaded(true);
  }, ["/assets/oem.webp"]);

  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.content}>
            <Fade triggerOnce>
              <p className={styles.chip}>Our Solutions</p>
            </Fade>
            <Fade triggerOnce>
              <h1>
                10+ Years of Experience in <br />{" "}
                <span className={styles.godetia}>OEM & ODM</span> First Aid Kit.
              </h1>
            </Fade>
            <Fade triggerOnce>
              <p>
                We offer OEM/ODM solutions to meet your specific needs, allowing
                you to create first aid kits that align perfectly with your
                brands and requirements.
              </p>
            </Fade>
          </span>
          <Fade triggerOnce>
            <Link href={"/contact#contactFormId"}>
              <div className={styles.ctaButton}>
                <span>Contact Us Now</span>
                <Image
                  className={styles.img}
                  src="/icons/ctaArrow.svg"
                  alt="arrow upright icon"
                  height={12}
                  width={12}
                />
              </div>
            </Link>
          </Fade>
        </div>
        {imageLoaded ? (
          <img
            className={styles.rightImg}
            src="/assets/oem.webp"
            alt="china manufacturing img"
          />
        ) : (
          <img
            className={styles.rightImg}
            src="/assets/oem-blur.webp"
            alt="china manufacturing img"
          />
        )}
      </div>
    </section>
  );
};

export default OemSection;
