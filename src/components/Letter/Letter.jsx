import '../../scss/layout/Letter.scss';
import HogwartsShield from '../../images/logo.png';
import FilliusSignature from '../../images/filius.webp';

function Letter({ userName }) {
  return (
    <section className="letterMain">
      <section className="letter">
        <img
          src={HogwartsShield}
          alt="escudo Hogwarts"
          className="letter__shield"
        />
        <h2 className="letter__school">Colegio Hogwarts</h2>
        <h3 className="letter__school">de Magia y hechicería</h3>
        <h5 className="letter__director">
          Directora: Minerva McGonagall (Orden de Merlín, Primera Clase, miembro
          de la Orden del Fénix)
        </h5>
        <p className="letter__text">
          Estimado Sr./Sra <span className="js-userName">{userName}</span>,
        </p>
        <p className="letter__text">
          Nos complace informarle de que dispone de una plaza en el Colegio
          Hogwarts de Magia y Hechicería. Le adjuntamos la lista del equipo y
          los libros necesario. <br /> Las clases comienzan el 1 de Septiembre.
          <br /> Esperamos su lechuza antes del 31 de Julio.
        </p>

        <div className="letter__signature">
          <p> Muy cordialmente,</p>
          <img
            src={FilliusSignature}
            alt="Firma Filius Flitwick"
            className="letter__signature--img"
          />
          <p> Fillius Flitwick </p>
          <p> Director adjunto.</p>
        </div>
        {/* <Link to="/sombrero-seleccionador" className="letter__btn" /> */}
        {/* <button className="letter__btn"> </button> */}
      </section>
    </section>
  );
}

export default Letter;
