import React, { useEffect } from "react";
import styles from "@/styles/AboutUs.module.css";
import HeroSection from "@/Components/HeroSection/HeroSection";
import Navbar from "@/Components/Navbar/Navbar";
import Head from "next/head";
import Certification from "@/Components/Certification/Certification";
import FinalCTA from "@/Components/FinalCTA/FinalCTA";
import ContactForm from "@/Components/ContactForm/ContactForm";
import Image from "next/image";
import Footer from "@/Components/Footer/Footer";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const about = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Meet the Team | Godetia</title>
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
        <HeroSection />
        <div className={styles.container}>
          <div className={styles.aboutus}>
            <Fade triggerOnce>
              <h1>About The Company</h1>
            </Fade>

            <Fade triggerOnce>
              <p>
                Welcome to Godetia, a trusted name in first aid kit
                manufacturing. Since 2010, we've been dedicated to creating
                high-quality first aid kits, disposable gloves, and medical
                essentials for businesses and individuals. We understand the
                importance of being prepared, whether at home, work, or on the
                go. That's why our products are designed to be reliable, easy to
                use, and built to meet the highest standards.
              </p>
            </Fade>
            <Fade triggerOnce>
              <p>
                Our team works closely with partners worldwide, ensuring every
                kit serves real needs. From healthcare providers to retailers
                and corporate organizations, we provide solutions that make
                safety simple. Over the years, we've built strong relationships
                through consistent quality and a commitment to improvement. At
                Godetia, we don't just make first aid kits—we help people stay
                ready for life's unexpected moments.
              </p>
            </Fade>
          </div>
          <div className={styles.aboutFactory}>
            <Fade triggerOnce>
              <h1>Our Factory</h1>
            </Fade>
            <Fade triggerOnce>
              <p>
                Godetia's Foshan factory has been producing reliable first aid
                kits since 2015. We're licensed for Type II medical devices and
                meet global safety standards. Our kits are certified by the U.S.
                Food and Drug Administration (FDA), Conformité Européenne (CE),
                Société Générale de Surveillance (SGS), and have Emergency Use
                Authorization (EUA). Designed with care, our products ensure
                safety when it matters most. Whether for homes, workplaces, or
                travel, we focus on making first aid simple, effective, and
                accessible to everyone.
              </p>
            </Fade>
            <Fade triggerOnce>
              <div className={styles.videoContainer}>
                <iframe
                  className={styles.videoIframe}
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

          <div className={styles.aboutCommit}>
            <Fade triggerOnce>
              <h1>Our Commitment</h1>
            </Fade>

            <div className={styles.stack}>
              <Fade cascade damping={0.1} triggerOnce>
                <div className={styles.row1}>
                  <div className={styles.card}>
                    <img
                      className={styles.cardIcon}
                      src="/icons/commit-4.svg"
                      alt="shield icon"
                    />
                    <h2>Quality Assurance</h2>
                    <p>
                      We source our raw materials from reputable suppliers and
                      adhere to strict quality control measures to ensure that
                      every product we offer is safe and effective.
                    </p>
                  </div>
                  <div className={styles.card}>
                    <img
                      className={styles.cardIcon}
                      src="/icons/commit-1.svg"
                      alt="shield icon"
                    />
                    <h2>Customisation</h2>
                    <p>
                      We recognise that each client has unique requirements. Our
                      team works closely with you to customise first aid kits
                      that align with your brand and meet your specific needs.
                    </p>
                  </div>
                </div>

                <div className={styles.row2}>
                  <div className={styles.card}>
                    <img
                      className={styles.cardIcon}
                      src="/icons/commit-3.svg"
                      alt="shield icon"
                    />
                    <h2>Global Reach</h2>
                    <p>
                      With a focus on international markets, we have established
                      a robust logistics network that enables us to efficiently
                      deliver our products to customers worldwide.
                    </p>
                  </div>
                  <div className={styles.card}>
                    <img
                      className={styles.cardIcon}
                      src="/icons/commit-2.svg"
                      alt="shield icon"
                    />
                    <h2>Customer Satisfaction</h2>
                    <p>
                      Your satisfaction is our top priority. We pride ourselves
                      on our responsive customer service and support, ensuring
                      that you have a seamless experience from order to
                      delivery.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>

          <div className={styles.aboutVision}>
            <Fade triggerOnce>
              <h1>Our Vision</h1>
            </Fade>
            <Fade triggerOnce>
              <p>
                We aim to make quality first aid solutions accessible worldwide,
                helping communities stay safe. With a focus on innovation, we
                constantly improve our products to meet evolving needs. Thank
                you for trusting Godetia — we're committed to creating a safer
                world, together.
              </p>
            </Fade>
          </div>
        </div>
        <div className={styles.aboutTeam} id="teamMembersId">
          <Fade triggerOnce>
            <h1>
              and meet the talented{" "}
              <span className={styles.godetia}>team at Godetia</span>
              <br />
              who make all this happen!
            </h1>
          </Fade>

          <div className={styles.teamContainer}>
            <div className={styles.row1}>
              <Fade cascade damping={0.1} triggerOnce>
                <div className={styles.teamCard}>
                  <img
                    src="/assets/team/1.webp"
                    className={styles.teamImg}
                    alt=""
                  />
                  <h2>Paul</h2>
                  <p>Founder @Godetia</p>
                </div>
              </Fade>
            </div>
            <div className={styles.row2}>
              <Fade cascade damping={0.1} triggerOnce>
                <div className={styles.teamCard}>
                  <img
                    src="/assets/team/2.webp"
                    className={styles.teamImg}
                    alt=""
                  />
                  <h2>Kayyush</h2>
                  <p>Head Of International Trade</p>
                </div>
                <div className={styles.teamCard}>
                  <img
                    src="/assets/team/3.webp"
                    className={styles.teamImg}
                    alt=""
                  />
                  <h2>Lee</h2>
                  <p>Operations Manager</p>
                </div>
                <div className={styles.teamCard}>
                  <img
                    src="/assets/team/4.webp"
                    className={styles.teamImg}
                    alt=""
                  />
                  <h2>Name</h2>
                  <p>Production Manager</p>
                </div>
              </Fade>
            </div>
            <div className={styles.row3}>
              <Fade cascade damping={0.1} triggerOnce>
                <div className={styles.teamCard}>
                  <img
                    src="/assets/team/5.webp"
                    className={styles.teamImg}
                    alt=""
                  />
                  <h2>Taylor</h2>
                  <p>Manager</p>
                </div>
                <div className={styles.teamCard}>
                  <img
                    src="/assets/team/6.webp"
                    className={styles.teamImg}
                    alt=""
                  />
                  <h2>Linda</h2>
                  <p>Sales</p>
                </div>
                <div className={styles.teamCard}>
                  <img
                    src="/assets/team/7.webp"
                    className={styles.teamImg}
                    alt=""
                  />
                  <h2>Peter</h2>
                  <p>Sales</p>
                </div>
              </Fade>
            </div>
            <div className={styles.row4}>
              <Fade cascade damping={0.1} triggerOnce>
                <div className={styles.teamCard}>
                  <img
                    src="/assets/team/8.webp"
                    className={styles.teamImg}
                    alt=""
                  />
                  <h2>Vicky</h2>
                  <p>Designer</p>
                </div>
                <div className={styles.teamCard}>
                  <img
                    src="/assets/team/9.webp"
                    className={styles.teamImg}
                    alt=""
                  />
                  <h2>Lynn</h2>
                  <p>Designer</p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <Certification />
        <div className={styles.finalCTA}>
          <div className={styles.finalCTAContainer}>
            <div className={styles.left}>
              <Fade triggerOnce>
                <h1>
                  Get reliable first aid solutions with{" "}
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
        <ContactForm />
        <Footer />
      </section>
    </>
  );
};

export default about;
