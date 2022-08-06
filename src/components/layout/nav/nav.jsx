import React from 'react';
import { ReactComponent as NotificationSvg } from "../../../assets/icons/notifications.svg";
import { ReactComponent as LogoutSvg} from "../../../assets/icons/logout.svg";
import styles from "./nav.module.scss";
import styled from "styled-components";

const NotificationStyledSvg = styled(NotificationSvg)`
  fill: #FFFFFF;
  position: absolute;
  top: 0;
  buttom: 0;
  left: 0;
  right: 0;
  margin: auto;
  
  &:hover {
    opacity: 0.5;
  }

  &:focus-visible {
    opacity: 0.5;
  }

  &:active {
    opacity: 0.3;
  }
`;

const LogoutStyledSvg = styled(LogoutSvg)`
  fill: #FFFFFF;
  position: absolute;
  top: 0;
  buttom: 0;
  left: 0;
  right: 0;
  margin: auto;

  &:hover {
    opacity: 0.5;
  }

  &:focus-visible {
    opacity: 0.5;
  }

  &:active {
    opacity: 0.3;
  }
`;

function Nav () {
    return(
        <nav> 
          <ul className={styles.list}> 
            <li className="header__navigation-item"> 
              <button className={styles.button}  type="button"> 
                <NotificationStyledSvg />
                <span className={styles.hidden}> Уведомления </span>
              </button>
            </li>

            <li className={styles.item}> 
              <button className={styles.button} type="button"> 
                <LogoutStyledSvg/>
                <span className={styles.hidden}> Выйти </span>
              </button>
            </li>

          </ul>
        </nav>
    );
}

export default Nav;