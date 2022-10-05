import React from 'react'
import CardItem from '../cardItem/CardItem'
import './Cards.css'

function cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__item'>
                    <CardItem
                        src="../../images/img-9.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle."
                        label="Adventure"
                        path="/services"
                    />
                    <CardItem
                        src="../../images/img-2.jpg" 
                        text="Travel through the Islands of Bali in a Private Cruise"
                        label="Luxury"
                        path="/services"
                    />
                </ul>
                <ul className='cards__item'>
                    <CardItem
                        src="../../images/img-9.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle."
                        label="Adventure"
                        path="/services"
                    />
                    <CardItem
                        src="../../images/img-2.jpg" 
                        text="Travel through the Islands of Bali in a Private Cruise"
                        label="Luxury"
                        path="/services"
                    />
                    <CardItem
                        src="../../images/img-2.jpg" 
                        text="Travel through the Islands of Bali in a Private Cruise"
                        label="Luxury"
                        path="/services"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default cards