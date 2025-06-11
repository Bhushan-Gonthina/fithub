import React from "react";
import "./womengym.css";
import Outdoore1 from "./outdoore1.png";
import Outdoore2 from "./outdoore2.png";
import Outdoore3 from "./outdoore3.png";
import Outdoore4 from "./outdoore4.png";
import Outdoore5 from "./outdoore5.png";
import Outdoore6 from "./outdoore6.png";
import Outdoore7 from "./outdoore7.png";
import Outdoore8 from "./outdoore8.png";
function Outdoore(){
    return(
        <>
        <div className="plans-comp">
                    <div className="plans-content">
                        <div className="plan-cards">
                            <div className="plan-card">
                                <img src={Outdoore1}/>
                                <h3 className="title">laxman fitness</h3>
                                <p className="price">Per week    $25/-</p>
                                <button className="active">Service active</button>
                            </div>
        
                             <div className="plan-card">
                                <img src={Outdoore2}/>
                                <h3 className="title">Indian gym</h3>
                                <p className="price">Per week    $30/-</p>
                                <button className="active">Service active</button>
                            </div>
        
                             <div className="plan-card">
                                <img src={Outdoore3}/>
                                <h3 className="title">Uni-co</h3>
                                <p className="price">Per week    $34/-</p>
                                <button className="active">Service active</button>
                            </div>
        
                             <div className="plan-card">
                                <img src={Outdoore4}/>
                                <h3 className="title">Samaba Fit-ness</h3>
                                <p className="price">Per week    $45/-</p>
                                <button className="active">Service active</button>
                            </div>
        
                             <div className="plan-card">
                                <img src={Outdoore5}/>
                                <h3 className="title">Natural fitHub</h3>
                                <p className="price">Per week    $25/-</p>
                                <button className="active">Service active</button>
                            </div>
        
                             <div className="plan-card">
                                <img src={Outdoore6}/>
                                <h3 className="title">Stay Fit</h3>
                                <p className="price">Per week    $25/-</p>
                                <button className="active">Service active</button>
                            </div>
        
                             <div className="plan-card">
                                <img src={Outdoore7}/>
                                <h3 className="title">Grow Fit</h3>
                                <p className="price">Per week    $25/-</p>
                                <button className="active">Service active</button>
                            </div>
        
                             <div className="plan-card">
                                <img src={Outdoore8}/>
                                <h3 className="title">Laxmi gy</h3>
                                <p className="price">Per week    $25/-</p>
                                <button className="active">Service active</button>
                            </div>
        
                           
                            
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Outdoore;