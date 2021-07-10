import * as React from "react";

import BiniWindows from "./windows";

const Icons = ({propWindows, z_index})=>{

    const [pos, setPos] = React.useState([60, 40])

    const {zIndex, setzIndex} = z_index;
    const {windows, setWindows} = propWindows;

    const float_window = (name)=>{
        setWindows(windows.concat(<BiniWindows key={new Date().toISOString()} position={pos} z_index={zIndex} name={name}/>))
        setzIndex(zIndex+1);
        setPos([pos[0]+30, pos[1]+20])
    }

    return (
        <section className="icons">
            <div className="folder icon" id="category" onClick={e=>float_window("category")}>
                <div className="ico category" />
                <span>category</span>
            </div>
            <div className="folder icon" id="search" onClick={e=>float_window("search")}>
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