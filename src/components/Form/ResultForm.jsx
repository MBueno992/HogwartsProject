import shield from '../../images/SlytherinShield.png';
import flagShort from '../../images/slytherin.png';
import flagLong from '../../images/slytherinlong.png';
import gif from '../../images/slytherinGif.gif';

import '../../scss/layout/Headers/HeadSlytherin.scss';
import { Link } from 'react-router-dom';

function ResultForm({ finalResult }) {
  console.log(finalResult[0]);
  return (
    <section className="Slytherin">
      <header>
        <div className="header__houses">
          <div className="header__houses--flag">
            <img src={flagLong} alt="slytherin house" />
            <img src={flagShort} alt="slytherin house" />
          </div>
          <div className="header__houses--shield">
            <img src={shield} alt="Hogwarts Shield" />
            <h2>¡{finalResult[0][0]}!</h2>
          </div>
          <div className="header__houses--flag">
            <img src={flagShort} alt="slytherin house" />
            <img src={flagLong} alt="slytherin house" />
          </div>
        </div>
      </header>
      <main className="house">
        <article className="house__art">
          <img src={gif} alt="" className="house__art--gif" />
          <div className="house__art--text">
            <h4>Bienvenido/a a Slytherin</h4>
            <p>
              Las personas de Slytherin destacan por su astucia, determinación y
              ambición. Son personas que valoran el ingenio, la determinación
              para lograr sus metas y la búsqueda de su propio beneficio. A
              menudo son percibidas como líderes natos, dispuestas a hacer lo
              que sea necesario para alcanzar el éxito, aunque eso signifique
              tomar decisiones difíciles o cuestionables. También tienden a ser
              muy selectivas en cuanto a sus amistades y a tener un fuerte
              sentido de lealtad hacia aquellos que consideran dignos.
            </p>
          </div>
        </article>
        <section className="register">
          <h3>Crea tu ficha de alumno/a</h3>
          <article className="register__data">
            <img src={shield} alt="" />
            <h3>Nombre del alumno/a: </h3>
            <h4>Apodo: </h4>
            <p>Fecha de nacimiento: </p>
            <p>Miembro de la casa: </p>
          </article>
          <form className="register__form">
            <label>Nombre </label>
            <input type="text" placeholder="Introduce tu nombre completo" />

            <label>Apodo</label>
            <input type="text" placeholder="introduce tu apogo de mago/a" />
            {/* <label>Correo electrónico </label>
            <input type="text" placeholder="Introduce tu email" /> */}
            <label>Fecha de nacimiento</label>
            <input type="date" />
            <Link>
              <button>Enviar</button>
            </Link>
          </form>
        </section>
      </main>
    </section>
  );
}

export default ResultForm;
