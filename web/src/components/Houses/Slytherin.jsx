import SlytherinGif from '../../images/SlytherinGif.gif';
import HouseWin from '../Reusable/HouseWin';

function Slytherin() {
  return (
    <HouseWin
      gif={SlytherinGif}
      welcome="Bienvenido/a a Slytherin"
      text="           Las personas de Slytherin destacan por su astucia, determinación y
    ambición. Son personas que valoran el ingenio, la determinación para
    lograr sus metas y la búsqueda de su propio beneficio. A menudo son
    percibidas como líderes natos, dispuestas a hacer lo que sea necesario
    para alcanzar el éxito, aunque eso signifique tomar decisiones
    difíciles o cuestionables. También tienden a ser muy selectivas en
    cuanto a sus amistades y a tener un fuerte sentido de lealtad hacia
    aquellos que consideran dignos.
"
    />
  );
}

export default Slytherin;
