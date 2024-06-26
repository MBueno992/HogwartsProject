import hufflepuffGif from '../../images/HufflepuffGif.gif';
import HouseWin from '../Reusable/HouseWin';

function Hufflepuff() {
  return (
    <HouseWin
      gif={hufflepuffGif}
      welcome="¡Eres un/a auténtico/a Hufflepuff!"
      text="  Los miembros de Hufflepuff valoran la igualdad, la amistad y las
    relaciones duraderas. Son personas leales que están dispuestas a
    ayudar a los demás sin esperar nada a cambio. Tienen un fuerte sentido
    de la justicia y valoran la honestidad y la modestia. Los Hufflepuff
    son trabajadores incansables, dispuestos a esforzarse al máximo para
    alcanzar sus metas y ayudar a quienes los rodean. Son amables y
    acogedores, creando un ambiente cálido y amistoso donde todos se
    sienten bienvenidos. A menudo se les subestima, pero su verdadera
    fortaleza radica en su capacidad para perseverar y mantenerse fieles a
    sus valores incluso en tiempos difíciles."
    />
  );
}

export default Hufflepuff;
