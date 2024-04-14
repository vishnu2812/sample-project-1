
import React, { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

import axios from 'axios';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if user is logged in when component mounts
        const authToken = localStorage.getItem('authToken');
        console.log('authToken:', authToken);
        if (authToken) {

            setIsLoggedIn(true);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/auth/login', { email, password });
            // Assuming your backend returns success and authtoken
            const { success, authtoken } = response.data;
            if (success) {
                localStorage.setItem('authToken', authtoken);
                setSuccessMessage('Login successful');
                // Here you can do further actions like redirecting to another page
                navigate('/Donate');
            } else {
                setErrorMessage('Login failed. Please try again with correct credentials.');
            }
            
        } catch (error) {
            console.error('Error during login:', error);
            setErrorMessage('An error occurred during login. Please try again later.');
        }
    };
 
    if (isLoggedIn) {
        // Redirect logged-in users to the home page
        navigate('/');
        return null; // Avoid rendering the login form
    }

    return (
        <div className='completebody'>
            {successMessage && (
                <div className="success-message">
                    {successMessage}
                </div>
            )}
            {errorMessage && (
                <div className="error-message">
                    {errorMessage}
                </div>
            )}

            <div className='contactback'>
            <div className='flexwidth1'>
            <div className='flexcontact'>
                <h1 className='contactpages'>Login To Your Account </h1>



<form className='formflex' onSubmit={handleSubmit}>
  
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
  
    <button type='submit'>Submit</button>
    <div className='hrbar'>
        <hr />
        <p>or</p>
        <hr />
    </div>
    <center style={{fontFamily:"Avenir"}}> <a href="/register" style={{textDecoration:"none", color:"white"}}>Sign Up</a> </center>
  
</form>





      </div>
        </div>  
            </div>

          
    </div>
    );
}

export default Login;


