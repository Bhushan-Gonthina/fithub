import React from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Home from './Home';
import Header from './header';
import Contactus from './contactas';
import Login from './login';
import Pheader from "./plans/plans-header";
import Profile from './profile';
import Validity from './validity';
import Mengym from './plans/mengym';
import Womengym from './plans/womengym';



function App() {
  return (<>
  
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/plains" element={<Pheader/>}/>
       <Route path='/validity' element={<Validity/>}/>
       <Route path="/contactus" element={<Contactus/>}/>
       <Route path="/profile" element={<Profile/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path='mengym' element={<Mengym/>}/>
       <Route path="womengym" element={<Womengym/>}/>

       
    </Routes>
    </>
  );
}

export default App;
