import { Link } from 'react-router-dom';
import GetAvatar from '../Reusable/GetAvatar';
import InputText from './InputText';
import Card from '../Card';
import PropTypes from 'prop-types';
// import Register from '../Landing/Register';

function RegisterForm({
  imageHouse,
  houseSelect,
  userRegister,
  dataUser,
  alertMsg,
  registerWizard,
  formatDate,
}) {
  const {
    gender,
    name,
    wizardName,
    birthdate,
    city,
    email,
    hashed_password,
    image,
  } = dataUser;

  const sendData = (ev) => {
    ev.preventDefault();
    registerWizard(dataUser);
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
    <section className="register">
      <h3>Crea tu ficha de alumno/a</h3>
      <Card
        dataUser={dataUser}
        imageHouse={imageHouse}
        formatDate={formatDate}
        houseSelect={houseSelect}
      />
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
          inputType="text"
          text="Nombre completo"
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
        <label>Provincia</label>
        <select required id="province">
          <option value="">Seleccionar provincia</option>
          {provincias.map((prov, i) => {
            return (
              <option value={prov} key={i}>
                {prov}
              </option>
            );
          })}
        </select>
        <label>Población</label>
        <input type="text" id="city" defaultValue={city} required />
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
        <GetAvatar updateAvatar={userRegister} id="image" image={image} />
        <p className="register__form--msg">{alertMsg}</p>
        <Link>
          <button onClick={sendData}>Enviar</button>
        </Link>
      </form>
    </section>
  );
}

RegisterForm.propTypes = {
  houseSelect: PropTypes.string,
  userRegister: PropTypes.func,
  dataUser: PropTypes.string,
  userName: PropTypes.string,
  alertMsg: PropTypes.string,
  registerWizard: PropTypes.func,
  formatDate: PropTypes.func,
};

export default RegisterForm;
