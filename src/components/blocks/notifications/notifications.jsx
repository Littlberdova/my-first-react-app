import React from "react";
import BlockHeader from "../../ui/block-header/block-header.jsx";
import CheckboxForm from "../../ui/checkbox-form/checkbox-from.jsx";
import styles from "./notifications.module.scss";


function  Notifications (props) {
    return (
        <div className={styles.wrapper}>
            <BlockHeader header="Notifications" text="Mange the notifications emailing" />
            <CheckboxForm />
        </div>
    );
};

export default Notifications;