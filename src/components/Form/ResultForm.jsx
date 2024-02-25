import shield from '../../images/HufflepuffShield.png';
import flagShort from '../../images/ravenclaw.png';
import flagLong from '../../images/ravenclawlargue.png';

import '../../scss/layout/Headers/HouseSelect.scss';
import { Link } from 'react-router-dom';
import Gryffindor from '../Houses/Gryffindor';
import Slytherin from '../Houses/Slytherin';
import Hufflepuff from '../Houses/Hufflepuff';
import Ravenclaw from '../Houses/Ravenclaw';

function ResultForm({ finalResult, userRegister, dataUser }) {
  const houseSelect = finalResult[0][0];
  const renderHouse = {
    Gryffindor: <Gryffindor />,
    Ravenclaw: <Ravenclaw />,
    Hufflepuff: <Hufflepuff />,
    Slytherin: <Slytherin />,
  };

  return (
    <section className={houseSelect}>
      <header>
        <div className="header__houses">
          <div className="header__houses--flag">
            <img src={flagLong} alt={houseSelect} />
            <img src={flagShort} alt={houseSelect} />
          </div>
          <div className="header__houses--shield">
            <img src={shield} alt="Hogwarts Shield" />
            <h2>¡{houseSelect}!</h2>
          </div>
          <div className="header__houses--flag">
            <img src={flagShort} alt={houseSelect} />
            <img src={flagLong} alt={houseSelect} />
          </div>
        </div>
      </header>
      <main className="house">
        {renderHouse[houseSelect]}
        <section className="register">
          <h3>Crea tu ficha de alumno/a</h3>
          <article className="register__data">
            <img src={shield} alt="" />
            <h3>
              Alumno/a: <span>{dataUser.userName || ''}</span>{' '}
            </h3>
            <h4>
              Apodo: <span>{dataUser.wizardName || ''} </span>
            </h4>
            <p>
              Fecha de nacimiento: <span>{dataUser.birthdate || ''} </span>
            </p>
            <p>
              Miembro de la casa: <span>{houseSelect} </span>
            </p>
          </article>
          <form
            className="register__form"
            onChange={(ev) => {
              userRegister(ev.target.id, ev.target.value);
            }}
          >
            <label>Nombre </label>
            <input
              type="text"
              placeholder="Introduce tu nombre completo"
              id="userName"
            />

            <label>Apodo</label>
            <input
              type="text"
              placeholder="Introduce tu apodo de mago/a"
              id="wizardName"
            />
            <label>Fecha de nacimiento</label>
            <input type="date" id="birthdate" />
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
