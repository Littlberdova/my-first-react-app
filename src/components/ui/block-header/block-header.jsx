import React from "react";
import styles from "./block-header.module.scss";

function BlockHeader (props) {
    return (
        <div className={styles.wrapper}> 
            <h2 className={styles.title}> {props.header} </h2>
            <p className={styles.description}> {props.text} </p>
        </div>
    );
};

export default BlockHeader;