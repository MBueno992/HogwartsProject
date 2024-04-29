import '../../scss/layout/Games.scss';
import HangedGame from './hanged/HangedGame';
import imgHangman from '../../images/hangedGame.jpeg';
import imgRockPaper from '../../images/rockpaper.jpeg';

import CardGames from './CardGames';

function LandingGames({ style }) {
  const selectGame = {
    HangedGame: <HangedGame />,
  };

  return (
    <section className={`${!style ? 'gamesSection' : style}`}>
      <ul className="gamesSection__list">
        <CardGames
          url="/hangedGame"
          img={imgHangman}
          gameTitle="El ahorcado"
          desc="  ¿Será un mago, un hechizo, tal vez un objeto muggle o un lugar
                mágico? ¡Adivina la palabra oculta antes de que el muñeco quede
                ahorcado!"
        />
        <CardGames
          url="/rockpaper"
          img={imgRockPaper}
          gameTitle="Snape, Neville o Nagini"
          desc="  ¿Conoces el juego piedra, papel o tijera? Te traigo la versión de Harry Potter ¿Serás capaz de ganar la partida?"
        />

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
