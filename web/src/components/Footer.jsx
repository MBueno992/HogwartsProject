import { Link } from 'react-router-dom';
import hogwartsFooter from '../images/escudo.png';
import '../scss/layout/Footer.scss';

function Footer({ houseSelect }) {
  return (
    <footer
      className={`${!houseSelect ? 'footer' : `footer footer${houseSelect}`}`}
    >
      <section className="footer__hogwarts">
        <Link to="/">
          <img
            className="footer__logo"
            src={hogwartsFooter}
            alt="Logo Hogwarts"
          />
        </Link>
        <p className="footer__muggles">
          <strong>Esto es algo que los muggles nunca entenderán</strong>
        </p>
      </section>
      <nav>
        {/* <p className="footer__contact">Contacto</p> */}
        <ul className="footer__nav">
          <li>
            <a
              href="https://beta.adalab.es/modulo-3-evaluacion-final-MBueno992/"
              target="_blank"
              rel="noreferrer"
            >
              Registro de personajes
            </a>
          </li>
          <li>
            <Link to="/about-me">Sobre mí</Link>{' '}
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mbueno992/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin footer__nav--icon"></i>{' '}
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MBueno992"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github-alt footer__nav--icon"></i>{' '}
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
