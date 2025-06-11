import React from "react";
import Footer from "./footer";
import Header from "./header";
import "./login.css";

function Login(){
    return(
        <>
        <Header/>
        <div className="login-comp">
            <div className="login-form">
                <div className="mail">
                 
                  <input type="email" placeholder="@gmail.com"/>
                </div>
                <div className="mail">
                 
                  <input type="password" placeholder="password"/>
                </div>
                <div className="login-btn-comp">
                <button>Login</button>
                </div>
            </div>
               
        </div>
        <Footer/>
        </>
    );

}
export default Login;