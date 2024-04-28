import RavenclawGif from '../../images/RavenclawGif.gif';
import HouseWin from '../Reusable/HouseWin';

function Ravenclaw() {
  return (
    <HouseWin
      gif={RavenclawGif}
      welcome="Bienvenido/a a Ravenclaw"
      text=" Los Ravenclaw son individuos curiosos y ávidos de conocimiento,
    siempre en busca de nuevos desafíos intelectuales. Valoran la
    sabiduría y la originalidad, destacando por su capacidad para resolver
    problemas complejos y pensar de manera innovadora. Son personas que
    disfrutan explorando diferentes áreas del conocimiento y tienen una
    mente analítica y crítica. A menudo, se destacan en el ámbito
    académico y tienen una pasión por descubrir nuevas ideas y conceptos.
    Los Ravenclaw también valoran la individualidad y la autonomía,
    apreciando el tiempo dedicado a la reflexión y la contemplación."
    />
  );
}

export default Ravenclaw;
