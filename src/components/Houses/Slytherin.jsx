import shield from '../../images/SlytherinShield.png';
import flagShort from '../../images/slytherin.png';
import flagLong from '../../images/slytherinlong.png';
import gif from '../../images/slytherinGif.gif';
import '../../scss/layout/Headers/HeadSlytherin.scss';
import Footer from '../Footer';

function Slytherin({ finalResult }) {
  return (
    <>
      <div className="Slytherin">
        <header>
          <div className="header__houses">
            <div className="header__houses--flag">
              <img src={flagLong} alt="slytherin house" />
              <img src={flagShort} alt="slytherin house" />
            </div>
            <div className="header__houses--shield">
              <img src={shield} alt="Hogwarts Shield" />
            </div>
            <div className="header__houses--flag">
              <img src={flagShort} alt="slytherin house" />
              <img src={flagLong} alt="slytherin house" />
            </div>
          </div>
        </header>
        <main className="house">
          <h2>¡{finalResult[0][0]}!</h2>
          <article className="house__art">
            <img src={gif} alt="" className="house__art--gif" />
            <div className="house__art--text">
              <h4>Bienvenido/a a Slytherin</h4>
              <p>
                Las personas de Slytherin destacan por su astucia, determinación
                y ambición. Son personas que valoran el ingenio, la
                determinación para lograr sus metas y la búsqueda de su propio
                beneficio. A menudo son percibidas como líderes natos,
                dispuestas a hacer lo que sea necesario para alcanzar el éxito,
                aunque eso signifique tomar decisiones difíciles o
                cuestionables. También tienden a ser muy selectivas en cuanto a
                sus amistades y a tener un fuerte sentido de lealtad hacia
                aquellos que consideran dignos.
              </p>
            </div>
          </article>
          <section>
            <h3>Crea tu ficha de alumno/a</h3>
            <form>
              <label>
                Nombre
                <input type="text" placeholder="Introduce tu nombre completo" />
              </label>
              <input type="text" placeholder="introduce tu apogo de mago/a" />
              <input type="text" placeholder="Introduce tu email" />
            </form>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Slytherin;
