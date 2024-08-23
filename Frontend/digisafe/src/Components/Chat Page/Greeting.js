import React from "react";
import styles from "../Styles/Greeting.module.css"

export default function Greeting()
{
    const username = "Aarush"
    const dateObj = new Date();
    const hour = dateObj.getHours();
    let timeOfDay;

    if (hour < 12) {timeOfDay = "Morning";}
    else if (hour >= 12 && hour < 16) {timeOfDay = "Afternoon";}
    else {timeOfDay = "Evening";}

    const hourGreeting = "Good " + timeOfDay;

    const greetings = [
        hourGreeting, "Welcome Back", "Hi There", "'Sup"
    ];

    const random = Math.floor(Math.random() * greetings.length);
    
    let display = greetings[random] + ", " + username;

    return (
        
        <div className={styles.greeting}> {display} </div>

    );
}