import shield from '../images/escudo.png';
import hogwarts from '../images/hogwarts.png';
import '../scss/layout/Header.scss';
import PropTypes from 'prop-types';
import { Sling as Hamburger } from 'hamburger-react';

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
import { useState } from 'react';
import { Link } from 'react-router-dom';

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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <nav className="header__nav">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          direction="right"
          easing="ease-in"
          size={25}
        />
        <ul className={isOpen ? 'header__nav--main' : 'hidden'}>
          <li>
            <Link to="/games" className="header__nav--url">
              Juegos
            </Link>
          </li>
          <li>
            <Link to="/ministery" className="header__nav--url">
              Carta personalizada
            </Link>
          </li>
          <li>
            <Link to="/quest-intro" className="header__nav--url">
              Sombrero seleccionador
            </Link>
          </li>
        </ul>
        <ul className="header__nav--login">
          <li className="loginBtn">Iniciar sesión</li>
          <li className="signupBtn">
            <Link to="/register">Regístrate</Link>
          </li>
        </ul>
      </nav>
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
          <Link to="/">
            <img
              src={`${!houseSelect ? shield : imageHouse[houseSelect].Shield}`}
              alt="Hogwarts Shield"
            />
          </Link>
          {!houseSelect ? <img src={hogwarts} alt="Hogwarts" /> : null}
          {/* <img
            src={`${!houseSelect ? hogwarts : imageHouse[houseSelect].Shield}`}
            alt="Hogwarts"
          /> */}
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
