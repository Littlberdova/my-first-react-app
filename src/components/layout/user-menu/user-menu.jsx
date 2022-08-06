import React from "react";
import UserCard from "../../ui/user-card/user-card.jsx";
import MenuLink from "../../ui/menu-link/menu-link.jsx";
import styles from "./user-menu.module.scss";
import { ReactComponent as DashboardSvg } from "../../../assets/icons/dashboard.svg";
import { ReactComponent as UsersdSvg } from "../../../assets/icons/users.svg";
import { ReactComponent as ProductsdSvg } from "../../../assets/icons/products.svg";
import { ReactComponent as AuthenticationSvg } from "../../../assets/icons/authentication.svg";
import { ReactComponent as TypographySvg } from "../../../assets/icons/typography.svg";
import { ReactComponent as ImagesSvg } from "../../../assets/icons/images.svg";
import { ReactComponent as SupportSvg } from "../../../assets/icons/support.svg";
import styled from "styled-components";

const DashboardStyledSvg = styled(DashboardSvg)`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

const UsersStyledSvg = styled(UsersdSvg)`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

const ProductsStyledSvg = styled(ProductsdSvg)`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

const AuthenticationStyledSvg = styled(AuthenticationSvg)`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

const TypographyStyledSvg = styled(TypographySvg)`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

const ImagesStyledSvg  = styled(ImagesSvg)`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

const SupportStyledSvg  = styled(SupportSvg)`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
`;


function UserMenu (props) {

    return (
    <div className={styles.wrapper}> 
        <UserCard  username="Roman Kutepov"  position="Brain Director"/>
        <div>  
            <ul className={styles.list}> 
                <li> <DashboardStyledSvg /><MenuLink  href="#" text="Dashboard" /> </li>
                <li> <UsersStyledSvg /> <MenuLink  href="#" text="Users" /> </li>
                <li> <ProductsStyledSvg/> <MenuLink  href="#" text="Products" /> </li>
                <li> <AuthenticationStyledSvg/> <MenuLink  href="#" text="Authentication" /> </li>
                <li> <TypographyStyledSvg />  <MenuLink href="#" text="Typography" /> </li>
                <li> <ImagesStyledSvg />   <MenuLink href="#" text="Icons Images" /> </li>
            </ul>
            <h3 className={styles.title}> Support </h3>
            <ul className={styles.list}> 
                <li> <SupportStyledSvg/> <MenuLink  href="#" text="Support" /> </li>
            </ul>
        </div>
    </div>
    );
};

export default UserMenu;