import { useState } from 'react';

function Instructions({ juego, text1, text2, instruc, handleInstructions }) {
  return (
    <div className={instruc ? 'gameInstructions ' : 'hiddenGame'}>
      <div className="gameInstructions__text ">
        <i
          className="fa-solid fa-xmark gameInstructions__close"
          onClick={handleInstructions}
        ></i>
        <h3>{juego}</h3>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
}

export default Instructions;
