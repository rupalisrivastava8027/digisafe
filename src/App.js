import React, {useState} from "react";
import Header from "./Components/Header";
import MasterAuth from "./Components/MasterAuth";
import Greeting from "./Components/Greeting";
import Nav from "./Components/Nav";
import Search from "./Components/CredentialSearch";
import Chat from "./Components/Chat";
import Credentials from "./Components/Credentials";
import ChatSearch from "./Components/ChatSearch"
import "./App.css";

export default function App() {
    const [passedMaster, setPassedMaster] = useState(false);
    const [navChat, setNavChat] = useState(true);
    const [navDataStorage, setNavDataStorage] = useState(false); 

    if (passedMaster == false)
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
                        <ChatSearch placeholder="Search, Ask, or Create Credentials"/>
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
                        <Search placeholder="Search Credentials" />
                        <Credentials />
                    </div>  

                    <Nav chatPage={setNavChat} dataStoragePage={setNavDataStorage}/>
                </div>
            );
        }
    }
}