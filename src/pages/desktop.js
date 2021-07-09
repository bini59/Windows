import * as React from "react";

import Icons from "../components/desktop/Icons";
import Workspace from "../components/desktop/workspace";
import BiniWindows from "../components/desktop/windows";

import "../asset/scss/desktop.scss";

const dragover = (event)=>{
    event.stopPropagation();
    event.preventDefault();
}

const Desktop = ()=>{
    
    return (
        <div className="container"  onDrop={event =>{console.log(event)}} onDragOver={event=>dragover(event)}>
            <Icons />
            <Workspace />
            <BiniWindows />
        </div>
    );
}

export default Desktop;