import InputText from './InputText';
import PropTypes from 'prop-types';
import '../../scss/layout/LoginRegister.scss';

function Register({
  dataUser,
  alertMsg,
  registerWizard,
  userRegister,
  isLoggedIn,
  updateUserData,
}) {
  const { gender, name, wizardName, birthdate, email, hashed_password } =
    dataUser;

  const sendData = (ev) => {
    ev.preventDefault();
    registerWizard(dataUser);
  };

  const updateData = (ev) => {
    ev.preventDefault();
    const userId = JSON.parse(localStorage.getItem('userData')).fk_idUser;
    dataUser.fk_idUser = userId;
    updateUserData(dataUser);
  };
  const provincias = [
    'Álava',
    'Albacete',
    'Alicante',
    'Almería',
    'Asturias',
    'Ávila',
    'Badajoz',
    'Barcelona',
    'Burgos',
    'Cáceres',
    'Cádiz',
    'Cantabria',
    'Castellón',
    'Ceuta',
    'Ciudad Real',
    'Córdoba',
    'Cuenca',
    'Girona',
    'Granada',
    'Guadalajara',
    'Guipúzcoa',
    'Huelva',
    'Huesca',
    'Illes Balears',
    'Jaén',
    'La Coruña',
    'La Rioja',
    'Las Palmas',
    'León',
    'Lleida',
    'Lugo',
    'Madrid',
    'Málaga',
    'Melilla',
    'Murcia',
    'Navarra',
    'Ourense',
    'Palencia',
    'Pontevedra',
    'Salamanca',
    'Santa Cruz de Tenerife',
    'Segovia',
    'Sevilla',
    'Soria',
    'Tarragona',
    'Teruel',
    'Toledo',
    'Valencia',
    'Valladolid',
    'Vizcaya',
    'Zamora',
    'Zaragoza',
  ];

  return (
    <div className="modifyData">
      <section className="register">
        <div className="register__title">
          <hr />
          <h3 className="register__title--text">
            {isLoggedIn ? 'Modifica tus datos' : 'Regístrate'}
          </h3>
          <hr />
        </div>
        <p className="register__title--welcome">
          {isLoggedIn
            ? 'Parece que hay algo que quieres cambiar, ¡adelante!'
            : '¡Bienvenido/a al fantástico mundo fandom de Hogwarts!'}
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
            text="Nombre completo *"
            inputType="text"
            desc="Introduce tu nombre completo"
            value="name"
            data={dataUser.name}
          />
          <InputText
            inputType="text"
            text="Apodo *"
            desc="Introduce tu apodo de mago/a"
            value="wizardName"
            data={dataUser.wizardName}
          />
          <label>Fecha de nacimiento *</label>
          <input type="date" id="birthdate" defaultValue={birthdate} required />

          {isLoggedIn ? (
            <>
              <label>Provincia</label>
              <select required id="province" className="register__form--select">
                <option value="">Seleccionar provincia</option>
                {provincias.map((prov, i) => {
                  return (
                    <option value={prov} key={i}>
                      {prov}
                    </option>
                  );
                })}
              </select>
            </>
          ) : null}
          {!isLoggedIn ? (
            <>
              <InputText
                inputType="text"
                text="E-mail *"
                desc="Introduce tu e-mail"
                value="email"
                data={dataUser.email}
              />
              <InputText
                inputType="password"
                text="Contraseña *"
                desc="Introduce una contraseña"
                value="password"
                data={dataUser.hashed_password}
              />
            </>
          ) : null}
          <p className={!alertMsg ? '' : 'register__form--msg'}>{alertMsg}</p>
          {/* <Link to="/"> */}
          <button
            className="register__form--btn"
            onClick={isLoggedIn ? updateData : sendData}
          >
            Enviar
          </button>
          {/* </Link> */}
        </form>
      </section>
    </div>
  );
}

export default Register;
