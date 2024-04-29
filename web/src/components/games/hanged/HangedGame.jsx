import '../../../scss/layout/HangedGame.scss';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Result from './Result';
import LandingGames from '../LandingGames';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ReturnBtn from '../../Reusable/ReturnBtn';
import Instructions from '../Instructions';
import ResultGame from '../ResultGame';

function HangedGame({
  word,
  numberOfErrors,
  renderSolutionLetters,
  renderErrorLetters,
  inputLetter,
  lastLetter,
  gameMsg,
  restartGame,
  winner,
}) {
  const [instruc, setInstruc] = useState(false);
  const handleInstructions = () => {
    setInstruc(!instruc);
  };

  return (
    <div className="hangedGame">
      <ReturnBtn url="/games" text="Volver a juegos" />
      <section className="hangedGame__panel">
        <div className="modalMsg">
          <h1 className="hangedGame__title">Juego del ahorcado</h1>
          <SolutionLetters renderSolutionLetters={renderSolutionLetters} />
          <ErrorLetters renderErrorLetters={renderErrorLetters} />
          <form className="hangedGame__form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              autoComplete="off"
              className="hangedGame__form--input"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
              onChange={inputLetter}
            />
          </form>
          {gameMsg ? (
            <p className="hangedGame__msg">
              --{'>'} {gameMsg} {'<'}--
            </p>
          ) : null}
        </div>
        <Dummy numberOfErrors={numberOfErrors} />
      </section>
      <Instructions
        handleInstructions={handleInstructions}
        instruc={instruc}
        juego="El ahorcado"
        text1=" El objetivo del juego es adivinar la palabra antes de que el muñeco se
        complete el dibujo del muñeco ahorcado. Para ello, deberás adivinar cada
        letra hasta completar la palabra."
        text2="  En esta versión del juego, cada palabra está relacionada con el mundo de
        Harry Potter, desde nombres de personajes, utensilios mágicos, lugares,
        hechizos... ¿Serás capaz de adivinar la palabra antes de que el muñeco
        termine ahorcado?"
      />
      <ResultGame winner={winner} />
      <aside className="gameOptions">
        <button className="gameOptions__btn" onClick={handleInstructions}>
          Instrucciones
        </button>
        <button className="gameOptions__btn" onClick={restartGame}>
          Reiniciar partida
        </button>
      </aside>
    </div>
  );
}

export default HangedGame;
