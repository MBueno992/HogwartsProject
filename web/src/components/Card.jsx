import mujer from '../images/chica.jpeg';
import hombre from '../images/chico.jpeg';
import PropTypes from 'prop-types';

function Card({ dataUser, houseSelect, imageHouse, formatDate }) {
  const { name, wizardName, birthdate, gender, house, image } = dataUser;
  return (
    <article className="adminForm__data">
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
        className="adminForm__data--img"
      />
      <h3>
        Alumno/a: <span>{name || ''}</span>{' '}
      </h3>
      <h4>
        Apodo: <span>{wizardName || ''} </span>
      </h4>
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
