import '../../../scss/layout/HangedGame.scss';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Result from './Result';
import LandingGames from '../LandingGames';
import { Link } from 'react-router-dom';

function HangedGame({
  word,
  numberOfErrors,
  renderSolutionLetters,
  renderErrorLetters,
  inputLetter,
  lastLetter,
  gameMsg,
  restartGame,
}) {
  return (
    <div className="hangedGame">
      <Link to="/games" className="return">
        <i className="fa-solid fa-wand-sparkles"></i>
        Volver a juegos
      </Link>

      <section className="hangedGame__panel">
        <div>
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
      <aside className="gameOptions">
        <button className="gameOptions__btn">Instrucciones</button>
        <button className="gameOptions__btn" onClick={restartGame}>
          Reiniciar partida
        </button>
      </aside>
    </div>
  );
}

export default HangedGame;
