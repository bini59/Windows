import * as React from "react";

const WindowsHeader = ()=>{

    return(
        <section className="windows-header">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css" />
            <div className="windows-name">Windows</div>
            <div className="windows-submenu">
                <span className="windows-submenu-icon far fa-window-minimize"></span>
                <span className="windows-submenu-icon fas fa-expand"></span>
                <span className="windows-submenu-icon fas fa-times"></span>
            </div>
        </section>
    )
}

export default WindowsHeader;