import React from "react";
import userpicture from "../../../assets/user-profile-picture.jpg";
import styles from "./user-card.module.scss";

function UserCard (props) {

    return (
        <div className={styles.card}> 
          <img src={userpicture} alt="Аватар пользователя" />
          <h2> {props.username} </h2>
          <p> {props.position}</p>
        </div>
    );

};

export default UserCard;