import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo.png';
import '../styles/Nav.css';

function Navbar() {
  const location = useLocation();

  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [authToken, setAuthToken] = useState(null);  

  useEffect(() => {
    // Fetch user name when component mounts
    fetchUserName();
    const authToken = localStorage.getItem('authToken');
    setAuthToken(authToken);
  });

  const fetchUserName = async () => {
    try {
      // Get auth token from local storage
      if (!authToken) {
        console.log('Auth token not found'); // Log a message if auth token is not found
        return; // Return early if auth token is not found
      }
      // Make a GET request to fetch user name
      const response = await axios.get('http://localhost:3000/api/auth/getusername', {
        headers: {
          "auth-token": authToken, // Include auth token in the header
        },
      });
      
      // Set user name in state
      setUserName(response.data.name);
    } catch (error) {
      console.error(error.message);
    }
  };

  const logoutHandle = () => {
    localStorage.removeItem('authToken');
    window.location.reload()
  };

  // const profileClick = () => {
  //   if(profileDropdownOpen){
  //     setProfileDropdownOpen(false);
  //   }
  //   else{
  //     setProfileDropdownOpen(true);
  //   }
  // };

  return (
    <>
      <div className='size'>
        <div className='navcontainer'>
          <div className='logonav'>
            <img src={logo} alt="" className='img' />
            
          </div>

          <div className='navelements'>
            <Link to="/" className={`ssss nav-link nav-link-ltr${location.pathname === '/' ? ' active' : ''}`}> Home</Link>

            <Link to="/contact" className={`nav-link nav-link-ltr${location.pathname === '/contact' ? ' active' : ''}`}>Contact Us</Link>
            <Link to="/Donate" className={`nav-link nav-link-ltr${location.pathname === '/Donate' ? ' active' : ''}`}>Donate </Link>

            <Link to="/Login" className={`nav-link nav-link-ltr${location.pathname === '/Login' ? ' active' : ''}`}>Login</Link>


            {/* <Link to="/login" className={`nav-link nav-link-ltr${location.pathname === '/login' ? ' active' : ''}`}>Login</Link>
            <Link to="/register" className={`nav-link nav-link-ltr${location.pathname === '/register' ? ' active' : ''}`}>Signup</Link> */}
          </div>
          
      
        </div>
      </div>
    </>
  )
}

export default Navbar;
