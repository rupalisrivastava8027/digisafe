import React, { useContext } from "react";
import styles from "../Styles/Credential.module.css";
import IndivPage from "./Indiv. Credentials Page/IndivPage";
import { navContext } from "../../Contexts/navContext";
import { safeContext } from "../../Contexts/Safe";

export default function Credential(props) {

    const {setNavDataStorage, setIndiv, setNavChat} = useContext(navContext);
    const {LOCALVAULT} = useContext(safeContext);

    function handleClick() {
        // identify which credential was clicked
        const clickedCredential = LOCALVAULT[props.name]

        // set all NavStates to false
        setNavChat(false);
        setNavDataStorage(false)
       

        // set Parameters of IndivPage to LocalVault[credential]'s
        const renderIndivPage = (
            <IndivPage name={clickedCredential.name}/>
        );

        setIndiv(renderIndivPage)

        

        
    }
    return (
        <button style={styles.button} onClick={handleClick}>{props.name}</button>
    );
}