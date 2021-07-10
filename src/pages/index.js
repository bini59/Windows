import React from "react";

import WaitScreen from "../components/index/wait-screen";
import LoginScreen from "../components/index/login-screen";

// import "../asset/css/style.css"

import "../asset/scss/window.scss"

const Main = ({data})=>{
    console.log(data);
    return (
        <>
            <WaitScreen />
            <LoginScreen />
        </>
    )
}

export default Main;