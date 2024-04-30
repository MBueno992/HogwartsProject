import '../../scss/layout/Games.scss';
import imgHangman from '../../images/hangedGame.jpeg';
import imgRockPaper from '../../images/rockpaper.jpeg';
import imgMemo from '../../images/memoGame.jpeg';

import CardGames from './CardGames';

function LandingGames({ style }) {
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
        <CardGames
          url="/construction"
          img={imgMemo}
          gameTitle="Memory"
          desc="Pon a prueba tu mente y encuentra las diferentes parejas que se esconden bajo las cartas. ¿Podrás hacerlo o te habrán lanzado un hechizo obliviate?"
        />
      </ul>
    </section>
  );
}

export default LandingGames;
