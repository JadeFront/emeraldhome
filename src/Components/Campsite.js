import React from 'react'
import './Campsite.css'

const Campsite = () => {
  return (
    <div className='campsite-container'>

            <div className='campsite'>
                <img src='./images/campsite.jpg' alt='campsite'/>
                <div className='campsite-text'>
                    <h1>Emerald Campsite</h1>
                    <h5>Tired or stressed in city life? Camping Is Therapy, come and relax with us with nature at Emerald campsite.</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Nulla cursus eros eu leo ullamcorper, sodales 
                        gravida mauris sodales. Curabitur convallis et eros 
                        eget pretium.</p>
                    <div className='campsite-button'>
                        <button className='book'>Book now</button>
                        <button className='reserve'>Reserve now</button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Campsite