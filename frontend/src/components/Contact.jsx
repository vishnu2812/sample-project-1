
    import React, { useState } from 'react';
    import '../styles/Contact.css';


    function Contact() {
    

    

        return (
            <div className='completebody'>
           
              

                <div className='contactback'>
                <div className='flexwidth'>
                <div className='flexcontact'>
                    <h1 className='contactpages'>Contact Page</h1>



    <form className='formflex' action="https://formspree.io/f/xayrddwg" method="POST">
        <div className='form-group'>
            <input
                type='text'
                placeholder='Name'
                id='name'
                required
                name='name'
            />

        </div>
        <div  className='form-group'>
            <input
                type='email'
                id='email'
                placeholder='Email Address'
                required
                name='email'
            />

        </div>
        <div className='form-group'>
            <input
                type='tel'
                placeholder='Phone Number'
                id='phone'
                required
                name='phone'
            />

        </div>
        <div className='form-group'>
            <textarea
                id='message'
                placeholder='Write Your Message'
                rows='4'
                required
                name='message'
            />

        </div>
        <button type='submit'>Submit</button>
        <div className='hrbar'>
            <hr />
            <p>or</p>
            <hr />
        </div>

    </form>





        </div>
            </div>  
                </div>

          
        </div>
        );
    }

    export default Contact;


