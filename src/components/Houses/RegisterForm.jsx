import { Link } from 'react-router-dom';

import GetAvatar from './GetAvatar';

function RegisterForm({ imageHouse, houseSelect, userRegister, dataUser }) {
  const { userName, wizardName, birthdate, email, password, image } = dataUser;

  return (
    <section className="register">
      <h3>Crea tu ficha de alumno/a</h3>
      <article className="register__data">
        <img src={image || imageHouse[houseSelect].Shield} alt="" />
        <h3>
          Alumno/a: <span>{userName || ''}</span>{' '}
        </h3>
        <h4>
          Apodo: <span>{wizardName || ''} </span>
        </h4>
        <p>
          Fecha de nacimiento: <span>{birthdate || ''} </span>
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
        <label>Nombre completo </label>
        <input
          type="text"
          placeholder="Introduce tu nombre completo"
          id="userName"
          value={userName}
        />
        <label>Apodo</label>
        <input
          type="text"
          placeholder="Introduce tu apodo de mago/a"
          id="wizardName"
          value={wizardName}
        />
        <label>Fecha de nacimiento</label>
        <input type="date" id="birthdate" value={birthdate} />
        <label>E-mail</label>
        <input
          type="text"
          placeholder="Introduce tu e-mail"
          id="email"
          value={email}
        />
        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Introduce una contraseña"
          id="password"
          value={password}
        />
        <GetAvatar updateAvatar={userRegister} id="image" image={image} />

        <Link>
          <button>Enviar</button>
        </Link>
      </form>
    </section>
  );
}

export default RegisterForm;
