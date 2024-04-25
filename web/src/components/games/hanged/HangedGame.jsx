import { useState, useEffect } from 'react';
import '../../../scss/layout/HangedGame.scss';
import dataBD from '../../../services/dataBD';
import Dummy from './Dummy';
import SolutionLetters from '../../SolutionLetters';
import ErrorLetters from './ErrorLetters';

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
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <SolutionLetters renderSolutionLetters={renderSolutionLetters} />
          <ErrorLetters renderErrorLetters={renderErrorLetters} />
          <form className="form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
              onChange={inputLetter}
            />
          </form>
          {gameMsg ? <p>{gameMsg}</p> : null}
        </section>
        <Dummy numberOfErrors={numberOfErrors} />
      </main>
    </div>
  );
}

export default HangedGame;
