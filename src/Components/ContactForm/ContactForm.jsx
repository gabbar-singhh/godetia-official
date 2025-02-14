import React, { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
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
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>
            Trusted First Aid Kits for Every Need <br />{" "}
          </h1>
          <p>
            Godetia provides globally approved first aid kits and medical
            supplies, ensuring safety and reliability for businesses and
            organizations worldwide.
          </p>

          <ul className={styles.infoUl}>
            <li>
              <img src="/icons/phone.svg" alt="call icon" />
              <p>+86 13538501419, +86 13809649077</p>
            </li>
            <li>
              <img src="/icons/mail.svg" alt="mail icon" />
              <p>sales8@godetiamedical.com</p>
            </li>
            <li>
              <img src="/icons/map.svg" alt="location icon" />
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
              <input type="number" placeholder="WhatsApp Number" className={styles.inputSelect} />
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
  );
};

export default ContactForm;
