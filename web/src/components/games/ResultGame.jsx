import ConfettiLayout from '../Reusable/ConfettiLayout';

function ResultGame({ winner, setWinner, restartGame, endGame, setEndGame }) {
  return (
    <section
      className={winner ? 'resultGame' : endGame ? 'resultGame' : 'hidden'}
    >
      {winner ? (
        <article className="resultGame__text">
          <ConfettiLayout />
          <i
            className="fa-solid fa-xmark resultGame__close"
            onClick={() => setWinner(false)}
          ></i>
          <h3>¡Enhorabuena, has ganado!</h3>
          <p>
            ¡¿La magia está de tu lado o tal vez has utilizado un hechizo
            confundus a tu contrincante?!
          </p>
          <button className="resultGame__btn" onClick={restartGame}>
            Nueva partida
          </button>
        </article>
      ) : endGame ? (
        <article className="resultGame__text">
          <i
            className="fa-solid fa-xmark resultGame__close"
            onClick={() => setEndGame(false)}
          ></i>
          <h3>¡Lo siento mucho, has perdido!</h3>
          <p>
            Quizás con un sorbito de Felix Felicis la cosa cambie la próxima
            vez. ¡No desistas!
          </p>
          <button className="resultGame__btn" onClick={restartGame}>
            Nueva partida
          </button>
        </article>
      ) : null}
    </section>
  );
}

export default ResultGame;
