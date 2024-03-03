import { Link } from 'react-router-dom';
import WizardsCard from './WizardsCard';
import '../../scss/layout/WizardsList.scss';
import dataBD from '../../services/dataBD';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

function Wizards({ data, setWizardsList }) {
  useEffect(() => {
    dataBD.wizardsDb().then((response) => {
      setWizardsList(response);
    });
  }, []);

  if (data.length === 0) {
    return (
      <p className="characters__notFound">
        Parece que no hay ningún mago disponible en este momento.
      </p>
    );
  }

  const dataList = data.map((wiz) => {
    return (
      <li key={wiz.idalumno} className={`characters__list--card ${wiz.house}`}>
        <Link to={`/wizards/${wiz.idalumno}`} className="link">
          <WizardsCard data={wiz} style="card" />
        </Link>
      </li>
    );
  });
  return (
    <section className="characters">
      <ul className="characters__list">{dataList}</ul>
    </section>
  );
}
Wizards.propTypes = {
  data: PropTypes.array,
  setWizardsList: PropTypes.func,
};

export default Wizards;
