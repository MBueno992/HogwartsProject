import ReturnBtn from '../Reusable/ReturnBtn';
import Gryffindor from './Gryffindor';
import Hufflepuff from './Hufflepuff';
import Ravenclaw from './Ravenclaw';
import Slytherin from './Slytherin';

function HogwartsHouse({ houseSelect }) {
  const renderHouse = {
    Gryffindor: <Gryffindor />,
    Slytherin: <Slytherin />,
    Hufflepuff: <Hufflepuff />,
    Ravenclaw: <Ravenclaw />,
  };
  return (
    <>
      <ReturnBtn url="/" text="Volver al inicio" />
      {renderHouse[houseSelect]}
    </>
  );
}

export default HogwartsHouse;
