import FeaturedProducts from "@/Components/FeaturedProducts/FeaturedProducts";
import Navbar from "@/Components/Navbar/Navbar";
import React from "react";
import Head from "next/head";
import styles from "@/styles/Products.module.css";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "@/Components/ContactForm/ContactForm";
import Footer from "@/Components/Footer/Footer";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";
import ProductCard from "@/Components/ProductCard/ProductCard";

const products = () => {
  const survivalKitsData = [
    {
      img: "/assets/products/gs01.webp",
      title:
        "GS-01 IFAK Emergency Tactical First Aid | Civil Defence War Preparation",
    },
    {
      img: "/assets/products/gs02.webp",
      title:
        "GS-02 Tactical Pouch Bag Emergency First Aid Bag | Hiking | Climbing",
    },
    {
      img: "/assets/products/gs03.webp",
      title: "GS-03 Tactical Outdoor Emergency Kit | Camping | Mountain",
    },
    {
      img: "/assets/products/gs05.webp",
      title:
        "GS-05 Advanced Military Trauma Suit: CAT Tourniquet | Israeli bandage | Trauma Scissor",
    },
    {
      img: "/assets/products/gs07.webp",
      title:
        "GS-07 Tactical Waist Bags | EDC Utility | 4 Hooks Backpack | Extra Bags for Outdoor",
    },
    {
      img: "/assets/products/gs08.webp",
      title:
        "GS-08 Mini Premium Survival First Aid | Hygiene Camping Gear Kit Tool | Tactical Bracelet",
    },
    {
      img: "/assets/products/gs09.webp",
      title:
        "GS-09 Mini Special IFAK First Aid Emergency Kit | Pouch Multi-Purpose Bag",
    },
    {
      img: "/assets/products/gs10.webp",
      title:
        "Professional-Grade First Aid Kit with Tourniquet: Tactical Gear for Bleeding Control",
    },
  ];

  const portableKitsData = [
    {
      img: "/assets/products/gf01.webp",
      title:
        "GF-01 First Aid Kit Home | Personal Emergency Kit for Home and School",
    },
    {
      img: "/assets/products/gf02.webp",
      title:
        "GF-02 Mini First Aid Kit Small | Bag Includes Bandage, Tablets, Cotton Swabs",
    },
    {
      img: "/assets/products/gf04.webp",
      title: "GF-04 Small First Aid Kit | Indoor Sports Emergency Medical Kit",
    },
    {
      img: "/assets/products/gf06.webp",
      title:
        "Medi CE Approved Medical Supplies Small Size | Pocket Mini Home First Aid Kit",
    },
    {
      img: "/assets/products/gf08.webp",
      title:
        "GF-08 Compact first aid kit | 230 pieces developed for family emergencies",
    },
    {
      img: "/assets/products/gf09.webp",
      title:
        "GF-09 Medical Kit | Zipper Customiable First Aid Kit Empty Bag Set With Cross Patch",
    },
    {
      img: "/assets/products/gf10.webp",
      title:
        "Wholesale Portable Premium Triangular Roadside Nylon for Car Emergencies",
    },
    {
      img: "/assets/products/gf11.webp",
      title:
        "400 Piece Red Large Survival Medical First Aid Kit with Secure Seal",
    },
  ];

  const petKitsData = [
    {
      img: "/assets/products/pet-1.webp",
      title: "Portable Medical Multi-Purpose Waterproof First Aid Pet Care Kit",
    },
    {
      img: "/assets/products/pet-2.webp",
      title: "Customized Tiny Pet Essential First Aid Kit for Dogs and Cats",
    },
    {
      img: "/assets/products/pet-3.webp",
      title: "Custom Pet Health Kit Bag for Travel | Pet Emergency Travel Kit",
    },
    {
      img: "/assets/products/pet-4.webp",
      title: "Portable First Aid Kit Bag | CE Approved For Pet Owners",
    },
    {
      img: "/assets/products/pet-5.webp",
      title:
        "Pets Portable Medical Emergency Dog | First Aid Survival Kit For Pet Owners",
    },
    {
      img: "/assets/products/pet-6.webp",
      title:
        "Veternary Emergency Compact Pet First Aid Kit | Plus Eco Wholesale Eva Bag",
    },
    {
      img: "/assets/products/pet-7.webp",
      title:
        "Small Dog First Aid Kit |  first aid treatment of small dogs in cases of emergencies",
    },
  ];

  const openWhatsAppHandler = () => {
    const phoneNumber = "918208896517";
    const message = encodeURIComponent(
      "Hello there, I visited your website and I'd be interested in knowing more about Godetia!"
    );
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };
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

        <Carousel fade>
          <Carousel.Item interval={2000}>
            <img
              className={styles.imgSlide}
              src="/assets/caro-5.webp"
              alt="third slide"
            />

            <Carousel.Caption>
              <div
                className={styles.getStartedBtn}
                onClick={openWhatsAppHandler}
              >
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
            <img
              className={styles.imgSlide}
              src="/assets/product-caro-2.webp"
              alt="fourth slide"
            />

            <Carousel.Caption>
              <Link href={"/contact#contactFormId"}>
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
            <img
              className={styles.imgSlide}
              src="/assets/product-caro-4.webp"
              alt="First slide"
            />

            <Carousel.Caption>
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
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.imgSlide}
              src="/assets/product-caro-3.webp"
              alt="First slide"
            />

            <Carousel.Caption>
              <Link href={"/contact#contactFormId"}>
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
        </Carousel>

        <section className={styles.container}>
          <FeaturedProducts
            showBtnVal={false}
            heading={"Our Most Loved Products"}
          />

          <div className={styles.productsGradient} id="survivalKitsId">
            <div className={styles.survivalKits}>
              <Fade triggerOnce>
                <h1>Tactical & Military First Aid Kits</h1>
              </Fade>
              <div className={styles.survivalKitsContainer}>
                <Fade cascade damping={0.1} triggerOnce>
                  {survivalKitsData.map((kit, index) => (
                    <ProductCard
                      key={index}
                      imgSource={kit.img}
                      imgAlt={kit.title}
                      heading={kit.title}
                    />
                  ))}
                </Fade>
              </div>
            </div>

            <div className={styles.factoryFoshan}>
              <div className={styles.factoryFoshanContainer}>
                <div className={styles.left}>
                  <div className={styles.content}>
                    <Fade triggerOnce>
                      <p className={styles.chip}>Our Factory in Foshan</p>
                    </Fade>
                    <Fade triggerOnce>
                      <h1>
                        Manufactured With Love <br /> for your safety{" "}
                        <span className={styles.godetia}>by godetia</span>
                      </h1>
                    </Fade>
                    <Fade triggerOnce>
                      <p>
                        Since 2015, our Foshan factory has been manufacturing
                        high-quality first aid kits, certified with FDA, CE, and
                        SGS, ensuring your safety everywhere.
                      </p>
                    </Fade>
                  </div>

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
                <Fade triggerOnce>
                  <div className={styles.videoContainer}>
                    <iframe
                      className={styles.videoFrame}
                      src="https://www.youtube.com/embed/Pv-zpntgeQA?si=Vifb_TaLCG18p-2r"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </div>
                </Fade>
              </div>
            </div>

            <div className={styles.portableKits} id="portableKitsId">
              <Fade triggerOnce>
                <h1>Car/ Home / Indoor First Aid Kits</h1>
              </Fade>
              <div className={styles.portableKitsContainer}>
                <Fade cascade damping={0.1} triggerOnce>
                  {portableKitsData.map((kit, index) => (
                    <ProductCard
                      key={index}
                      imgSource={kit.img}
                      imgAlt={kit.title}
                      heading={kit.title}
                    />
                  ))}
                </Fade>
              </div>
            </div>

            <div className={styles.portableKits} id="petKitsId">
              <Fade triggerOnce>
                <h1>Pet Emergency Aid Kits</h1>
              </Fade>
              <div className={styles.portableKitsContainer}>
                <Fade cascade damping={0.1} triggerOnce>
                  {petKitsData.map((kit, index) => (
                    <ProductCard
                      key={index}
                      imgSource={kit.img}
                      imgAlt={kit.title}
                      heading={kit.title}
                    />
                  ))}
                </Fade>
              </div>
            </div>

            <div className={styles.finalCTA}>
              <div className={styles.finalCTAContainer}>
                <div className={styles.left}>
                  <Fade triggerOnce>
                    <h1>
                      Have a product in mind? Get Started <br /> With{" "}
                      <span className={styles.godetia}>Godetia.</span>
                    </h1>
                  </Fade>
                  <Fade triggerOnce>
                    <p>
                      Stay safe with our top-quality, customizable first aid
                      kits—compliant, durable, and delivered worldwide.
                    </p>
                  </Fade>
                  <Fade triggerOnce>
                    <Link href={"/contact#contactFormId"}>
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
                    </Link>
                  </Fade>
                </div>
                <div className={styles.right}>
                  <img
                    src="/assets/final-cta2.webp"
                    alt="girl with first aid kit"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <ContactForm />
        <Footer />
      </section>
    </>
  );
};

export default products;
