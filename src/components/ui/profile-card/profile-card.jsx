import React from "react";
import Button from "../button/button.jsx";
import profilepicture from "../../../assets/profile-picture.jpg";
import styles from "./profile-card.module.scss";

function ProfileCard (props) {
    return (
        <div className={styles.wrapper}> 
            <div className={styles.nameContainer}>
                <div className={styles.container}>
                  <h2 className={styles.name}> {props.name} </h2>
                  <p className={styles.place}> {props.place} </p>
                  <p className={styles.time}> {props.timegtm}</p>
                </div>
                <img src={profilepicture} alt="Аватар пользователя"/>
            </div>
            <div className={styles.buttonContainer}> 
                <Button className={styles.blue} type="submit" text="Upload picture" />
                <Button type="reset" text="Remove picture" />
            </div>
        </div>

    );

}

export default ProfileCard;