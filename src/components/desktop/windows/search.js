import * as React from "react"

const Search = ()=>{
    return(
        <section className="windows-folder">
            <section className="sidebar">
                <ul className="sidebar-list">
                    <li className="sidebar-item">Category</li>
                    <li className="sidebar-item">Search</li>
                </ul>
            </section>
            <section className="windows-folder-contents">
                <input className="windows-search-input" type="text" />
                <div className="windows-folder-icons">
                </div>
            </section>
        </section>
    );
}

export default Search