import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import styles from "../App.module.css";
import mobileStyles from "./mobilenav.module.css";
import { ReactComponent as Logo } from "../logo.svg";

export default function Navigation() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  //  <IoIosMenu />
  //
  const mobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  const closeMenu = () => {
    setIsMobileNavOpen(false);
  };
  return (
    <div>
      <div className={styles.header}>
        <Logo />
        <div className={mobileStyles.mobileNavToggle} onClick={mobileNavToggle}>
          {isMobileNavOpen ? (
            <IoMdClose className={mobileStyles.hamburger} />
          ) : (
            <IoIosMenu className={mobileStyles.hamburger} />
          )}
        </div>

        <div className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#new">New</a>
          <a href="#popular">Popular</a>
          <a href="#trending">Trending</a>
          <a href="#categories">Categories</a>
        </div>

        {/* mobile */}

        {isMobileNavOpen && (
          <div className={mobileStyles.mobileNav} onClick={closeMenu}>
            <a href="#home">Home</a>
            <a href="#new">New</a>
            <a href="#popular">Popular</a>
            <a href="#trending">Trending</a>
            <a href="#categories">Categories</a>
          </div>
        )}
      </div>
    </div>
  );
}
