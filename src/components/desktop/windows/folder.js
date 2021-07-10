import * as React from "react";

const Folder = ()=>{

    const icons = [
        <div key="gatsby" className="icon">
            <div className="ico" />
            <span className="name">Gatsby</span>
        </div>,
        <div key="jekyll" className="icon">
            <div className="ico" />
            <span className="name">Jekyll</span>
        </div>,
        <div key="github" className="icon">
            <div className="ico github" />
            <span className="name">Github</span>
        </div>,
    ]

    return(
        <section className="windows-folder">
            <section className="sidebar">
                <ul className="sidebar-list">
                    <li className="sidebar-item">Category</li>
                    <li className="sidebar-item">Search</li>
                </ul>
            </section>
            <section className="windows-folder-contents">
                <div className="windows-folder-icons">
                    {icons.map((i)=> i)}
                </div>
            </section>
        </section>
    );
}

export default Folder;