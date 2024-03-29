import { Link } from 'react-router-dom';
import router from '../../services/router';
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
      <article className="register__data">
        <img src={image || imageHouse[houseSelect].Shield} alt="" />
        <h3>
          Alumno/a: <span>{name || ''}</span>{' '}
        </h3>
        <h4>
          Apodo: <span>{wizardName || ''} </span>
        </h4>
        <p>
          Fecha de nacimiento:{' '}
          <span>{!birthdate ? '' : formatDate(birthdate)} </span>
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

        <label>Nombre completo </label>
        <input
          type="text"
          placeholder="Introduce tu nombre completo"
          id="name"
          defaultValue={name}
          required
        />
        <label>Apodo</label>
        <input
          type="text"
          placeholder="Introduce tu apodo de mago/a"
          id="wizardName"
          defaultValue={wizardName}
          required
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
        <label>E-mail</label>
        <input
          type="text"
          placeholder="Introduce tu e-mail"
          id="email"
          defaultValue={email}
          required
        />
        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Introduce una contraseña"
          id="password"
          defaultValue={hashed_password}
          required
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
