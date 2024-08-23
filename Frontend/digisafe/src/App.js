import React, {useState} from "react";
import Header from "./Components/General/Header";
import MasterAuth from "./Components/Master Auth/MasterAuth";
import Greeting from "./Components/Chat Page/Greeting";
import Nav from "./Components/General/Nav";
import Search from "./Components/Data Storage Page/CredentialSearch";
import Chat from "./Components/Chat Page/Chat";
import Credentials from "./Components/Data Storage Page/Credentials";
import ChatSearch from "./Components/Chat Page/ChatSearch"
import "./App.css";

export default function App() {
    const [passedMaster, setPassedMaster] = useState(false);
    const [navChat, setNavChat] = useState(true);
    const [navDataStorage, setNavDataStorage] = useState(false); 

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