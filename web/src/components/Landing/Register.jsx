import { Link } from 'react-router-dom';
import letter from '../../images/letterGif.gif';

function Register() {
  return (
    <div className="landing__register">
      <section className="landingRegister">
        <h4 className="landingRegister__title">
          Juro solemnemente que soy un mago y que esto es una travesura.
        </h4>
        <img
          src={letter}
          alt="Carta Hogwarts"
          className="landingRegister__letter"
        />
        <Link to="/ministery">
          <button className="landingRegister__btn">
            Quiero mi carta de Hogwarts
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Register;
