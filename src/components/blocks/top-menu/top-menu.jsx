import React from "react";
import MenuLink from "../../ui/menu-link/menu-link.jsx";
import styles from "./top-menu.module.scss";

function TopMenu (props) {
    return(
        <div className={styles.wrapper}> 
            <ul className={styles.list}> 
                <li className={styles.current}> <MenuLink  href="#" text="Profile" /> </li>
                <li> <MenuLink  href="#" text="Account" /> </li>
                <li> <MenuLink  href="#" text="Price Plans" /> </li>
            </ul>
        </div>
    );
};

export default TopMenu;