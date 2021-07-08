import * as React from "react";

import Login from "./login";
import $ from "jquery";

const LoginScreen = ()=>{
    return (
        <div className="index-login">
            <div className="profile">
                <div className="profile-picture" />
            </div>
            <Login />
            <div className="index-side-menu">
                <div className="side-wifi" />
                <div className="side-logout" onClick={event=>$(".index-title")[0].style = "transform: translateY(0vh);"} />
            </div>
        </div>
    )
}

export default LoginScreen;