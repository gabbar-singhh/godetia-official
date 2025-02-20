import React from "react";
import styles from "./FeaturedProducts.module.css";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProducts = ({ heading, showBtnVal }) => {
  const featuredData = [
    {
      img: "/assets/products/featured-1.webp",
      title:
        "Mini First Aid Kit | 101 Pieces, Water-Resistant | Hard Shell Small Case",
    },
    {
      img: "/assets/products/featured-2.webp",
      title:
        "Large First Aid Kit for Outdoor Emergencies | Medical Kits, Businesses & Home Supplies",
    },
    {
      img: "/assets/products/featured-8.webp",
      title:
        "Pet's Large First Aid Bag | Durable and organized storage for all pets",
    },
    {
      img: "/assets/products/featured-3.webp",
      title:
        "Outdoor Tactical Medical Kit | Mountaineering | Multifunction Tool Storage",
    },
    {
      img: "/assets/products/featured-4.webp",
      title:
        "Mini Survival Emergency Kit | Lightweight and Durable Storage For Outdoor",
    },
    {
      img: "/assets/products/featured-5.webp",
      title:
        "IFAK Emergency Tactical First Aid | Civil Defence War Preparation",
    },
    {
      img: "/assets/products/featured-6.webp",
      title:
        "First Aid Kit Travel Pouch | Storage Organizer Bag with all necessary equipment",
    },
    {
      img: "/assets/products/featured-7.webp",
      title:
        "Pet First Aid Kit with Emergency Collar | Ideal for any Emergencies for Pets",
    },
  ];

  return (
    <section className={styles.main}>
      <div className={styles.header}>
        <Fade triggerOnce>
          <h2>{heading}</h2>

          {showBtnVal ? (
            <Link href={"/products"}>
              <div className={styles.viewAll}>
                View More{" "}
                <img
                  src="/icons/arrow_up_right.svg"
                  className={styles.img}
                  alt="arrow upright icon"
                  height={12}
                  width={12}
                />
              </div>
            </Link>
          ) : (
            <></>
          )}
        </Fade>
      </div>

      <div className={styles.container}>
        <Fade cascade damping={0.1} triggerOnce>
          {featuredData.map((kit, index) => (
            <ProductCard
              key={index}
              imgSource={kit.img}
              imgAlt={kit.title}
              heading={kit.title}
            />
          ))}
        </Fade>
      </div>
    </section>
  );
};

export default FeaturedProducts;
