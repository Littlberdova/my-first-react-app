import React from "react";
import ProfileCard from "../../ui/profile-card/profile-card.jsx";
import BasicProfile from "../../blocks/basic-profile/basic-profile.jsx";
import Notifications from "../../blocks/notifications/notifications.jsx";
import styles from "./main-page.module.scss";

function MainPage(props) {
  
  return ( 
    <div className={styles.container}>
      <ProfileCard name="Adrian Stefan"  place="Rm. Valcea, Romania" timegtm="4:32PM (GMT-4)"/>
      <div> 
        <BasicProfile />
        <Notifications />
      </div>
    </div>
  );
}

export default MainPage;