import { Link, useParams } from 'react-router-dom';
import CardDetail from './CardDetail';

function WizardDetail({ data }) {
  const { idWizard } = useParams();
  const id = parseInt(idWizard);
  const cardData = data.find((char) => char.idalumno === id);
  if (!cardData) {
    return (
      <section className="detailPage">
        <Link to="/wizards">
          <button className="detailPage__btn">
            <i className="fa-solid fa-wand-sparkles"></i> Volver
          </button>
        </Link>
        <p className="characters__notFound">
          El personaje que buscas no existe
        </p>
      </section>
    );
  }

  return (
    <section className="detailPage">
      <Link to="/wizards">
        <button className="detailPage__btn">
          <i className="fa-solid fa-wand-sparkles"></i> Volver
        </button>
      </Link>
      <CardDetail data={cardData} />
    </section>
  );
}

export default WizardDetail;
