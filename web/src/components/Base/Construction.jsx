import '../../scss/layout/Reusable.scss';
import work from '../../images/workGif.gif';
import ReturnBtn from '../Reusable/ReturnBtn';

function Construction() {
  return (
    <section className="construction">
      <img src={work} alt="Is Leviooosa" />
      <p>
        Todos nuestros magos y brujas están trabajando para sacar adelante esta
        página cuanto antes. Gracias por tu paciencia.
      </p>
      <ReturnBtn url="/games" text="Volver a juegos" />
    </section>
  );
}

export default Construction;
