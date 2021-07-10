import * as React from "react";

import Icons from "../components/desktop/Icons";
import Workspace from "../components/desktop/workspace";
import BiniWindows from "../components/desktop/windows";

import "../asset/scss/desktop/desktop.scss";

const dragover = (event)=>{
    event.stopPropagation();
    event.preventDefault();
}

const Desktop = ()=>{

    const [togglePopup, toggleFunc] = React.useState(false);
    
    return (
        <div className="desktop-container" onClick={e=>toggleFunc(!togglePopup)} onDrop={event =>{console.log(event)}} onDragOver={event=>dragover(event)}>
            <Icons />
            <Workspace togglepopup={{togglePopup: togglePopup, toggleFunc: toggleFunc}}/>
            <BiniWindows />

            {/* <div className="signout-screen">
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                <span>Signing out</span>
            </div> */}
        </div>
    );
}

export default Desktop;