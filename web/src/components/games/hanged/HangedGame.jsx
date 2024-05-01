import '../../../scss/layout/HangedGame.scss';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import ReturnBtn from '../../Reusable/ReturnBtn';
import Instructions from '../Instructions';
import ResultGame from '../ResultGame';
import FooterGames from '../FooterGames';

function HangedGame({
  word,
  userLetters,
  numberOfErrors,
  renderSolutionLetters,
  renderErrorLetters,
  inputLetter,
  lastLetter,
  gameMsg,
  restartGame,
  winner,
  setWinner,
  handleInstructions,
  instruc,
  endGame,
  setEndGame,
}) {
  return (
    <div className="hangedGame">
      <ReturnBtn url="/games" text="Volver a juegos" />
      <section className="hangedGame__panel">
        <div className="modalMsg">
          <h1 className="hangedGame__title">Juego del ahorcado</h1>
          <SolutionLetters
            word={word}
            userLetters={userLetters}
            setWinner={setWinner}
            renderSolutionLetters={renderSolutionLetters}
          />
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
        text1=" El objetivo del juego es adivinar la palabra antes de que se
        complete el dibujo del muñeco ahorcado. Para ello, deberás adivinar cada
        letra hasta completar la palabra."
        text2="  En esta versión del juego, cada palabra está relacionada con el mundo de
        Harry Potter, desde nombres de personajes, utensilios mágicos, lugares,
        hechizos... ¿Serás capaz de adivinar la palabra antes de que el muñeco
        termine ahorcado?"
      />
      <ResultGame
        endGame={endGame}
        setEndGame={setEndGame}
        winner={winner}
        setWinner={setWinner}
        restartGame={restartGame}
      />
      <FooterGames
        handleInstructions={handleInstructions}
        resetGame={restartGame}
      />
    </div>
  );
}

export default HangedGame;
