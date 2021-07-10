import * as React from "react";

import WindowsHeader from "./windows/head";
import Folder from "./windows/folder";
import Search from "./windows/search";
import "../../asset/scss/desktop/windows.scss"


const BiniWindows = ({position, z_index, name})=>{

    let content = undefined;
    if(name === "category"){content = <Folder />}
    else if(name === "search"){content = <Search />}

    return(
        <div className="windows" draggable="true" style={{left: position[0], top: position[1],zIndex:z_index}}>
            <WindowsHeader name={name}/>
            {content}
        </div>
    )
}

export default BiniWindows;