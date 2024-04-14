
import React, { useState } from 'react';
import '../styles/Login.css';

import axios from 'axios'; // Import Axios for making HTTP requests


function Register() {
   
    const [playerName, setPlayerName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/auth/createuser', {
                name: playerName,
                email: email,
                password: password
            });
            const { authtoken } = response.data;
            setSuccessMessage('Account created successfully. Please login.');
            window.location.href = '/login';
        } catch (error) {
            console.error('Error during registration:', error);
            setErrorMessage('An error occurred during registration. Please try again later.');
        }
    };

  

    return (
        <div className='completebody'>
            {successMessage && (
                <div className="success-message">
                    {successMessage}
                </div>
            )}

            <div className='contactback'>
            <div className='flexwidth1'>
            <div className='flexcontact'>
                <h1 className='contactpages'>Sign Up </h1>



<form className='formflex' onSubmit={handleSubmit}>
  
    <div  className='form-group'>
    <input
            type='Text'
            id='PlayerName'
            placeholder='Player Name'
            required
            name='PlayerName'
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}

        />
        </div>
<div  className='form-group'>
        <input
            type='email'
            id='email'
            placeholder='Email Address'
            required
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

    </div>
    <div className='form-group'>
        <input
            type='password'
            placeholder='Password'
            id='password'
            required
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

    </div>
  
    <button type='submit'>Create an Account</button>
    <div className='hrbar'>
        <hr />
        <p>or</p>
        <hr />
    </div>
    <center style={{fontFamily:"Avenir"}}> <a href="/Login" style={{textDecoration:"none", color:'white'}}>Go back to login</a>  </center>
  
</form>





      </div>
        </div>  
            </div>

         
    </div>
    );
}

export default Register;


