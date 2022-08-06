import React from "react";
import Header from "../header/header.jsx";
import MainPage from "../../pages/main-page/main-page.jsx";
import UserMenu from "../user-menu/user-menu.jsx";
import TopMenu from "../../blocks/top-menu/top-menu.jsx";
import styles from "./page-wrapper.module.scss";


// Обёртка для контента страниц
function PageWrapper() {
    return (
      <>
        <Header />
      
        <main className={styles.main}>
          <section className="user-menu"> 
           <h2 className={styles.hidden}> User menu </h2>
           <UserMenu />
          </section>

          <section>
            <TopMenu />
            <MainPage />
          </section>

        </main>
      </>
    );
  }
  
  export default PageWrapper;