import { Link } from 'react-router-dom';
import '../../scss/layout/Games.scss';
import HangedGame from './hanged/HangedGame';
import imgHangman from '../../images/hangedGame.jpeg';
import { Sling as Hamburger } from 'hamburger-react';

function LandingGames({ style }) {
  const selectGame = {
    HangedGame: <HangedGame />,
  };

  return (
    <section className={`${!style ? 'gamesSection' : style}`}>
      <ul className="gamesSection__list">
        <li>
          <Link to="/hangedGame">
            <div className="flip-card">
              <div className="flip-card__inner">
                <div className="flip-card__inner--front">
                  <img src={imgHangman} alt="Ahorcado" />
                  <p className="title">Ahorcado</p>
                </div>
                <div className="flip-card__inner--back">
                  <p className="title">El juego del Ahorcado</p>
                  <p>
                    ¿Será un mago, un hechizo, tal vez un objeto muggle o un
                    lugar mágico? ¡Adivina la palabra oculta antes de que el
                    muñeco quede ahorcado!
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <div className="flip-card">
            <div className="flip-card__inner">
              <div className="flip-card__inner--front">
                <p className="title">3 en raya</p>
                <p>En proceso...</p>
              </div>
              {/* <div className="flip-card__inner--back">
                <p className="title">BACK</p>
                <p>Leave Me</p>
              </div> */}
            </div>
          </div>
        </li>
        <li>
          <div className="flip-card">
            <div className="flip-card__inner">
              <div className="flip-card__inner--front">
                <p className="title">Piedra, papel o tijera</p>
                <p>En proceso...</p>
              </div>
              {/* <div className="flip-card__inner--back">
                <p className="title">BACK</p>
                <p>Leave Me</p>
              </div> */}
            </div>
          </div>
        </li>
        <li>
          <div className="flip-card">
            <div className="flip-card__inner">
              <div className="flip-card__inner--front">
                <p className="title">¿Cuánto sabes de Hogwarts?</p>
                <p>En proceso...</p>
              </div>
              {/* <div className="flip-card__inner--back">
                <p className="title">BACK</p>
                <p>Leave Me</p>
              </div> */}
            </div>
          </div>
        </li>
      </ul>
      {/* {selectGame[game]} */}
    </section>
  );
}

export default LandingGames;
