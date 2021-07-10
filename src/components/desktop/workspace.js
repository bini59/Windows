import * as React from "react";
import useTime from "../time";

import PopupMenu from "./popupMenu";

import "../../asset/scss/desktop/workspace.scss"

const Workspace = ()=>{

    const time = useTime()
    const [togglePopup, toggleFunc] = React.useState(false);

    return (
        <section>
            <div className="workspace">
                <div className="workspace-popup">
                    <div className="popup-icon" onClick={e=>toggleFunc(!togglePopup)}></div>
                </div>
            
                <div className="workspace-time">
                    <span className="clock main-clock-time">
                        {time.toTimeString().slice(0, 2)}:{time.toTimeString().slice(3, 5)}
                    </span>
                    <span className="clock main-clock-date">
                        {time.toLocaleString("en-us", {day: 'numeric', year: 'numeric', month: 'long'})}
                    </span>
                </div>
            
            </div>
            

            <PopupMenu style={togglePopup ? {height: "14rem"} : {height: "0"}} />
        </section>
    )
}

export default Workspace;