import * as React from "react";

import WindowsHeader from "./windows/head";
import Folder from "./windows/folder";
import "../../asset/scss/desktop/windows.scss"


const BiniWindows = ()=>{
    

    return(
        <div className="windows" draggable="true">
            <WindowsHeader />
            <Folder />
        </div>
    )
}

export default BiniWindows;