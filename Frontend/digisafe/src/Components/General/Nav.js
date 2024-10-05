import React, { useContext } from "react";
import styles from "../Styles/Nav.module.css"
import { navContext } from "../../Contexts/navContext"

export default function Nav() {

    const {navChat, setNavChat, navDataStorage, setNavDataStorage} = useContext(navContext);

    function handleClickChat() {
       setNavChat(true);
       setNavDataStorage(false);
    }

    function handleClickDataStorage() {
        setNavChat(false);
        setNavDataStorage(true);
    }


    return (
        <div className={styles.navBox}>
            <div className={styles.nav}>
                <p onClick={handleClickChat}> Chat </p>  
                <p onClick={handleClickDataStorage}> Data Storage </p>  
            </div>
        </div>
    );
}