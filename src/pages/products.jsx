import FeaturedProducts from "@/Components/FeaturedProducts/FeaturedProducts";
import Navbar from "@/Components/Navbar/Navbar";
import React from "react";
import Head from "next/head";
import styles from "@/styles/Products.module.css";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';

const products = () => {
  return (
    <>
      <Head>
        <title>Our Products | Godetia</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Alkatra:wght@400..700&display=swap"
          rel="stylesheet"
        ></link>

      </Head>
      <section className={styles.main}>
        <Navbar />

        <Carousel>
          <Carousel.Item>
            <img
              className={styles.imgSlide}
              src="/assets/caro-5.webp"
              alt="third slide"
            />

            <Carousel.Caption>
              <div className={styles.getStartedBtn}>
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
          <Carousel.Item>
            <img
              className={styles.imgSlide}
              src="/assets/product-caro-2.png"
              alt="fourth slide"
            />

            <Carousel.Caption>
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
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.imgSlide}
              src="/assets/product-caro-3.png"
              alt="First slide"
            />

            <Carousel.Caption>
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
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.imgSlide}
              src="/assets/product-caro-4.png"
              alt="First slide"
            />

            <Carousel.Caption>
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
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default products;
