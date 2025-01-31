import Head from "next/head";
import Image from "next/image";
import { Poppins } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/Components/Navbar/Navbar";
import HeroSection from "@/Components/HeroSection/HeroSection";
import BrandsSection from "@/Components/BrandsSection/BrandsSection";

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
        <HeroSection />
        <BrandsSection/>
      </div>
    </>
  );
}
