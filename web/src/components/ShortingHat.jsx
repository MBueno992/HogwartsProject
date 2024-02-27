import { Link } from 'react-router-dom';
import '../scss/layout/ShortingHat.scss';

function ShortingHat() {
  return (
    <section className="shortingHat">
      <h2 className="shortingHat__title">Bienvenido a Hogwarts </h2>
      <p className="shortingHat__text">
        Ha llegado la hora de averiguar cuál es tu casa. <br />
        ¿Estás preparado/a para adentrarte en la mejor escuela de Magia y
        Hechicería de todos los tiempos? <br />
        Sólo tendrás que responder el siguiente cuestionario, son 10 preguntas
        sencillas con 4 posibles soluciones, ninguna es incorrecta, y cuando
        termines, podrás averiguar en qué casa deberás estar. <br /> Además,
        después del test, verás un apartado para generar tu ficha de alumno.
        <br />
        ¿Preparado/a?
      </p>
      <Link to="/quest" className="shortingHat__btn">
        <span>¡Vamos!</span>
      </Link>
    </section>
  );
}

export default ShortingHat;
