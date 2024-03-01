import { Link } from 'react-router-dom';

import GetAvatar from './GetAvatar';

function RegisterForm({
  imageHouse,
  houseSelect,
  userRegister,
  dataUser,
  alertMsg,
  registerWizard,
  formatDate,
}) {
  const { name, wizardName, birthdate, email, hashed_password, image } =
    dataUser;

  const sendData = (ev) => {
    ev.preventDefault();
    registerWizard(dataUser);
  };

  return (
    <section className="register">
      <h3>Crea tu ficha de alumno/a</h3>
      <article className="register__data">
        <img src={image || imageHouse[houseSelect].Shield} alt="" />
        <h3>
          Alumno/a: <span>{name || ''}</span>{' '}
        </h3>
        <h4>
          Apodo: <span>{wizardName || ''} </span>
        </h4>
        <p>
          Fecha de nacimiento: <span>{formatDate(birthdate) || ''} </span>
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
          id="name"
          defaultValue={name}
        />
        <label>Apodo</label>
        <input
          type="text"
          placeholder="Introduce tu apodo de mago/a"
          id="wizardName"
          defaultValue={wizardName}
        />
        <label>Fecha de nacimiento</label>
        <input type="date" id="birthdate" defaultValue={birthdate} />
        <label>E-mail</label>
        <input
          type="text"
          placeholder="Introduce tu e-mail"
          id="email"
          defaultValue={email}
        />
        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Introduce una contraseña"
          id="password"
          defaultValue={hashed_password}
        />
        <GetAvatar updateAvatar={userRegister} id="image" image={image} />
        <p className="register__form--msg">{alertMsg}</p>
        <Link>
          <button onClick={sendData}>Enviar</button>
        </Link>
      </form>
    </section>
  );
}

export default RegisterForm;
