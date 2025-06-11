import React from "react";
import "./contact.css";

function Contact(){
    return(
        <div className="Contact-comp">
            
            <div className="inp-form">
                <div className="contact-head">
                <h1>Contact Us</h1>
            </div>
                <div className="inp">
                    <span>F Name</span>
                     <input type="text" placeholder="First Name"/>
                </div>

                <div className="inp">
                    <span>L Name</span>
                    <input type="text" placeholder="Last Name"/>
                </div>

                <div className="inp">
                    <span>Email</span>
                    <input type="email" placeholder="@gmail.com"/>
                </div>

                <div className="inp">
                    <span>Password</span>
                    <input type="password" placeholder="minimum 8 digs"/>
                </div>
                <div className="inp">
                    <span>Message *</span>
                    <textarea placeholder="Message *"/>
                </div>
                <div className="inp">
                    <button>Submit</button>
                </div>

            </div>
        </div>
    )
}
export default Contact;