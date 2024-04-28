function Instructions({ juego, text1, text2 }) {
  return (
    <div className="gameInstructions ">
      <div className="gameInstructions__text ">
        <h3>{juego}</h3>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
}

export default Instructions;
