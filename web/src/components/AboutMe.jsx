import '../scss/layout/AboutMe.scss';
import FrontImg from '../images/AboutMe.jpg';
import BackImg from '../images/AboutMeReal.jpg';
import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <section className="aboutMe">
      <div className="photoframe">
        <div className="photoframe__innerCard">
          <div className="frontSide">
            <img src={FrontImg} alt="" className="photoframe__img" />
          </div>
          <div className="backSide">
            <img src={BackImg} alt="" className="photoframe__img" />
          </div>
        </div>
      </div>
      <article className="aboutMe__text">
        <h3>¿Quién se esconde detrás?</h3>
        <p>
          Mi nombre es Marta, soy una pequeña "friki" del mundo de Harry Potter,
          y aunque mi corazón se sienta Gryffindor mi personalidad es
          completamente la de una Ravenclaw. Este proyecto nace a partir de
          realizar un Bootcamp de programación en{' '}
          <a
            href="https://adalab.es/"
            target="_blank"
            rel="noreferrer"
            className="aboutMe__text--link"
          >
            Adalab
          </a>{' '}
          (la que para mí ha sido como mi pequeña escuela de magia), en el que
          además de poner a prueba los conocimientos adquiridos, he querido
          hacer un guiño a este maravilloso mundo creado por J.K.Rowling y tener
          un pequeño detalle con todos esos magos no reconocidos que hay por el
          mundo para que puedan tener acceso a su carta de Hogwarts y comprobar
          a qué casa pertenecen.
        </p>

        <p>
          Os estaría muy agradecida si me mandáis feedback sobre lo que os ha
          parecido, ideas que se pueden llevar a cabo, alguna cosa que hechéis
          de menos, cualquier mensaje para mejorar siempre será bien recibido.
        </p>
        <Link to="/contact">
          <button className="aboutMe__contact">Enviar Feedback</button>
        </Link>
      </article>
    </section>
  );
}

export default AboutMe;
