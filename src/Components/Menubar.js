import React from 'react'
import './Menubar.css'
import { FaBars } from "react-icons/fa";

const Menubar = () => {
  return (
    <nav className='nav-container'>
        <div className='nav-logo'>
            <h1>EmeraldHomes</h1>
        </div>

        <input type='checkbox' id='check'/>
        <label htmlFor='check' id='checked'><p><FaBars /></p></label>

        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Service</a></li>
            <li><a href='#'>Contact</a></li>
            
        <div className='nav-button'>
            <button className='nav-contact'>Contact</button>
            <button className='nav-reserve'>Reserve now</button>
        </div>
        </ul>

    </nav>
  )
}

export default Menubar