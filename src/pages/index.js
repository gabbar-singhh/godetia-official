import Head from "next/head";
import Image from "next/image";
import { Poppins } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/Components/Navbar/Navbar";
import HeroSectionNew from "@/Components/HeroSectionNew/HeroSectionNew";
import BrandsSection from "@/Components/BrandsSection/BrandsSection";
import ChooseUs from "@/Components/ChooseUs/ChooseUs";
import FeaturedProducts from "@/Components/FeaturedProducts/FeaturedProducts";
import Certification from "@/Components/Certification/Certification";
import FinalCTA from "@/Components/FinalCTA/FinalCTA";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCategory from "@/Components/ProductCategory/ProductCategory";
import OemSection from "@/Components/OemSection/OemSection";
import ContactForm from "@/Components/ContactForm/ContactForm";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Godetia</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Alkatra:wght@400..700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className={`${styles.page} ${poppins.className}`}>
        <Navbar />
        <HeroSectionNew />
        <ProductCategory />
        <OemSection />
        <FeaturedProducts />
        <ChooseUs />
        <Certification />
        <BrandsSection />
        <FinalCTA />
        <ContactForm />
        {/* footer */}
      </div>
    </>
  );
}
