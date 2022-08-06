import React from "react";
import Logo from "../../ui/logo/logo";
import Nav from "../../layout/nav/nav";
import styles from "./header.module.scss";


function Header () {
    return (
        <header className={styles.header}> 
          <Logo />
          <Nav />
        </header>
    )
}

export default Header;