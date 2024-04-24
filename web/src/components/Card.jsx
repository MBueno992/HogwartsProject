import mujer from '../images/chica.jpeg';
import hombre from '../images/chico.jpeg';
import PropTypes from 'prop-types';

function Card({ dataUser, houseSelect, imageHouse, formatDate }) {
  const { name, wizardName, birthdate, gender, house, image } = dataUser;
  return (
    <article className="register__data">
      <img
        src={
          image !== ''
            ? image
            : gender === 'Mujer'
            ? mujer
            : gender === 'Hombre'
            ? hombre
            : imageHouse[houseSelect].Shield
        }
        alt={wizardName || ''}
      />
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
        Miembro de la casa: <span>{house || houseSelect} </span>
      </p>
    </article>
  );
}

Card.propTypes = {
  dataUser: PropTypes.object,
  houseSelect: PropTypes.string,
  imageHouse: PropTypes.string,
  formatDate: PropTypes.func,
};

export default Card;