import React,{ useState } from "react";

import BiniWindows from "../components/windows";

const Desktop = ()=>{

    const [bini_windows, setBiniWindows] = useState([])

    const addFolder = (event)=>{
        setBiniWindows(bini_windows.concat(
            <BiniWindows />
        ))
    }
    const addSearch = (event)=>{
        setBiniWindows(bini_windows.concat(
            <BiniWindows />
        ))
    }
    

    return (
        <div className="container" 
            onDrop={event =>{
                console.log(event)
            }}
            onDragOver={event=>{
                event.stopPropagation();
                event.preventDefault();
            }}>
        <div className="icons">
            <div className="folder icon" id="category" onClick={event=>addFolder(event)}>
                <div className="icon-category" />
                <span>category</span>
            </div>
            <div className="folder icon" id="search" onClick={event=>addSearch(event)}>
                <div className="icon-search" />
                <span>search</span>
            </div>
            <div className="shortcut icon" id="github" name="site.github_username">
                <div className="icon-github"/>
                <span>github</span>
            </div>
        </div>

    </div>
    );
}

export default Desktop;