// src/Button.js
import React from 'react';
import './Button.css';
import CircleButton from './circleButton';

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

      
      <button onClick={() => ButtonhandleClick("ClickToPayButton")} className="button">
     CLICK TO PAY
      </button>
  
    

     <button onClick={() => ButtonhandleClick("ClickToPay|$$$")} className="button">

    CLICK TO PAY|$$$
      </button>
   
      <div className='button__Container'>
      <CircleButton />
      <button onClick={() => ButtonhandleClick("SwipeToPayButton")} className="Second__button">
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
  );
};

export default Button;
