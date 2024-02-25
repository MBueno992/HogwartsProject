import { Link } from 'react-router-dom';
import '../../scss/layout/Materials.scss';

function Materials() {
  return (
    <section className="letterMaterials">
      <div className="materials">
        <article>
          <h3 className="materials__title">Uniforme</h3>
          <ul className="materials__list">
            Los alumnos de primer año necesitarán:
            <li>Tres túnicas sencillas de trabajo (negras).</li>
            <li>Un sombrero puntiagudo ( negro) para uso diario.</li>
            <li>Un par de guantes protectores (piel de dragón o semejante).</li>
            <li>Una capa de invierno (negra, con broches plateados).</li>
          </ul>
          <p>
            (Todas las prendas de los alumnos deben llevar etiquetas con su
            nombre).
          </p>
        </article>
        <article>
          <h3 className="materials__title">Libros</h3>
          <ul className="materials__list">
            Todos los alumnos deben tener un ejemplar de los siguientes libros:
            <li>
              Libro reglamentario de hechizos, primer curso, Miranda Goshawk.
            </li>
            <li>Historia de la magia, Bathilda Bagshot.</li>
            <li>Teoría mágica, Adalbert Waffling.</li>
            <li>Guía de transformación para principiantes, Emeric Switch.</li>
            <li>Mil hierbas y hongos mágicos, Phyllida Spore.</li>
            <li>Filtros y pociones mágicas, Arsenius Jigger.</li>
            <li>Animales fantásticos y dónde encontrarlos, Newt Scamander.</li>
            <li>
              Las Fuerzas Oscuras. Una guía para la autoprotección, Quentin
              Trimble
            </li>
          </ul>
        </article>
        <article>
          <h3 className="materials__title">Resto del equipo</h3>
          <ul className="materials__list">
            <li>1 varita</li>
            <li>1 caldero (peltre, medida estándar 2).</li>
            <li>1 juego de redomas de vidrio o cristal.</li>
            <li>1 telescopio.</li>
            <li>1 balanza de latón.</li>
          </ul>
          <p>
            Los alumnos también pueden traer una lechuza o un gato o un sapo.
          </p>
        </article>
        <h4>
          Se recuerda a los padres que a los alumnos de primer año no se les
          permite tener escobas propias.
        </h4>
        <Link to="/quest-intro" className="btnSeal">
          Continuar
        </Link>
      </div>
    </section>
  );
}

export default Materials;
