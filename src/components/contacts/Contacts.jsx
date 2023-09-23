import React from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_zew9s6o', 'template_so9905b', form.current, 'R99Pxthk4eepyC_Vm')
    e.target.reset()
    
  }

  return (
    <section id='contacts'>

      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>smahmuddz@gmail.com</h5>
            <a href="mailto:smahmuddz@gmail.com">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>

         <input type="text" name="name" placeholder="Your Full Name" required />  {/* client side validation */}
         <input type="email" name='email' placeholder='Your Email' required /> 
         <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
         <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>    
    </section>
  )
}

export default Contacts