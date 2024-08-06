
import styleform from './Form.scss'
import emailjs from '@emailjs/browser'
import React, { useRef } from 'react'


export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('corpmail', 'template_corpv1', form.current, {
        publicKey: 'b2ABRC_cJ4kljADtl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return (
      
      
       <form ref={form} onSubmit={sendEmail} className='form' >
           
            <label>Email</label>
            <input type="email" name="user_email" placeholder='adresse mail' />
            <label>Message</label>
            <textarea name="message" placeholder='Message' />
            <input type="submit" value="Send" id='input-submit' />
        </form>
      

        

    );
    } 

    export default Form;
        
        
