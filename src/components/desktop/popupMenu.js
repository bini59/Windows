import * as React from "react";

import "../../asset/scss/desktop/popupmenu.scss"

const PopupMenu = ({style})=>{

    const category = [
        <li key="gatsby" className="category-item">
            Gatsby
        </li>,
        <li key="jekyll" className="category-item">
            Jekyll
        </li>
    ]

    return (
        <div className="popup-menu" style={style}>
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