import React from "react";
import styles from "../Styles/Nav.module.css"

export default function Nav(props) {

    function handleClickChat() {
        props.chatPage(true);
        props.dataStoragePage(false);
    }

    function handleClickDataStorage() {
        props.chatPage(false);
        props.dataStoragePage(true);
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