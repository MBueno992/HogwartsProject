import { useState, useEffect } from 'react';
import '../../../scss/layout/HangedGame.scss';
import dataBD from '../../../services/dataBD';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Result from './Result';

function HangedGame({
  word,
  numberOfErrors,
  renderSolutionLetters,
  renderErrorLetters,
  inputLetter,
  lastLetter,
  gameMsg,
}) {
  return (
    <div>
      <div className="hangedGame">
        <section className="hangedGame__panel">
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
              maxLength="1"
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
        </section>
        <Dummy numberOfErrors={numberOfErrors} />
      </div>
    </div>
  );
}

export default HangedGame;
