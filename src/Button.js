// src/Button.js
import React from 'react';
import './Button.css';
import CircleButton from './circleButton';
import SmallCircleButton from './smallCircle';

const Button = () => {
  const ButtonhandleClick = (buttonLabel) => {
    alert(`You clicked on "${buttonLabel}" button!`);
  };

  const buttonsData = [
    { label: 'ClickToPayButton', onClick: ButtonhandleClick },
    { label: 'SwipeToPayButton', onClick: ButtonhandleClick },
    { label: 'ClickToPay|$$$', onClick: ButtonhandleClick },
    { label: 'SwipeToPay|$$$', onClick: ButtonhandleClick },
  ];

  return (
    <div className='container'>

   
      <div className='inner_Container'>
      <button onClick={() => ButtonhandleClick("ClickToPayButton")} className="button ">
      <SmallCircleButton /> CLICK TO PAY   
      </button>
     <button onClick={() => ButtonhandleClick("ClickToPay|$$$")} className="button">

     <SmallCircleButton /> CLICK TO PAY|$$$    
      </button>
  </div>
   
      <div className='inner__Container1'>
      <div className='button__Container'>
      <CircleButton />
      <button onClick={() => ButtonhandleClick("SwipeToPayButton")} className="Second__button " id='btn_space'>
        SWIPE TO PAY
      </button>
     </div>
     <div className='button__Container'>
      <CircleButton />
      <button onClick={() => ButtonhandleClick("SwipeToPay|$$$")} className="Second__button">
        SWIPE TO PAY|$$$
      </button>
      </div>
    </div>
    </div>
  );
};

export default Button;
