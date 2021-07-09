import * as React from "react";

import PopupMenu from "./popupMenu";

import useTime from "../time";


const Workspace = ()=>{

    const time = useTime()

    return (
        <section>
            <div className="workspace">
                <div className="workspace-menu">
                    <div className="menu-icon"></div>
                </div>
            
                <div className="workspace-time">
                    <span className="main-clock-time">
                        {time.toTimeString().slice(0, 2)}:{time.toTimeString().slice(3, 5)}
                    </span>
                    <span className="main-clock-date">
                        {time.toLocaleString("en-us", {day: 'numeric', year: 'numeric', month: 'long'})}
                    </span>
                </div>
            
            </div>
            
            <div className="signout-screen">
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                <span>Signing out</span>
            </div>

            <PopupMenu />
        </section>
    )
}

export default Workspace;