import React from 'react'
import './Property.css'

const Property = () => {

    const property = [
        {
            img: './images/condo.jpg',
            name: 'Condominium',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis nulla orci, consectetur consectetur odio accumsan in. Integer hendrerit est fringilla ipsum varius tincidunt.'
        },
        {
            img: './images/apartment.jpg',
            name: 'Apartment',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis nulla orci, consectetur consectetur odio accumsan in. Integer hendrerit est fringilla ipsum varius tincidunt.'
        },
        {
            img: './images/house.jpg',
            name: 'House and Lot',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis nulla orci, consectetur consectetur odio accumsan in. Integer hendrerit est fringilla ipsum varius tincidunt.'
        }
    ]

  return (
    <div className='property-container'>
        <div className='property-intro'>
            <h1>EMERALD HOMES RESIDENTIAL COLLECTIONS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Integer a arcu ultrices,
                sagittis arcu sit amet, bibendum sapien. 
                Cras sollicitudin lacinia est et semper.</p>
        </div>

        <div className='outer'>
        {property.map((home) => (
            <div className='inner'>
                <img src={home.img} alt='property'/>
                <h4>{home.name}</h4>
                <p>{home.description}</p>
                <button>see more</button>
            </div>
        ))}
        </div>
        
    </div>
  )
}

export default Property