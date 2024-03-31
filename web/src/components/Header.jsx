import shield from '../images/escudo.png';
import hogwarts from '../images/hogwarts.png';
import '../scss/layout/Header.scss';
import PropTypes from 'prop-types';

//Gryffindor
import GryffindorShield from '../images/GryffindorShield.png';
import GryffindorShort from '../images/GryffindorShort.png';
import GryffindorLong from '../images/GryffindorLong.png';
//Ravenclaw
import RavenclawShield from '../images/RavenclawShield.png';
import RavenclawShort from '../images/RavenclawShort.png';
import RavenclawLong from '../images/RavenclawLong.png';
//Hufflepuff
import HufflepuffShield from '../images/HufflepuffShield.png';
import HufflepuffShort from '../images/HufflepuffShort.png';
import HufflepuffLong from '../images/HufflepuffLong.png';
//Slytherin
import SlytherinShield from '../images/SlytherinShield.png';
import SlytherinShort from '../images/SlytherinShort.png';
import SlytherinLong from '../images/SlytherinLong.png';

function Header({ houseSelect }) {
  const imageHouse = {
    Gryffindor: {
      Shield: GryffindorShield,
      flagLong: GryffindorLong,
      flagShort: GryffindorShort,
    },
    Ravenclaw: {
      Shield: RavenclawShield,
      flagLong: RavenclawLong,
      flagShort: RavenclawShort,
    },
    Hufflepuff: {
      Shield: HufflepuffShield,
      flagLong: HufflepuffLong,
      flagShort: HufflepuffShort,
    },
    Slytherin: {
      Shield: SlytherinShield,
      flagLong: SlytherinLong,
      flagShort: SlytherinShort,
    },
  };
  return (
    <header className="header">
      <div className="header__houses">
        <div className="header__houses--flag">
          <img
            src={`${
              !houseSelect ? GryffindorLong : imageHouse[houseSelect].flagLong
            }`}
            alt="gryffindor house"
          />
          <img
            src={`${
              !houseSelect ? SlytherinShort : imageHouse[houseSelect].flagShort
            }`}
            alt="slytherin house"
          />
        </div>
        <div className="header__houses--school">
          <img src={shield} alt="Hogwarts Shield" />
          <img src={hogwarts} alt="Hogwarts" />
        </div>
        <div className="header__houses--flag">
          <img
            src={`${
              !houseSelect ? RavenclawShort : imageHouse[houseSelect].flagShort
            }`}
            alt="ravenclaw house"
          />
          <img
            src={`${
              !houseSelect ? HufflepuffLong : imageHouse[houseSelect].flagLong
            }`}
            alt="hufflepuff house"
          />
        </div>
      </div>
    </header>
  );
}
Header.propTypes = {
  houseSelect: PropTypes.string,
};

export default Header;
