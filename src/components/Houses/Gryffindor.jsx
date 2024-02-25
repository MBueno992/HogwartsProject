import gif from '../../images/gryffindorGif.gif';

function Gryffindor() {
  return (
    <article className="house__art">
      <img src={gif} alt="" className="house__art--gif" />
      <div className="house__art--text">
        <h4>Bienvenido/a a Gryffindor</h4>
        <p>
          Un Gryffindor destaca por ser valiente, audaz, decidido/a y tener un
          fuerte sentido del honor y la justicia. Son individuos que actúan con
          coraje frente a los desafíos y están dispuestos a defender lo que
          consideran correcto, sin importar las dificultades que puedan
          enfrentar. Los Gryffindor valoran la valentía y la lealtad, y están
          dispuestos a arriesgarlo todo por el bien común y por proteger a los
          más vulnerables. También son conocidos por su espíritu aventurero y su
          disposición para enfrentarse a los peligros con determinación y
          resolución.
        </p>
      </div>
    </article>
  );
}

export default Gryffindor;
