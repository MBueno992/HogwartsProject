import gif from '../../images/slytherinGif.gif';

function Slytherin() {
  return (
    <article className="house__art">
      <img src={gif} alt="" className="house__art--gif" />
      <div className="house__art--text">
        <h4>Bienvenido/a a Slytherin</h4>
        <p>
          Las personas de Slytherin destacan por su astucia, determinación y
          ambición. Son personas que valoran el ingenio, la determinación para
          lograr sus metas y la búsqueda de su propio beneficio. A menudo son
          percibidas como líderes natos, dispuestas a hacer lo que sea necesario
          para alcanzar el éxito, aunque eso signifique tomar decisiones
          difíciles o cuestionables. También tienden a ser muy selectivas en
          cuanto a sus amistades y a tener un fuerte sentido de lealtad hacia
          aquellos que consideran dignos.
        </p>
      </div>
    </article>
  );
}

export default Slytherin;
