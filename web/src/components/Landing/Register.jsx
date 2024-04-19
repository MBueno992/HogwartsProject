import { Link } from 'react-router-dom';
import InputText from '../ResgisterForm/InputText';
import PropTypes from 'prop-types';
import '../../scss/layout/LoginRegister.scss';

function Register({ dataUser, alertMsg, registerWizard, userRegister }) {
  const { gender, name, wizardName, birthdate, email, hashed_password } =
    dataUser;

  const sendData = (ev) => {
    ev.preventDefault();
    registerWizard(dataUser);
  };

  return (
    <section className="register">
      <div className="register__title">
        <hr />
        <h3 className="register__title--text">Regístrate</h3>
        <hr />
      </div>
      <p className="register__title--welcome">
        ¡Bienvenido/a al fantástico mundo fandom de Hogwarts!
      </p>
      <form
        className="register__form"
        onChange={(ev) => {
          userRegister(ev.target.id, ev.target.value);
        }}
      >
        <div className="register__form--gender">
          <label>Especie </label>
          <input
            type="radio"
            id="gender"
            value="Hombre"
            checked={gender === 'Hombre'}
          />
          <label> Hombre</label>
          <input
            type="radio"
            id="gender"
            value="Mujer"
            checked={gender === 'Mujer'}
          />
          <label> Mujer</label>
        </div>
        <InputText
          text="Nombre completo"
          inputType="text"
          desc="Introduce tu nombre completo"
          value="name"
          data={dataUser.name}
        />
        <InputText
          inputType="text"
          text="Apodo"
          desc="Introduce tu apodo de mago/a"
          value="wizardName"
          data={dataUser.wizardName}
        />
        <label>Fecha de nacimiento</label>
        <input type="date" id="birthdate" defaultValue={birthdate} required />
        <InputText
          inputType="text"
          text="E-mail"
          desc="Introduce tu e-mail"
          value="email"
          data={dataUser.email}
        />
        <InputText
          inputType="password"
          text="Contraseña"
          desc="Introduce una contraseña"
          value="password"
          data={dataUser.hashed_password}
        />

        <p className={!alertMsg ? '' : 'register__form--msg'}>{alertMsg}</p>
        <Link to="/">
          <button className="register__form--btn" onClick={sendData}>
            Enviar
          </button>
        </Link>
      </form>
    </section>
  );
}

export default Register;
