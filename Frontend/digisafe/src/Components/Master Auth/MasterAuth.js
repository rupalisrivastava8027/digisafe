import React from "react";
import styles from "../Styles/MasterAuth.module.css"
import logo from "../../images/DigiSafe_Logo.png";

export default function MasterAuth(props) {
    function handleClickForSubmit()
    {
        const correctMaster = "hello";
        const inputField = document.getElementById("input");
        
        if (inputField.value == correctMaster)
        {
            props.entrance(true);
            console.log("Passed");
            inputField.style.borderColor = "green";
        }

        else
        {
            console.log("Incorrect");
            inputField.style.borderColor = "red";
        }
    }


    return (
        <div className={styles.master_auth_field}>
            <div> 
                <img src={logo} alt="Logo" id="logo"/>      
            </div>

            <input id="input" type="password" placeholder="Enter Master Password"/>
            <input style={{borderWidth: "2", backgroundColor: "transparent", cursor: "pointer"}} type="submit" value="&#11166;" onClick={handleClickForSubmit}/>

        </div>
    );
}


