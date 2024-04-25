import { Link } from 'react-router-dom';
import '../../scss/layout/Games.scss';
import HangedGame from './hanged/HangedGame';

function LandingGames() {
  const selectGame = {
    HangedGame: <HangedGame />,
  };

  return (
    <section className="gamesSection">
      <ul className="gamesSection__list">
        <li>
          <Link to="/hangedGame">
            <div className="flip-card">
              <div className="flip-card__inner">
                <div className="flip-card__inner--front">
                  <p className="title">Ahorcado</p>
                  <p>Hover Me</p>
                </div>
                <div className="flip-card__inner--back">
                  <p className="title">BACK</p>
                  <p>Leave Me</p>
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
                <p>Hover Me</p>
              </div>
              <div className="flip-card__inner--back">
                <p className="title">BACK</p>
                <p>Leave Me</p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="flip-card">
            <div className="flip-card__inner">
              <div className="flip-card__inner--front">
                <p className="title">Piedra, papel o tijera</p>
                <p>Hover Me</p>
              </div>
              <div className="flip-card__inner--back">
                <p className="title">BACK</p>
                <p>Leave Me</p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="flip-card">
            <div className="flip-card__inner">
              <div className="flip-card__inner--front">
                <p className="title">¿Cuánto sabes de Hogwarts?</p>
                <p>Hover Me</p>
              </div>
              <div className="flip-card__inner--back">
                <p className="title">BACK</p>
                <p>Leave Me</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      {/* {selectGame[game]} */}
    </section>
  );
}

export default LandingGames;
