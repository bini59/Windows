import React,{} from "react";

const Workspcae = (props)=>{



    return (
        <section className="workspace">
            <div className="popup-menu">
                <div className="side-bar">
                    <div className="profile"><img src="/asset/img/profile.png" /></div>
                    <div className="logout"><img src="/asset/img/onoff.png" /></div>
                </div>
                <div className="categories">
                    <div className="folder popup-list" id="" onClick={event=>props.addFolder(event)}></div>
                </div>
            </div>
            
            <div className="workspace">
                <div className="workspace-menu">
                    <div className="menu-icon"></div>
                </div>
            
                <div className="workspace-time">
                    <span className="main-clock-time"></span>
                    <span className="main-clock-date"></span>
                </div>
            
            </div>
            
            <div className="signout-screen">
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                <span>Signing out</span>
            </div>
        </section>

    )
}