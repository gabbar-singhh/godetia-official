import React, { useState } from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Head from "next/head";
import styles from "@/styles/Contact.module.css";
import Image from "next/image";
import Footer from "@/Components/Footer/Footer";

const contact = () => {
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia (Czech Republic)",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini (fmr. Swaziland)",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const [selectedCountry, setSelectedCountry] = useState("");

  const countryOnChangeHandler = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Contact Us | Godetia</title>
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
      <Navbar />
      <section className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.content}>
            <p className={styles.chip}>Connect With Godetia</p>
            <h1>Safety is Just a One Message Away. Let's Start Right Now</h1>
            <p>
              Need reliable first aid solutions? We're just a WhatsApp/WeChat
              message away. Connect with Godetia now for premium, customized
              safety kits.
            </p>
            <div className={styles.ctaButton}>
              <div className={styles.whatsappBtn}>
                <span>React out on WhatsApp</span>
                <Image
                  className={styles.img}
                  src="/icons/ctaArrow.svg"
                  alt="arrow upright icon"
                  height={12}
                  width={12}
                />
              </div>
              <div className={styles.wechatBtn}>
                <span>Or Connect on WeChat</span>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <img src="/assets/contact-hero.png" alt="about team" />
          </div>
        </section>

        <section className={styles.contactForm}>
          <div className={styles.container}>
            <div className={styles.left}>
              <h1>
                Looking for First Aid OEM/ODM <br /> Solutions? <br />{" "}
              </h1>
              <p>
                Godetia provides globally certified first aid kits and medical
                supplies, ensuring safety and reliability for businesses and
                organizations worldwide.
              </p>

              <ul className={styles.infoUl}>
                <li>
                  <img src="/icons/phone-saffron.svg" alt="call icon" />
                  <p>+86 13538501419, +86 13809649077</p>
                </li>
                <li>
                  <img src="/icons/mail-saffron.svg" alt="mail icon" />
                  <p>sales8@godetiamedical.com</p>
                </li>
                <li>
                  <img src="/icons/map-saffron.svg" alt="location icon" />
                  <p>
                    Dongguan Godetias Medical Products Tech Co. Ltd, 4th Floor,
                    Building 1, Xinhongyuan Ind. Park, Everbright Rd, Dongcheng,
                    Dongguan, Guangdong.
                  </p>
                </li>
              </ul>
            </div>

            <div className={styles.right}>
              <div className={styles.contactContainer}>
                <h2>Get In Touch</h2>
                <p>You can reach us anytime.</p>

                <div className={styles.row1}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className={styles.inputName}
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className={styles.inputCompany}
                  />
                </div>

                <div className={styles.row2}>
                  <span className={styles.spanMailInput}>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className={styles.inputName}
                    />
                  </span>
                </div>

                <div className={styles.row3}>
                  <select
                    value={selectedCountry}
                    onChange={countryOnChangeHandler}
                    className={styles.inputSelect}
                    required
                  >
                    <option value="" disabled hidden>
                      Select a country
                    </option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  <input
                    type="number"
                    placeholder="WhatsApp Number"
                    className={styles.inputSelect}
                  />
                </div>

                <div className={styles.row4}>
                  <textarea
                    name=""
                    id=""
                    placeholder="How can we help you?"
                    className={styles.textarea}
                  ></textarea>
                </div>

                <div className={styles.row5}>
                  <div className={styles.ctaButton}>Submit</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.locationMap}>
          <div className={styles.locationMapContainer}>
            <div className={styles.leftSide}>
              <h1>Our Office</h1>
              <p>Want to schedule a meeting with us?</p>

              <div className={styles.locationContent}>
                <h2>Dongguan, China</h2>
                <p>
                  Dongguan Godetias Medical Products Tech Co. Ltd, 4th Floor,
                  Building 1, Xinhongyuan Ind. Park, Everbright Rd, Dongcheng,
                  Dongguan, Guangdong
                </p>
              </div>

              <div className={styles.mapBtn}>
                <span>Open in Map</span>
                <Image
                  className={styles.img}
                  src="/icons/ctaArrow-saffron.svg"
                  alt="arrow upright icon"
                  height={12}
                  width={12}
                />
              </div>
            </div>
            <div className={styles.rightSide}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.6566512613167!2d113.77797!3d22.999649999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34039fedab820ed7%3A0x97280b4a35241334!2sXin%20Hongyuan%20Industrial%20Park!5e0!3m2!1sen!2sin!4v1735071989353!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </section>
      <Footer/>
    </>
  )
};

export default contact;
