import * as React from "react";

import "../../asset/scss/popupmenu.scss"

const PopupMenu = ()=>{

    const category = [
        <li className="category-item">
            Gatsby
        </li>,
        <li className="category-item">
            Jekyll
        </li>
    ]

    return (
        <div className="popup-menu">
            <div className="popup-side-bar">
                <div className="icon"><div className="ico profile" /></div>
                <div className="icon"><div className="ico onoff" /></div>
            </div>
            <div className="popup-categories">
                <ul className="category-list">
                    {category.map(i=>i)}
                </ul>
            </div>
        </div>
    );

}

export default PopupMenu;