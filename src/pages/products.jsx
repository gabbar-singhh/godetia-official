import FeaturedProducts from "@/Components/FeaturedProducts/FeaturedProducts";
import Navbar from "@/Components/Navbar/Navbar";
import React from "react";
import Head from "next/head";
import styles from "@/styles/Products.module.css";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "@/Components/ContactForm/ContactForm";

const products = () => {
  const survivalKitsData = [
    {
      img: "/assets/gs01.png",
      title:
        "GS-01 IFAK Emergency Tactical First Aid | Civil Defence War Preparation",
    },
    {
      img: "/assets/gs02.png",
      title:
        "GS-02 Tactical Pouch Bag Emergency First Aid Bag | Hiking | Climbing",
    },
    {
      img: "/assets/gs03.png",
      title: "GS-03 Tactical Outdoor Emergency Kit | Camping | Mountain",
    },
    {
      img: "/assets/gs05.png",
      title:
        "GS-05 Advanced Military Trauma Suit: CAT Tourniquet | Israeli bandage | Trauma Scissor",
    },
    {
      img: "/assets/gs07.png",
      title:
        "GS-07 Tactical Waist Bags | EDC Utility | 4 Hooks Backpack | Extra Bags for Outdoor",
    },
    {
      img: "/assets/gs08.png",
      title:
        "GS-08 Mini Premium Survival First Aid | Hygiene Camping Gear Kit Tool | With Tactical Bracelet",
    },
    {
      img: "/assets/gs09.png",
      title:
        "GS-09 Mini Special IFAK First Aid Emergency Kit | Pouch Multi-Purpose Bag",
    },
  ];

  const portableKitsData = [
    {
      img: "/assets/gf01.png",
      title: "GF-01 First Aid Kit Home | Emergency Kit Home Supplies",
    },
    {
      img: "/assets/gf02.png",
      title:
        "GF-02 Mini First Aid Kit Small | Bag Includes Bandage, Tablets, Cotton Swabs",
    },
    {
      img: "/assets/gf04.png",
      title: "GF-04 Small First Aid Kit | Indoor Sports Emergency Medical Kit",
    },
    {
      img: "/assets/gf06.png",
      title:
        "Medi CE Approved Medical Supplies Small Size | Pocket Mini Home First Aid Kit",
    },
    {
      img: "/assets/gf08.png",
      title:
        "GF-08 Compact first aid kit | 230 pieces developed for family emergencies",
    },
    {
      img: "/assets/gf09.png",
      title:
        "GF-09 Medical Kit | Zipper Customiable First Aid Kit Empty Bag Set With Cross Patch",
    },
  ];

  const petKitsData = [
    {
      img: "/assets/pet-1.png",
      title: "Portable Medical Multi-Purpose Waterproof First Aid Pet Care Kit",
    },
    {
      img: "/assets/pet-2.png",
      title: "Customized Tiny Pet Essential First Aid Kit for Dogs and Cats",
    },
    {
      img: "/assets/pet-3.png",
      title: "Custom Pet Health Kit Bag for Travel | Pet Emergency Travel Kit",
    },
    {
      img: "/assets/pet-4.png",
      title:
        "Portable First Aid Kit Medical Emergency Bag | CE Approved For Pet Owners",
    },
    {
      img: "/assets/pet-5.png",
      title:
        "Pets Portable Medical Emergency Dog | First Aid Survival Kit For Pet Owners",
    },
    {
      img: "/assets/pet-6.png",
      title:
        "Veternary Emergency Compact Pet First Aid Kit | Plus Eco Wholesale Eva Bag",
    },
  ];
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
        </Carousel>

        <section className={styles.container}>
          <FeaturedProducts
            showBtnVal={false}
            heading={"Our Most Loved Products"}
          />

          <div className={styles.productsGradient}>
          <div className={styles.survivalKits}>
            <h1>Tactical & Military First Aid Kits</h1>
            <div className={styles.survivalKitsContainer}>
              {survivalKitsData.map((kit, index) => (
                <div key={index} className={styles.card}>
                  <img src={kit.img} alt={kit.title} />
                  <h2>{kit.title}</h2>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.portableKits}>
            <h1>Car/ Home / Indoor First Aid Kits</h1>
            <div className={styles.portableKitsContainer}>
              {portableKitsData.map((kit, index) => (
                <div key={index} className={styles.card}>
                  <img src={kit.img} alt={kit.title} />
                  <h2>{kit.title}</h2>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.portableKits}>
            <h1>Pet Emergency Aid Kits</h1>
            <div className={styles.portableKitsContainer}>
              {petKitsData.map((kit, index) => (
                <div key={index} className={styles.card}>
                  <img src={kit.img} alt={kit.title} />
                  <h2>{kit.title}</h2>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.finalCTA}>
            <div className={styles.finalCTAContainer}>
              <div className={styles.left}>
                <h1>Have a product in mind? Get Started <br /> With <span className={styles.godetia}>Godetia.</span></h1>
                <p>
                  Stay safe with our top-quality, customizable first aid
                  kits—compliant, durable, and delivered worldwide.
                </p>
                <div href={"/"} className={styles.ctaButton}>
                  <span>Contact Us</span>
                  <Image
                    className={styles.img}
                    src="/icons/ctaArrow.svg"
                    alt="arrow upright icon"
                    height={12}
                    width={12}
                  />
                </div>
              </div>
              <div className={styles.right}>
                <img
                  src="/assets/final-cta2.png"
                  alt="girl with first aid kit"
                />
              </div>
            </div>
          </div>
          </div>
        </section>
        <ContactForm />
      </section>
    </>
  );
};

export default products;
