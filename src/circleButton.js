import React from 'react'
import './Button.css';
import Image from './assets/images/Vector.png'

const CircleButton = () => {
  return (
      <>
          <div className='inner__circle'>
              <button className='circle__button'>
              <img src={Image} alt='Vector' className='vector__image' />
              </button>
    </div>
      
      
      </>
  )
}

export default CircleButton