import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
import { useRef } from 'react';

const Contact = () => {
        const form = useRef();

        const {done, setDone} = useState(false);
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
        };


  return (
    <div className='contact'>
        <div className='n-left'>
            <div className='awesome'>
                <span>Get in touch</span>
                <span>Contact me</span>
                <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
            </div>
        </div>

        <div className='n-right'>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className='user' placeholder='Name'/>
                <input type="email" name="user_email" className='user' placeholder='Email'/>
                <textarea type="message"  className='user' placeholder='Message'/>
                <input type="submit" value='send' className='button'/>
                <span>{done && "Thanks for contacting me!"}</span>
                <div className='blur c-blur1' style={{background: "var(--purple"}}></div>
            </form>
        </div>
    </div>


  )
}

export default Contact