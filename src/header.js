import React, { useState } from 'react';
import Logo from "./fithublogo.png";
import Location from "./location.png";
import { Link } from "react-router-dom";
import "./header.css";
import menuopen from "./menuopen.png";
import menuclose from "./menucolse.png";


const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className='head'>
        <div className='location-div'>
          <div className='location'><img src={Location} alt='location' /></div>
          <p>Vizag, India</p>
        </div>

        <div className='nav-bar'>
          <div className='logo-img'><img src={Logo} alt='Logo' /></div>

          <input type='text' placeholder='Find the best one' className='search' />

          <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? <div className='menu'><img src={menuclose} /></div> : <div className='menu'><img src={menuopen} /></div>}
          </div>

          <div className='menu-bar desktop'>
            <Link to="/" className='link'>Home</Link>
            <Link to="/plains" className='link'>Plans</Link>
            <Link to="/validity" className='link'>Validity</Link>
            <Link to="/contactus" className='link'>Contact us</Link>
            <Link to="/profile" className='link'>Profile</Link>
            <Link to="/login" className='link login'>Login</Link>
          </div>
        </div>

        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className='link' onClick={closeMenu}>Home</Link>
          <Link to="/plains" className='link' onClick={closeMenu}>Plans</Link>
          <Link to="/validity" className='link' onClick={closeMenu}>Validity</Link>
          <Link to="/contactus" className='link' onClick={closeMenu}>Contact us</Link>
          <Link to="/profile" className='link' onClick={closeMenu}>Profile</Link>
          <Link to="/login" className='link' onClick={closeMenu}>Login</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
