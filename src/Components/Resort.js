import React from 'react'
import './Resort.css'

const Resort = () => {
  return (
    <div className='resort-container'>
        <div className='resort'>
            <div className='resort-intro'>
                <h1>Long weekend?</h1>
                <h3>Experience the relaxing view in our beach resorts and campsites.</h3>
            </div>

            <div className='beach-container'>
                <img src='./images/beach.jpg' alt='beach'/>
                <div className='beach-text'>
                    <h1>Emerald Beach Resort</h1>
                    <h5>Tired in life or stressed in work? Salt water heals 
                        everything come and visit our beach resorts.</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Nulla cursus eros eu leo ullamcorper, sodales 
                        gravida mauris sodales. Curabitur convallis et eros 
                        eget pretium.</p>
                    <div className='beach-button'>
                        <button className='book'>Book now</button>
                        <button className='reserve'>Reserve now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resort