import "./plans-header.css";
import React, { useState } from "react";
import Mengym from "./mengym";
import Womengym from "./womengym";
import Yoga from "./yoga";
import Indoore from "./indoore";
import Outdoore from "./outdoore";
import Header from "../header";
import Footer from "../footer";


function Pheader() {
 let [active,setactive] = useState("mengym");

 let renderpage = () =>{
  switch(active){
    case "mengym":
      return <Mengym/>;
    case "womengym":
      return <Womengym/>;
    case "yoga":
      return<Yoga/>
    case "indoore":
      return <Indoore/>
    case "outdoore":
      return <Outdoore/>
      }
 }

 
 
  return (
    <>
    <Header/>
    <div className="plans-comp">
      <div className="plans-nav">
        <button onClick={() => setactive('mengym')} className="btn">Men Gym</button>
        <button onClick={() => setactive('womengym')}className="btn">Women Gym</button>
        <button onClick={() => setactive('yoga')}className="btn">Yoga</button>
        <button onClick={() => setactive('indoore')}className="btn">Indoor</button>
        <button onClick={() => setactive('outdoore')}className="btn">Outdoor</button>
        
      </div>
      {renderpage()}
    </div>
    <Footer/>
    </>
  );
}
export default Pheader;
