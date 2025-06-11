import React from "react";
import "./validity.css";
import sameplan from "./sameplan.png";
import location from "./location.png";
import range from "./range.png";
import Header from "./header";
import Footer from "./footer";
import past1 from "./past1.png";
import past2 from "./past2.png";
function Validity(){
    return(<>
    <Header/>
        <div className="val-comp">
            <div className="first">
                <h1>Present</h1>
            <div className="present">
                <div className="img-comp"><img src={sameplan}/></div>
                <h1 className="headline">Fitness Hub</h1>
                <div className="modloc">
                    <h4>Mode: Offline</h4>
                    <div className="location">
                        <div className="loc-com"><img src={location}/></div>
                        <p>5-105,pendurthi,<br/>vizag,Ap,India -531173</p>
                    </div>
                </div>
                <div className="range">
                    <img src={range} className="range-img"/>
                    <p>27/365</p>
                </div>
                <button className="reactive">Reactive</button>

            </div>
            </div>
            <h1>Past</h1>
            <div className="before">
            <div className="second">
                <div className="past">
                    <img src={past1}/>
                    <h3>We men gym</h3>
                    <div className="range"><img src={range}/></div>
                    <button className="kmore">KnowMore </button>
                </div>

                 <div className="past">
                    <img src={past1}/>
                    <h3>We men gym</h3>
                    <div className="range"><img src={range}/></div>
                    <button className="kmore">KnowMore </button>
                </div>

                 <div className="past">
                    <img src={past1}/>
                    <h3>We men gym</h3>
                    <div className="range"><img src={range}/></div>
                   <button className="kmore">KnowMore </button>
                </div>

            </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}
export default Validity;