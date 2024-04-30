import mujer from '../images/chica.jpeg';
import hombre from '../images/chico.jpeg';
import PropTypes from 'prop-types';
import Gryffindor from '../images/GryffindorShield.png';
import Slytherin from '../images/SlytherinShield.png';
import Ravenclaw from '../images/RavenclawShield.png';
import Hufflepuff from '../images/HufflepuffShield.png';
import SchoolShield from '../images/escudo.png';

function Card({ dataUser, houseSelect, imageHouse }) {
  const { name, wizardName, gender, image } = dataUser;
  const userHouse = {
    Gryffindor: Gryffindor,
    Slytherin: Slytherin,
    Ravenclaw: Ravenclaw,
    Hufflepuff: Hufflepuff,
  };
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
      <img
        src={houseSelect ? userHouse[houseSelect] : SchoolShield}
        alt="Shield"
        className="adminForm__data--shield"
      />
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
