import ministery from '../images/ministery.webp';
import '../scss/layout/Ministery.scss';

function Ministery({ click, input, text }) {
  const handleInput = (event) => {
    input(event.target.value);
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    click();
  };

  return (
    <section className="ministery">
      <article className="ministeryMsg">
        <img
          src={ministery}
          alt="Ministerio de Magia"
          className="ministeryMsg__img"
        />
        <div className="ministeryMsg__text">
          <h1 className="ministeryMsg__text--title minis">
            Ministerio de Magia
          </h1>
          <h2 className="ministeryMsg__text--subtitle">
            Departamento de educación mágica
          </h2>
          <p className="ministeryMsg__text--intro">
            Durante la Segunda Guerra Mágica, muchos expedientes de futuros
            magos fueron destruidos. Desde el Ministerio de Magia llevamos años
            intentando localizar a todos aquellos magos que no pudieron acceder
            a sus estudios en Hogwarts. Si crees que eres uno de ellos, por
            favor, introduce tu nombre y comprueba si apareces en el listado de
            alumnos de Howgarts.
          </p>
          <form className="loginForm">
            <input
              className="loginForm__input js-inputName"
              type="text"
              placeholder="Nombre completo..."
              onChange={handleInput}
            />
            <button
              className="loginForm__btn js-continue"
              onClick={handleClick}
            >
              Continuar
            </button>
          </form>
          <p>{text}</p>
        </div>
      </article>
    </section>
  );
}

export default Ministery;
