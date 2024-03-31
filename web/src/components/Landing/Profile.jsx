import { Link, useParams } from 'react-router-dom';
import '../../scss/layout/HouseSelect.scss';
import '../../scss/layout/Profile.scss';
import DownloadPDF from '../Profile/DownloadPDF';
import letterGif from '../../images/letterGif.gif';
import pluma from '../../images/pluma.gif';
import varita from '../../images/varita.gif';
import snitch from '../../images/snitch.gif';
import solemnly from '../../images/solemnly.gif';
import mujer from '../../images/chica.jpeg';
import hombre from '../../images/chico.jpeg';

function Profile({ data, logout, quotes, setQuotes }) {
  const { wizardName } = useParams();

  const handleClick = () => {
    logout();
  };

  return (
    <>
      <div className="profile">
        <nav className="mainProfile">
          <ul className="mainProfile__list">
            <li className="mainProfile__list--option">
              <div>
                <DownloadPDF userName={data.name} />
              </div>
            </li>
            <li className="mainProfile__list--option">
              <img src={letterGif} alt="" />
              <div>
                <button>Ver tu carta</button>
              </div>
            </li>
            <li className="mainProfile__list--option">
              <img src={varita} alt="" />
              <div>
                <Link to="/wizards" target="_blank" rel="no_referrer">
                  Conocer otros magos
                </Link>
              </div>
            </li>
            <li className="mainProfile__list--option">
              <img src={pluma} alt="" />
              <div>
                <p>Modifica tus datos</p>
              </div>
            </li>
            <li className="mainProfile__list--option">
              <img src={snitch} alt="" />
              <div>Mini juegos</div>
            </li>
            <li className="mainProfile__list--option">
              <img src={solemnly} alt="" />
              <div>
                {' '}
                <button onClick={handleClick}>Cerrar sesión</button>
              </div>
            </li>
          </ul>
        </nav>
        <article className="profilePage">
          <article className="register__data profilePage__data ">
            <img
              src={
                data.image !== ''
                  ? data.image
                  : data.gender === 'Mujer'
                  ? mujer
                  : hombre
              }
              alt={data.name}
            />
            <div className="profilePage__data--text">
              <h3>
                Alumno/a: <span>{data.name}</span>{' '}
              </h3>
              <h4>
                Apodo: <span>{data.wizardName} </span>
              </h4>
              <p>
                Miembro de la casa: <span>{data.house} </span>
              </p>
            </div>
          </article>
        </article>
        <section className="userSelection"></section>
      </div>
    </>
  );
}

export default Profile;
