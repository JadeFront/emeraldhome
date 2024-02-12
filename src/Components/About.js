import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about-container'>
        <div className='about'>
            <div className='about-image'>
                <img src='./images/home4.jpg' alt='home image'/>
            </div>
            <div className='about-intro'>
                <h1>About us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Sed ac consectetur magna. 
                    Ut vel viverra metus, nec convallis mi. 
                    Nam tempus eu nibh ut ullamcorper. Nulla 
                    pretium tempor laoreet. Curabitur sed 
                    commodo felis. Cras feugiat lectus dui, 
                    blandit hendrerit massa finibus eget. 
                    Quisque arcu turpis, tempus ut neque non, 
                    ultrices vulputate massa. Phasellus eu 
                    mauris dictum urna dignissim laoreet. 
                    Mauris non pellentesque metus, vitae 
                    scelerisque eros. Quisque efficitur mi 
                    commodo, aliquam tortor sit amet, condimentum 
                    ipsum.</p>
            </div>
        </div>
    </div>
  )
}

export default About