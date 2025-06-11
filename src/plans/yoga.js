import React from "react";
import "./womengym.css";
import yoga1 from "./yoga1.png";
import yoga2 from "./yoga2.png";
import yoga3 from "./yoga3.png";
import yoga4 from "./yoga4.png";
function Yoga(){
    return(
        <>
        <div className="plans-comp">
                    <div className="plans-content">
                        <div className="plan-cards">
                            <div className="plan-card">
                                <img src={yoga1}/>
                                <h3 className="title">Vizag yoga center</h3>
                                <p className="price">Per week    $25/-</p>
                                <button className="active">Service active</button>
                            </div>
        
                             <div className="plan-card">
                                <img src={yoga2}/>
                                <h3 className="title">Beach resort</h3>
                                <p className="price">Per week    $30/-</p>
                                <button className="active">Service active</button>
                            </div>
        
                             <div className="plan-card">
                                <img src={yoga3}/>
                                <h3 className="title">Techno yoga</h3>
                                <p className="price">Per week    $34/-</p>
                                <button className="active">Service active</button>
                            </div>
        
                             <div className="plan-card">
                                <img src={yoga4}/>
                                <h3 className="title">Resto peace</h3>
                                <p className="price">Per week    $45/-</p>
                                <button className="active">Service active</button>
                            </div>
        
                             <div className="plan-card">
                                <img src={yoga1}/>
                                <h3 className="title">Fitness Hub</h3>
                                <p className="price">Per week    $25/-</p>
                                <button className="active">Service active</button>
                            </div>
        
                             <div className="plan-card">
                                <img src={yoga1}/>
                                <h3 className="title">Fitness Hub</h3>
                                <p className="price">Per week    $25/-</p>
                                <button className="active">Service active</button>
                            </div>
        
                             <div className="plan-card">
                                <img src={yoga1}/>
                                <h3 className="title">Fitness Hub</h3>
                                <p className="price">Per week    $25/-</p>
                                <button className="active">Service active</button>
                            </div>
        
                             <div className="plan-card">
                                <img src={yoga1}/>
                                <h3 className="title">Fitness Hub</h3>
                                <p className="price">Per week    $25/-</p>
                                <button className="active">Service active</button>
                            </div>
        
                           
                            
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Yoga;