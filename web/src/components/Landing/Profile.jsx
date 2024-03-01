import { useParams } from 'react-router-dom';
import '../../scss/layout/HouseSelect.scss';
import '../../scss/layout/Profile.scss';
import DownloadPDF from '../Profile/DownloadPDF';
import Letter from '../Letter/Letter';
import letterGif from '../../images/letterGif.gif';

function Profile({ data }) {
  const { wizardName } = useParams();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <>
      <section className={` profile ${data.house}`}>
        <article className="register__data profile__data">
          <img src={data.image || ''} alt={data.name} />
          <h3>
            Alumno/a: <span>{data.name}</span>{' '}
          </h3>
          <h4>
            Apodo: <span>{data.wizardName} </span>
          </h4>
          <p>
            Fecha de nacimiento: <span>{formatDate(data.birthdate)} </span>
          </p>
          <p>
            Miembro de la casa: <span>{data.house} </span>
          </p>
        </article>
      </section>

      <nav className="mainProfile">
        <ul className="mainProfile__list">
          <li className="mainProfile__list--option">
            <DownloadPDF userName={data.name} />
          </li>
          <li className="mainProfile__list--option">
            <img src={letterGif} alt="" />
            <div>
              <p>Descarga tu carta</p>
            </div>
          </li>
          <li className="mainProfile__list--option">Carta de Hogwarts</li>
          <li className="mainProfile__list--option">Modificar datos</li>
          <li className="mainProfile__list--option">Mini juegos</li>
          <li className="mainProfile__list--option">Cerrar sesión</li>
        </ul>
      </nav>
    </>
  );
}

export default Profile;
