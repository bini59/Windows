import * as React from "react";

const Icons = ()=>{


    return (
        <section className="icons">
            <div className="folder icon" id="category">
                <div className="ico category" />
                <span>category</span>
            </div>
            <div className="folder icon" id="search">
                <div className="ico search" />
                <span>search</span>
            </div>
            <div className="shortcut icon" id="github">
                <div className="ico github"/>
                <span>github</span>
            </div>
        </section>
    )
}

export default Icons;