import React from "react";
import "./profile.css";
import profileimg from "./profileimg.png";
import arrow from "./arrow.png";
import tick from "./profilecheck.png";
import privacy from "./profilepriv.png"
import password from "./profilepas.png";
import workouts from "./profilewplan.png";
import Header from "./header";
import Footer from "./footer";
import couch from "./profilecouch.png";
import dashbord from "./profiledashbord.png";
import logout from "./profilelogout.png";
function Profile(){
    return(<>
    <Header/>
        <div className="profile-comp">
            <div className="data">
                <div className="comp">
                    <div className="left-side">
                    <div className="profile-pic"><img  src={profileimg}/></div>
                    <h1 className="username">Gonthina Bhushan</h1>
                    </div>
                    <div className="check"><img src={tick}/></div>
                </div>

                <div className="comp">
                    <div className="left-side">
                    <div className="profile"><img  src={privacy}/></div>
                    <h5 className="name">privacy policy</h5>
                    </div>
                    <div className="arrow"><img src={arrow}/></div>
                </div>
               
                <div className="comp">
                    <div className="left-side">
                    <div className="profile"><img  src={password}/></div>
                    <h5 className="name">password change</h5>
                    </div>
                    <div className="arrow"><img src={arrow}/></div>
                </div>
                 <div className="comp">
                    <div className="left-side">
                    <div className="profile"><img  src={workouts}/></div>
                    <h5 className="name">Wokouts plan</h5>
                    </div>
                    <div className="arrow"><img src={arrow}/></div>
                </div>

                <div className="comp">
                    <div className="left-side">
                    <div className="profile" style={{height:"1.5rem",width:"1.5rem"}}><img  src={dashbord}/></div>
                    <h5 className="name">Personal dashbord</h5>
                    </div>
                    <div className="arrow"><img src={arrow}/></div>
                </div>

                <div className="comp">
                    <div className="left-side">
                    <div className="profile"><img  src={couch}/></div>
                    <h5 className="name">Couch Details</h5>
                    </div>
                    <div className="arrow"><img src={arrow}/></div>
                </div>

                <div className="comp">
                    <div className="left-side">
                    <div className="profile"><img  src={logout}/></div>
                    <h3 className="name" style={{fontSize:"x-large",color:" #B0FF18"}}>LogOut</h3>
                    </div>
                    <div className="arrow"><img src={arrow}/></div>
                </div>

            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Profile;