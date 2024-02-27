import gif from '../../images/ravenclawGif.gif';

function Ravenclaw() {
  return (
    <article className="house__art">
      <img src={gif} alt="" className="house__art--gif" />
      <div className="house__art--text">
        <h4>Bienvenido/a a Ravenclaw</h4>
        <p>
          Los Ravenclaw son individuos curiosos y ávidos de conocimiento,
          siempre en busca de nuevos desafíos intelectuales. Valoran la
          sabiduría y la originalidad, destacando por su capacidad para resolver
          problemas complejos y pensar de manera innovadora. Son personas que
          disfrutan explorando diferentes áreas del conocimiento y tienen una
          mente analítica y crítica. A menudo, se destacan en el ámbito
          académico y tienen una pasión por descubrir nuevas ideas y conceptos.
          Los Ravenclaw también valoran la individualidad y la autonomía,
          apreciando el tiempo dedicado a la reflexión y la contemplación.
        </p>
      </div>
    </article>
  );
}

export default Ravenclaw;
