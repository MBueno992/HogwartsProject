import Instructions from '../Instructions';
import Snape from '../../../images/snape.png';
import Nagini from '../../../images/nagini.png';
import Neville from '../../../images/neville.png';
import '../../../scss/layout/RockPaper.scss';
import '../../../scss/layout/Games.scss';
import ResultGame from '../ResultGame';
import ReturnBtn from '../../Reusable/ReturnBtn';
import FooterGames from '../FooterGames';
import { useEffect } from 'react';
import ScoreBoard from './ScoreBoard';

function RockPaperScissors({
  computerMove,
  pcOption,
  userOption,
  setUserOption,
  pcScore,
  playerScore,
  msgResult,
  handleInstructions,
  instruc,
  restart,
  winner,
  setWinner,
  gameRules,
  endGame,
  setEndGame,
}) {
  const select = {
    Neville: Neville,
    Snape: Snape,
    Nagini: Nagini,
  };
  useEffect(() => {
    gameRules();
  }, [userOption]);

  const handleOption = (ev) => {
    setUserOption(ev.target.id);
    computerMove();
    // gameRules();
  };

  return (
    <div className="game">
      <ReturnBtn url="/games" text="Volver a juegos" />
      <section className="rockPaper">
        <h1 className="rockPaper__title">Snape, Neville o Nagini</h1>

        <div className="rockPaper__options" onClick={handleOption}>
          <img src={Snape} alt="Severus Snape" id="Snape" />
          <img src={Neville} alt="Neville Longbottom" id="Neville" />
          <img src={Nagini} alt="Nagini" id="Nagini" />
        </div>
        <div className="rockPaper__games">
          <article className="rockPaper__games--player">
            {userOption ? (
              <img src={select[userOption]} alt={userOption} />
            ) : null}
            <h3>Tu elección</h3>
          </article>
          <i className="fa-solid fa-bolt ray"></i>
          <article className="rockPaper__games--player">
            {pcOption ? <img src={select[pcOption]} alt={pcOption} /> : null}
            <h3>Mago tenebroso</h3>
          </article>
        </div>
        <ScoreBoard
          msgResult={msgResult}
          playerScore={playerScore}
          pcScore={pcScore}
        />
      </section>
      <Instructions
        handleInstructions={handleInstructions}
        instruc={instruc}
        juego="Snape, Neville o Nagini"
        text1="El primero en llegar a 5 puntos gana la partida."
        text2="Las reglas son muy similares al clásico piedra, papel o tijera, ¿serás capaz de vencer al mago tenebroso?:"
        text3={
          <ul>
            <li>Snape castiga a Neville.</li>
            <li>Neville vence a Nagini.</li>
            <li>Nagini mata a Snape.</li>
          </ul>
        }
      />
      <ResultGame
        endGame={endGame}
        setEndGame={setEndGame}
        winner={winner}
        setWinner={setWinner}
        restartGame={restart}
      />
      <FooterGames
        handleInstructions={handleInstructions}
        resetGame={restart}
      />
    </div>
  );
}

export default RockPaperScissors;
