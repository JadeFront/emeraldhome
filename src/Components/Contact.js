import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>

        <div className='contact'>
            <div className='contact-text'>
                <h1>Get in Touch</h1>
                <h2>Tell us what's on your mind.</h2>
                <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. 
                    Fusce magna eros, vestibulum 
                    sollicitudin aliquam eget, 
                    lobortis a ex. Vivamus laoreet 
                    purus justo, ut pretium urna 
                    gravida quis.</p>
            </div>
        <form className='contact-form'>
            <h1>Message us</h1>
            <input type='text' placeholder='Enter Name'/>
            <input type='email' placeholder='Enter Email'/>
            <textarea placeholder='Suggestion or Concern'/>
            <button>Send</button>
        </form>
        </div>
    </div>
  )
}

export default Contact