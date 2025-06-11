import React, { useState } from "react";
import "./content.css";
import mengym from "./mengym.png";
import womengym from "./womengym.png";
import yoga from "./yoga.png";
import outdoor from "./outdoor.png";
import Mengym from "./plans/mengym";
import Womengym from "./plans/womengym";
import Indoore from "./plans/indoore";
import Header from "./header";
import Footer from "./footer";
import indooreimg from "./indoreimg.png";
import Yoga from "./plans/yoga";
import Outdoore from "./plans/outdoore";

function Content(){
    let[Change,setchange] = useState(null);
        let render= ()=>{
          switch(Change){
            case "mengym" :
                return <><Mengym/></>
            case "womengym":
                return <Womengym/>
            case "yoga":
                return <Yoga/>
            case "indoor":
                return <Indoore/>
            case "outdoore":
                return <Outdoore/>
          }
        }
    return(
        
        <div className="cont">
            <div className="cards">
                <div className="card" onClick={()=>setchange("mengym")}>
                     <div className="img-cant"><img src={mengym}/></div>
                    <h3>Men Gym</h3>
                    <button className="Kmore" >Know More</button>
                </div>

                 <div className="card" onClick={()=>setchange("womengym")}>
                    <div className="img-cant"><img src={womengym}/></div>
                    <h3>women Gym</h3>
                    <button className="Kmore">Know More</button>
                </div>

                 <div className="card" onClick={()=>setchange("yoga")}>
                     <div className="img-cant"><img src={yoga}/></div>
                    <h3>Yoga</h3>
                    <button className="Kmore">Know More</button>
                </div>

                 <div className="card" onClick={()=>setchange("outdoore")}>
                     <div className="img-cant"><img src={outdoor}/></div>
                    <h3>outdoor</h3>
                    <button className="Kmore">Know More</button>
                </div>

                    <div className="card"onClick={()=>setchange("indoor")}>
                     <div className="img-cant"><img src={indooreimg}/></div>
                    <h3>Indoor</h3>
                    <button className="Kmore">Know More</button>
                </div>

                <div className="card" onClick={()=>setchange("mengym")}>
                     <div className="img-cant"><img src={mengym}/></div>
                    <h3>Men Gym</h3>
                    <button className="Kmore" >Know More</button>
                </div>

                 <div className="card" onClick={()=>setchange("womengym")}>
                    <div className="img-cant"><img src={womengym}/></div>
                    <h3>women Gym</h3>
                    <button className="Kmore">Know More</button>
                </div>

                 <div className="card" onClick={()=>setchange("yoga")}>
                     <div className="img-cant"><img src={yoga}/></div>
                    <h3>Yoga</h3>
                    <button className="Kmore">Know More</button>
                </div>

                 <div className="card" onClick={()=>setchange("outdoore")}>
                     <div className="img-cant"><img src={outdoor}/></div>
                    <h3>outdoor</h3>
                    <button className="Kmore">Know More</button>
                </div>

                    <div className="card"onClick={()=>setchange("indoor")}>
                     <div className="img-cant"><img src={indooreimg}/></div>
                    <h3>Indoor</h3>
                    <button className="Kmore">Know More</button>
                </div>
               

            </div>
             {render()}
            <div className="cont2">
            <div className="trail">
                <p>
                    You can get free tail for first 1 week after that you can pay the money if you dosn’t like the membership you can cancel any time . we can refund your money 
                </p>
                <button className="gettrailbtn">Get Trail</button>
            </div>
            </div>
            <div className="cont3">
                <div className="from">
                <div className="inputform">
                    <div className="mail-img">
                        <img src=""/>
                    </div>
                    <input type="email" placeholder="@mail.com" className="email"/>
                </div>

                 <div className="inputform">
                    <div className="mail-img">
                        <img src=""/>
                    </div>
                    <input type="pasword" placeholder="Password" className="email"/>
                </div>
                <button className="submit">Submit</button>
                </div>
            </div>

        </div>
    )
}
export default Content;