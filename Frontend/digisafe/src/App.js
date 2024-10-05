import React, {createContext, useState} from "react";
import Header from "./Components/General/Header";
import MasterAuth from "./Components/Master Auth/MasterAuth";
import Greeting from "./Components/Chat Page/Greeting";
import Nav from "./Components/General/Nav";
import Search from "./Components/Data Storage Page/CredentialSearch";
import Chat from "./Components/Chat Page/Chat";
import Credentials from "./Components/Data Storage Page/Credentials";
import ChatBar from "./Components/Chat Page/ChatBar"
import "./App.css";

import { navContext } from "./Contexts/navContext";
import { safeContext } from "./Contexts/Safe";


export default function App() {

    const [passedMaster, setPassedMaster] = useState(true);
    
    const [navChat, setNavChat] = useState(false);
    const [navDataStorage, setNavDataStorage] = useState(true);
    const [indiv, setIndiv] = useState("");

    const [LOCALVAULT, setLOCALVAULT] = useState("No data from backend yet!");

    console.log({ passedMaster, navChat, navDataStorage, indiv });

    return (                                             // BRO?? Why is this so complicated?
        passedMaster == false ? 
              (  <>
                    <Header/>
                    <MasterAuth entrance={setPassedMaster}/>
                </> ) : 
                    // executes if passed
                    navChat ? (
                    
                    <safeContext.Provider value={{LOCALVAULT, setLOCALVAULT}}>
                        <navContext.Provider value={{setNavChat, setIndiv, setNavDataStorage}}>
                            <div>
                                <Header/>
                                <Greeting/>
                                <div className="chatArea">
                                    <Chat/>
                                    <ChatBar placeholder="Search, Ask, or Create Credentials"/>
                                </div>
                                    <Nav/>
                            </div>
                        </navContext.Provider>
                    </safeContext.Provider>
                    ) : navDataStorage ? (
                    
                    <safeContext.Provider value={{LOCALVAULT, setLOCALVAULT}}>
                        <navContext.Provider value={{setNavChat, setNavDataStorage, setIndiv}}>
                            <div>
                        
                                <Header/>
                                <div className="searchContainer">
                                    <Search />
                                    <Credentials />
                                </div>
                                <Nav chatPage={setNavChat} dataStoragePage={setNavDataStorage}/>
                            </div>
                        </navContext.Provider>
                    </safeContext.Provider>
                    ) : indiv != null ?
                          indiv : null  
                );

}


    {/* {/* if (passedMaster == true)
    {
        return (
            <navContext.Provider value={{navChat, setNavChat, navDataStorage, setNavDataStorage}}>
                <div>
                    <Header/>
                    <MasterAuth entrance={setPassedMaster} />
                </div>
            </navContext.Provider>
        );
    }

    else
    {
        if (navChat)
        {
            return (
                <navContext.Provider value={{navChat, setNavChat, navDataStorage, setNavDataStorage}}>
                    <div>
                        <Header/>
                        <Greeting/>
                        <div className="chatArea">
                            <Chat/>
                            <ChatBar placeholder="Search, Ask, or Create Credentials"/>
                        </div>
                            <Nav/>
                    </div>
                </navContext.Provider>

            );
        }

        if (navDataStorage)
        {
            return (
                <navContext.Provider value={{navChat, setNavChat, navDataStorage, setNavDataStorage}}>
                    <div>
                   
                        <Header/>
                        <div className="searchContainer">
                            <Search />
                            <Credentials />
                        </div>  

                        <Nav chatPage={setNavChat} dataStoragePage={setNavDataStorage}/>
                    </div>
                </navContext.Provider>

            
            );
        }
    }*/}
