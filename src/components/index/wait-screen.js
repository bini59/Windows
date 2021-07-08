import * as React from "react";
import { graphql } from "gatsby"

import useTime from "../time";
import $ from "jquery"

const WaitScreen = ({ data})=>{
    const time = useTime();
    console.log(data);
    return (
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
    )
}

export const query = graphql`
{
    site {
        siteMetadata {
            title
            description
            author
        }
    }
} 
`

export default WaitScreen;