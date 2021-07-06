import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import useTime from "../components/time"

import Login from "../components/login";

import $ from "jquery"


import "../asset/css/style.css"

const Main = ()=>{

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `)

    const time = useTime();

    return (
        <>
        <div className="index-title" onClick={event=>$(".index-title")[0].style = "transform: translateY(-100vh);"}>
            <div className="index-title-clock">
                <div className="main-clock-time">
                    {time.toTimeString().slice(0, 2)}:{time.toTimeString().slice(3, 5)}
                </div>
                <div className="main-clock-date">
                    {time.toLocaleString("en-us", {
                        day: 'numeric', // numeric, 2-digit
                        year: 'numeric', // numeric, 2-digit
                        month: 'long', // numeric, 2-digit, long, short, narrow
                    })}
                </div>
            </div>
            <div className="index-title-name">
                <h1>{data.site.siteMetadata.title}</h1>
                <span>{data.site.siteMetadata.author}</span>
                <h3>{data.site.siteMetadata.description}</h3>
            </div>
        </div>
        <div className="index-login">
            <div className="profile">
                <div className="profile-picture">

                </div>
            </div>
            <Login></Login>
            <div className="index-side-menu">
                <img src="/asset/img/wifi.png" />
                <img className="logout" src="/asset/img/onoff.png" onClick={event=>$(".index-title")[0].style = "transform: translateY(0vh);"} />
            </div>
        </div>
        </>
    )
}

export default Main;