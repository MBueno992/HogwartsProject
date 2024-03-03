import mujer from '../../images/chica.jpeg';
import hombre from '../../images/chico.jpeg';

function CardDetail({ data }) {
  console.log(data);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  return (
    <article key={data.idWizard} className={`cardDetail ${data.house}`}>
      <img
        src={
          data.image !== ''
            ? data.image
            : data.gender === 'Mujer'
            ? mujer
            : hombre
        }
        alt={data.name}
        className="cardDetail__image"
      />
      <div className="cardDetail__text">
        <h2 className="cardDetail__text--name">{data.name}</h2>

        <p className="cardDetail__text--prop">
          Género: <span>{data.gender}</span>
        </p>
        <p className="cardDetail__text--prop">
          Casa: <span>{data.house}</span>
        </p>
        <p className="cardDetail__text--prop">
          Fecha de nacimiento: <span>{formatDate(data.birthdate)}</span>
        </p>
        <p className="cardDetail__text--prop">
          Provincia: <span>{data.province}</span>
        </p>
      </div>
    </article>
  );
}

export default CardDetail;
