import React, {useState, useEffect} from "react"


const dragstart = (event)=>{
    console.log(event)
    event.target.style.opacity = "0.5"
}

const dragend = (event)=>{
    event.target.style.opacity = "1"
}


const Window = ()=>{
    
    const [window_title, setTitle] = useState();



    return (
        <div 
            className="file-explorer windows" 
            draggable="true" 
            onDragStart={event=>dragstart(event)} 
            onDragEnd={event=>dragend(event)}
        >
            <section className="windows-head">
                <span className="windows-title">Title</span>
                <div className="windows-control">
                    <div className="windows-minimum">─</div>
                    <div className="windows-size">□</div>
                    <div className="windows-exit">Ｘ</div>
                </div>
            </section>
        </div>
    );
}

export default Window;