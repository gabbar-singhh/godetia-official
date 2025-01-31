import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [hamburgerIcon, setHamburgerIcon] = useState("&#9776;");
  const [showMenu, setShowMenu] = useState(false);

  const hamburgerClickHandler = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);

    setHamburgerIcon((prevIcon) =>
      prevIcon === "&#9776;" ? "&#10005;" : "&#9776;"
    );
  };

  const hideMenuHandler = () => {
    setTimeout(() => {
      setShowMenu(false);
      setHamburgerIcon("&#9776;");
    }, 350);
  };
  return (
    <nav className={styles.nav_main}>
      <div className={styles.leftside_nav}>
        <Link href={"/"}>
          <img
            src={"/logo/logo_orange.png"}
            className={styles.nav_logo}
            alt="godetia logo"
          />
        </Link>
      </div>

      <div className={styles.rightside_nav}>
        <ul className={`${styles.nav_ul}`}>
          <Link href={"/"}>
            <li className={`${styles.nav_li} underlineEff`}>home</li>
          </Link>
          <Link href={"/product"}>
            <li className={`${styles.nav_li} underlineEff`}>Medical Kits</li>
          </Link>{" "}
          <Link href={"/about_us"}>
            <li className={`${styles.nav_li} underlineEff`}>about us</li>
          </Link>{" "}
          <Link href={"/contact"}>
            <li className={`${styles.cta_contact} ${styles.nav_li}`}>
              contact
              <img
                src="/icons/arrow_up_right.svg"
                alt="arrow upright icon"
                height={12}
                width={12}
              />
            </li>
          </Link>
        </ul>
      </div>

      <div className={styles.nav_mobile}>
        <span
          onClick={hamburgerClickHandler}
          dangerouslySetInnerHTML={{ __html: hamburgerIcon }}
          className={
            hamburgerIcon === "&#10005;"
              ? `${styles.x_size}`
              : `${styles.ham_size}`
          }
        ></span>

        <div
          className={
            showMenu
              ? `${styles.nav_mobile_container}`
              : `${styles.close} ${styles.nav_mobile_container}`
          }
        >
          <ul className={styles.nav_mobile_ul}>
            <Link href={"/"} onClick={hideMenuHandler}>
              <li className={styles.nav_mobile_li}>home</li>
            </Link>
            <Link href={"/product"} onClick={hideMenuHandler}>
              <li className={styles.nav_mobile_li}>product</li>
            </Link>{" "}
            <Link href={"/about_us"} onClick={hideMenuHandler}>
              <li className={styles.nav_mobile_li}>about us</li>
            </Link>{" "}
            <Link href={"/contact"} onClick={hideMenuHandler}>
              <li
                className={`${styles.nav_cta_contact} ${styles.nav_mobile_li}`}
              >
                contact
                <img
                  src="/icons/arrow_up_right.svg"
                  className={styles.img}
                  alt="arrow upright icon"
                />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
