import React from "react";
import Message from "./Message";
import styles from "../Styles/Chat.module.css";


export default function Chat() {

    return (
        <div className={styles.chat}>
            <Message type="bot" text="Hello, there! I am Digi, your digital identity manager. I can help search and create credentials, credit card numbers, passkeys, legal documents, and biometric data. As an intelligent manager, I can also provide my information/advice."/>
            <Message type="user" text="Hi, my name is Aarush!"/>
            <Message type="bot" text="Hello"/>
            <Message type="user" text="Hi, my name is Aarush!"/>
            <Message type="user" text="Hi, my name is Aarush!"/>
            <Message type="user" text="Hi, my name is Aarush!"/>
            <Message type="user" text="Hi, my name is Aarush!"/>
            <Message type="bot" text="Hi, my name is Bot!"/>
            <Message type="user" text="Hi, my name is Aarush!"/>
        </div>
    );
}