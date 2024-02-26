import hogwartsFooter from '../images/escudo.png';
import '../scss/layout/Footer.scss';

function Footer({ style }) {
  return (
    <footer className={`footer ${style}`}>
      <a href="./index.html">
        <img
          className="footer__logo"
          src={hogwartsFooter}
          alt="Logo Hogwarts"
        />
      </a>
      <p className="footer__muggles">
        <strong>Esto es algo que los muggles nunca entenderán</strong>
      </p>
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
          <li></li>
          <li>
            <a
              href="https://www.linkedin.com/in/mbueno992/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin footer__nav--icon"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MBueno992"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github-alt footer__nav--icon"></i>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
