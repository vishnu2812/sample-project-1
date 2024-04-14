import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo.png';
import '../styles/Nav.css';

function Navbar() {
  const location = useLocation();

  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));

  const logoutHandle = () => {
    localStorage.removeItem('authToken');
    window.location.reload();
  };

  return (
    <>
      <div className='size'>
        <div className='navcontainer'>
          <div className='logonav'>
          <a href="/"> <img src={logo} alt="" className='img' /></a> 
            <p>Little Heart Foundation </p>
          </div>

          <div className='navelements'>
            <Link to="/" className={`ssss nav-link nav-link-ltr${location.pathname === '/' ? ' active' : ''}`}> Home</Link>

            <Link to="/Donate" className={`nav-link nav-link-ltr${location.pathname === '/Donate' ? ' active' : ''}`}>Donate </Link>
            <Link to="/contact" className={`nav-link nav-link-ltr${location.pathname === '/contact' ? ' active' : ''}`}>Contact Us</Link>

            {authToken ? (
              <button onClick={logoutHandle} className="logout nav-link nav-link-ltr">Logout</button>
            ) : (
              <Link to="/Login" className={`nav-link nav-link-ltr${location.pathname === '/Login' ? ' active' : ''}`}>Login</Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
