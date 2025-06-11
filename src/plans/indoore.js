import React from "react";
import "./womengym.css";
import Indore1 from "./indore1.png";
import Indore2 from "./indore2.png";
import Indore3 from "./indore3.png";
import Indore4 from "./indore4.png";
import Indore5 from "./indore5.png";
import Indore6 from "./indore6.png";
import Indore7 from "./indore7.png";
import Indore8 from "./indore8.png";
function Indoore(){
    return(
        <>
        <div className="plans-comp">
                    <div className="plans-content">
                        <div className="plan-cards">
                            <div className="plan-card">
                                <img src={Indore1}/>
                                <h3 className="title">laxman fitness</h3>
                                <p className="price">Per week    $25/-</p>
                                <button className="active">Service active</button>
                            </div>
        
                             <div className="plan-card">
                                <img src={Indore2}/>
                                <h3 className="title">Indian gym</h3>
                                <p className="price">Per week    $30/-</p>
                                <button className="active">Service active</button>
                            </div>
        
                             <div className="plan-card">
                                <img src={Indore3}/>
                                <h3 className="title">Uni-co</h3>
                                <p className="price">Per week    $34/-</p>
                                <button className="active">Service active</button>
                            </div>
        
                             <div className="plan-card">
                                <img src={Indore4}/>
                                <h3 className="title">Samaba Fit-ness</h3>
                                <p className="price">Per week    $45/-</p>
                                <button className="active">Service active</button>
                            </div>
        
                             <div className="plan-card">
                                <img src={Indore5}/>
                                <h3 className="title">Natural fitHub</h3>
                                <p className="price">Per week    $25/-</p>
                                <button className="active">Service active</button>
                            </div>
        
                             <div className="plan-card">
                                <img src={Indore6}/>
                                <h3 className="title">Stay Fit</h3>
                                <p className="price">Per week    $25/-</p>
                                <button className="active">Service active</button>
                            </div>
        
                             <div className="plan-card">
                                <img src={Indore7}/>
                                <h3 className="title">Grow Fit</h3>
                                <p className="price">Per week    $25/-</p>
                                <button className="active">Service active</button>
                            </div>
        
                             <div className="plan-card">
                                <img src={Indore8}/>
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
export default Indoore;