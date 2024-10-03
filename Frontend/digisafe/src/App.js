import React, {useState} from "react";
import Header from "./Components/General/Header";
import MasterAuth from "./Components/Master Auth/MasterAuth";
import Greeting from "./Components/Chat Page/Greeting";
import Nav from "./Components/General/Nav";
import Search from "./Components/Data Storage Page/CredentialSearch";
import Chat from "./Components/Chat Page/Chat";
import Credentials from "./Components/Data Storage Page/Credentials";
import ChatBar from "./Components/Chat Page/ChatBar"
import "./App.css";
import IndivCred from "./Components/Data Storage Page/Indiv. Credentials Page/IndivCred";
import * as IndivCredParams from "./Components/Data Storage Page/Indiv. Credentials Page/IndivCredParams";

export default function App() {

    const [passedMaster, setPassedMaster] = useState(false);
    
    const [navChat, setNavChat] = useState(false);    
    const [navDataStorage, setNavDataStorage] = useState(true);
    
    if (passedMaster == true)
    {
        return (
            <div>
                <Header/>
                <MasterAuth entrance={setPassedMaster} />
            </div>
        );
    }

    else
    {
        if (navChat)
        {
            return (
                
                <div>
                    <Header/>
                    <Greeting/>
                    <div className="chatArea">
                        <Chat/>
                        <ChatBar placeholder="Search, Ask, or Create Credentials"/>
                    </div>
                    <Nav chatPage={setNavChat} dataStoragePage={setNavDataStorage}/>
                </div>
            );
        }

        if (navDataStorage)
        {
            return (
                <div>
                    <Header/>
                    <div className="searchContainer">
                        <Search />
                        <Credentials />
                    </div>  

                    <Nav chatPage={setNavChat} dataStoragePage={setNavDataStorage}/>
                </div>
            );
        }

        if (IndivCredParams.state) {
            return (
                <>
                    <Header/>

                    <IndivCred name={IndivCredParams.name}/>
                </>
            );
        }
    }
}   