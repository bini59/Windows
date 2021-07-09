import * as React from "react";

const Icons = ()=>{


    return (
        <section className="icons">
            <div className="folder icon" id="category">
                <div className="icon-category" />
                <span>category</span>
            </div>
            <div className="folder icon" id="search">
                <div className="icon-search" />
                <span>search</span>
            </div>
            <div className="shortcut icon" id="github">
                <div className="icon-github"/>
                <span>github</span>
            </div>
        </section>
    )
}

export default Icons;