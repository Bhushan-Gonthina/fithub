import React from "react";
import "./womengym.css";
import mengym1 from "./women1.png";
import mengym2 from "./women2.png";
import mengym3 from "./women3.png";
import mengym4 from "./women4.png";
function Womengym(){
    return(
        <>
        <div className="plans-comp">
            <div className="plans-content">
                <div className="plan-cards">
                    <div className="plan-card">
                        <img src={mengym1}/>
                        <h3 className="title">Fitness Hub</h3>
                        <p className="price">Per week    $25/-</p>
                        <button className="active">Service active</button>
                    </div>

                     <div className="plan-card">
                        <img src={mengym2}/>
                        <h3 className="title">Vizag Hunters</h3>
                        <p className="price">Per week    $30/-</p>
                        <button className="active">Service active</button>
                    </div>

                     <div className="plan-card">
                        <img src={mengym4}/>
                        <h3 className="title">Mick Tye</h3>
                        <p className="price">Per week    $34/-</p>
                        <button className="active">Service active</button>
                    </div>

                     <div className="plan-card">
                        <img src={mengym3}/>
                        <h3 className="title">Beach Resto</h3>
                        <p className="price">Per week    $45/-</p>
                        <button className="active">Service active</button>
                    </div>

                     <div className="plan-card">
                        <img src={mengym1}/>
                        <h3 className="title">Fitness Hub</h3>
                        <p className="price">Per week    $25/-</p>
                        <button className="active">Service active</button>
                    </div>

                     <div className="plan-card">
                        <img src={mengym1}/>
                        <h3 className="title">Fitness Hub</h3>
                        <p className="price">Per week    $25/-</p>
                        <button className="active">Service active</button>
                    </div>

                     <div className="plan-card">
                        <img src={mengym1}/>
                        <h3 className="title">Fitness Hub</h3>
                        <p className="price">Per week    $25/-</p>
                        <button className="active">Service active</button>
                    </div>

                     <div className="plan-card">
                        <img src={mengym1}/>
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
export default Womengym;