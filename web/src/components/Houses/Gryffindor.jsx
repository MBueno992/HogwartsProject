import gryffindorGif from '../../images/GryffindorGif.gif';
import Article from '../Reusable/Article';

function Gryffindor() {
  return (
    <Article
      gif={gryffindorGif}
      welcome="Bienvenido/a a Gryffindor"
      text="   Un Gryffindor destaca por ser valiente, audaz, decidido/a y tener un
    fuerte sentido del honor y la justicia. Son individuos que actúan con
    coraje frente a los desafíos y están dispuestos a defender lo que
    consideran correcto, sin importar las dificultades que puedan
    enfrentar. Los Gryffindor valoran la valentía y la lealtad, y están
    dispuestos a arriesgarlo todo por el bien común y por proteger a los
    más vulnerables. También son conocidos por su espíritu aventurero y su
    disposición para enfrentarse a los peligros con determinación y
    resolución."
    />
  );
}

export default Gryffindor;
