import React, {useState} from "react";
import Header from "./Components/Header";
import MasterAuth from "./Components/MasterAuth";
import Greeting from "./Components/Greeting";
import Nav from "./Components/Nav";
import ChatType from "./Components/ChatType";
import Chat from "./Components/Chat";
import Credentials from "./Components/Credentials";
import "./App.css";

export default function App() {
    const [passedMaster, setPassedMaster] = useState(false);

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
        return (
            <div>
                {/* <Header/>
                <Greeting/>
                <div className="chatArea">
                    <Chat/>
                    <ChatType/>
                </div> */}

                <Header/>
                <div className="searchContainer">
                    <ChatType placeholder="Search Credentials"/>
                    <Credentials />
                </div>
                
              
                    
                
            </div>
        );
    }
}