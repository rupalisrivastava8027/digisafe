import React from "react";
import styles from "../Styles/ChatBar.module.css";

export default function Search(props) {

    function handleSubmit() {
        const query = document.getElementById("type").value;
        console.log(query);
    }

    return (
        <div className={styles.chatbar}>
            <form>
                <input className={styles.typingbox} id="type" maxLength={300} type="search" placeholder={props.placeholder} required/>
                <input className={styles.send} type="submit" onClick={handleSubmit} value="&#11166;"/>
            </form>
        </div>
    );
}