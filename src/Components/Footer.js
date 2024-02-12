import React from 'react'
import './Footer.css'
import { FaFacebookSquare, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareInstagram, FaSquareThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='footer-container'>
            <div className='footer-title'>
                <h1>EMERALD HOMES</h1>
            </div>

            <div className='footer-content'>

            <div className='footer-about'>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Fusce magna eros, 
                    vestibulum sollicitudin aliquam eget, 
                    lobortis a ex. Vivamus laoreet purus 
                    justo, ut pretium urna gravida quis</p>
            </div>

            <div className='footer-socials'>
                <h1>Socials</h1>
                <a href='#'><FaFacebookSquare /></a>
                <a href='#'><FaSquareXTwitter /></a>
                <a href='#'><FaSquareInstagram /></a>
                <a href='#'><FaSquareThreads /></a>
                <a href='#'><FaYoutube /></a>
                <a href='#'><FaTiktok /></a>
            </div>

            <div className='footer-service'>
                <h1>Service</h1>
                <a href='#'>House and Lot</a>
                <a href='#'>Apartment</a>
                <a href='#'>Condominium</a>
                <a href='#'>Resort</a>
                <a href='#'>Campsite</a>
            </div>

            <div className='footer-navigation'>
                <h1>Navigation</h1>
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Service</a>
                <a href='#'>Contact</a>
            </div>
        </div>

        <div className='footer-end'>
            <a href='#'>Privacy Policy</a>
            <a href='#'>Terms and Conditionss</a>
            <p>Copyright &#169; Emerald Home &#124; 2024 All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer