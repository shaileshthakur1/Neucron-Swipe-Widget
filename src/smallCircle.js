import React from 'react'
import './Button.css';
import Image from './assets/images/Vector.png'

const SmallCircleButton = () => {
  return (
      <>
          <div className='inner__small__circle'>
              <button className='Inner__circle__button'>
              <img src={Image} alt='Vector' className='vector__small__image' />
              </button>
    </div>
      
      
      </>
  )
}

export default SmallCircleButton;