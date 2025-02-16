import React, { useEffect, useState } from "react";
import styles from "./HeroSectionNew.module.css";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

const HeroSectionNew = () => {
  const openWhatsAppHandler = () => {
    const phoneNumber = "918208896517";
    const message = encodeURIComponent(
      "Hello there, I visited your website and I'd be interested in knowing more about Godetia!"
    );
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const [imageLoaded1, setImageLoaded1] = useState(false);
  const [imageLoaded2, setImageLoaded2] = useState(false);
  const [imageLoaded3, setImageLoaded3] = useState(false);

  useEffect(() => {
    const img = document.createElement("img");
    img.src = "/assets/caro-1.webp";
    img.onload = () => setImageLoaded1(true);
  }, ["/assets/caro-1.webp"]);

  useEffect(() => {
    const img = document.createElement("img");
    img.src = "/assets/caro-5.webp";
    img.onload = () => setImageLoaded2(true);
  }, ["/assets/caro-5.webp"]);

  useEffect(() => {
    const img = document.createElement("img");
    img.src = "/assets/caro-2.webp";
    img.onload = () => setImageLoaded3(true);
  }, ["/assets/caro-2.webp"]);
  return (
    <section className={styles.main}>
      <Carousel fade>
        <Carousel.Item interval={2000}>
          {imageLoaded1 ? (
            <img
              className="d-block w-100"
              src="/assets/caro-1.webp"
              alt="First slide"
            />
          ) : (
            <img
              className="d-block w-100"
              src="/assets/caro-1-blur.webp"
              alt="First slide"
            />
          )}

          <Carousel.Caption>
            <div className={styles.ctaButton} onClick={openWhatsAppHandler}>
              <span>Reach out on WhatsApp</span>
              <Image
                className={styles.img}
                src="/icons/ctaArrow.svg"
                alt="arrow upright icon"
                height={12}
                width={12}
              />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          {imageLoaded2 ? (
            <img
              className="d-block w-100"
              src="/assets/caro-5.webp"
              alt="First slide"
            />
          ) : (
            <img
              className="d-block w-100"
              src="/assets/caro-5-blur.webp"
              alt="First slide"
            />
          )}

          <Carousel.Caption>
            <Link href={"/contact"}>
              <div className={styles.getStartedBtn}>
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
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          {imageLoaded3 ? (
            <img
              className="d-block w-100"
              src="/assets/caro-2.webp"
              alt="last slide"
            />
          ) : (
            <img
              className="d-block w-100"
              src="/assets/caro-2-blur.webp"
              alt="last slide"
            />
          )}

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default HeroSectionNew;
