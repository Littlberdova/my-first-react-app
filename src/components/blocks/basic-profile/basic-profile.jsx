import React from "react";
import BlockHeader from "../../ui/block-header/block-header.jsx";
import Form from "../../ui/form/form.jsx";
import styles from "./basic-profile.module.scss";

function  BasicProfile (props) {
    return (
        <div className={styles.wrapper}>
            <BlockHeader header="Basic Profile" text="The information can be edited from yuor profile page" />
            <Form />
        </div>
    );
};

export default BasicProfile;