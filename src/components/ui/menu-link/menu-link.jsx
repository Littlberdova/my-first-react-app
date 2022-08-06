import React from "react";
import styles from "./menu-link.module.scss";

function MenuLink (props) {
    return (
     <a className={styles.link} href={props.href}> {props.text} </a>
    );
}

export default MenuLink;