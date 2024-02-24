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
    <main className="main">
      <section className="login">
        <img src={ministery} alt="Ministerio de Magia" className="login__img" />
        <div className="login__text">
          <h1 className="login__text--title minis">Ministerio de Magia</h1>
          <h2 className="login__text--subtitle">
            Departamento de educación mágica
          </h2>
          <p className="login__text--intro">
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

            <input
              type="submit"
              value="Continuar"
              role="button"
              className="loginForm__btn js-continue"
              onClick={handleClick}
            />
          </form>
          <p>{text}</p>
        </div>
      </section>
    </main>
  );
}

export default Ministery;
