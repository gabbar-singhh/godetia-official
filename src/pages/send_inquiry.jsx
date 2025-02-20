import React, { useState } from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import styles from "@/styles/sendInquiry.module.css";
import Head from "next/head";
import { Poppins } from "next/font/google";
import { Fade } from "react-awesome-reveal";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const send_inquiry = () => {
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
        <title>Send Inquiry | Godetia</title>
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
      <section className={`${styles.main} ${poppins.className}`}>
        <section className={styles.contactForm} id="contactFormId">
          <div className={styles.container}>
            <div className={styles.left}>
              <Fade triggerOnce>
                <h1>
                  Looking for First Aid OEM/ODM <br /> Solutions? <br />{" "}
                </h1>
              </Fade>
              <Fade triggerOnce>
                <p>
                  Godetia provides globally certified first aid kits and medical
                  supplies, ensuring safety and reliability for businesses and
                  organizations worldwide.
                </p>
              </Fade>
              <ul className={styles.infoUl}>
                <Fade cascade damping={0.1} triggerOnce>
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
                      Dongguan Godetias Medical Products Tech Co. Ltd, 4th
                      Floor, Building 1, Xinhongyuan Ind. Park, Everbright Rd,
                      Dongcheng, Dongguan, Guangdong.
                    </p>
                  </li>
                </Fade>
              </ul>
            </div>

            <div className={styles.right}>
              <Fade triggerOnce>
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
              </Fade>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default send_inquiry;
