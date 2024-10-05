import React, { useContext, useEffect, useState } from "react";
import Credential from "./Credential";
import styles from "../Styles/Credentials.module.css";
import { safeContext } from "../../Contexts/Safe";


export default function Credentials() {

    // const [LOCALVAULT, setLOCALVAULT] = useState("No data from backend yet!");

    const {LOCALVAULT, setLOCALVAULT} = useContext(safeContext);

    useEffect(() => {
        fetch("http://localhost:3002/api/credentials")
        .then(res => res.json())
        .then(credentials => setLOCALVAULT(credentials))
        .catch(err => console.error(err))
    }, []);

    function renderCredentialsFromLOCALVAULT() {
        return Object.keys(LOCALVAULT).map(service => (
            <Credential key={service} name={LOCALVAULT[service].name}/>
        ))
    }

    


    return (
        <>
            {LOCALVAULT == undefined ? <h2> Loading... </h2> : 
            
            ( <div className={styles.credentialsDisplay}>
                {renderCredentialsFromLOCALVAULT()}
            </div> ) 
            }
            
        </>
    );
}
