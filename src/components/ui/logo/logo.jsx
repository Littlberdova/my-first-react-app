import React from "react";
import logo from "../../../assets/header-logo.svg";
import styles from "./logo.module.scss";

function Logo () {
    return (
        <a className={styles.link} href="/"> 
          <img src={logo}  alt="Логотип компании" />
          <span> Devias Kit </span>
        </a>
    );
}

export default Logo;