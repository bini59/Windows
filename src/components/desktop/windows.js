import * as React from "react";

import WindowsHeader from "./windows/head";
import Folder from "./windows/folder";
import "../../asset/scss/windows.scss"


const BiniWindows = ()=>{
    

    return(
        <div class="windows" draggable="true">
            <WindowsHeader />
            <Folder />
        </div>
    )
}

export default BiniWindows;