import React,{useState} from "react";

const Login = ()=>{

    const [sign, signIn] = useState(true)

    return (
        <div className="login">
            {sign ? 
                <button className="login-btn" onClick={(event=>{
                    signIn(false)
                    setTimeout(()=>window.location.assign("/desktop"), 2000)
                })}>Log In</button>:
                <div className="login-loading">
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    <span>Welcome</span>
                </div>
            }
        </div>
    )
}

export default Login;