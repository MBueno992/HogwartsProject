import '../../scss/layout/WizardsList.scss';
import mujer from '../../images/chica.jpeg';
import hombre from '../../images/chico.jpeg';

function WizardsCard({ data, style }) {
  return (
    <article className={style} id={data.idalumno}>
      <img
        src={
          data.image !== ''
            ? data.image
            : data.gender === 'Mujer'
            ? mujer
            : hombre
        }
        alt={data.name}
        className="card__image"
      />
      <div className="card__text">
        <h2>{data.name}</h2>
        <p>{data.wizardName}</p>
      </div>
    </article>
  );
}

export default WizardsCard;
