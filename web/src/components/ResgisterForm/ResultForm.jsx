import '../../scss/layout/HouseSelect.scss';

import RegisterForm from './RegisterForm';
import Gryffindor from '../Houses/Gryffindor';
import Slytherin from '../Houses/Slytherin';
import Hufflepuff from '../Houses/Hufflepuff';
import Ravenclaw from '../Houses/Ravenclaw';
//Gryffindor
import GryffindorShield from '../../images/GryffindorShield.png';
import GryffindorShort from '../../images/GryffindorShort.png';
import GryffindorLong from '../../images/GryffindorLong.png';
//Ravenclaw
import RavenclawShield from '../../images/RavenclawShield.png';
import RavenclawShort from '../../images/RavenclawShort.png';
import RavenclawLong from '../../images/RavenclawLong.png';
//Hufflepuff
import HufflepuffShield from '../../images/HufflepuffShield.png';
import HufflepuffShort from '../../images/HufflepuffShort.png';
import HufflepuffLong from '../../images/HufflepuffLong.png';
//Slytherin
import SlytherinShield from '../../images/SlytherinShield.png';
import SlytherinShort from '../../images/SlytherinShort.png';
import SlytherinLong from '../../images/SlytherinLong.png';

function ResultForm({
  houseSelect,
  userRegister,
  dataUser,
  userName,
  alertMsg,
  registerWizard,
  formatDate,
}) {
  const renderHouse = {
    Gryffindor: <Gryffindor />,
    Ravenclaw: <Ravenclaw />,
    Hufflepuff: <Hufflepuff />,
    Slytherin: <Slytherin />,
  };
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
    <section>
      <aside className="house">
        {renderHouse[houseSelect]}
        <RegisterForm
          imageHouse={imageHouse}
          houseSelect={houseSelect}
          userName={userName}
          userRegister={userRegister}
          dataUser={dataUser}
          alertMsg={alertMsg}
          registerWizard={registerWizard}
          formatDate={formatDate}
        />
      </aside>
    </section>
  );
}

export default ResultForm;
