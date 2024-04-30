import ReturnBtn from '../Reusable/ReturnBtn';
import Gryffindor from './Gryffindor';
import Hufflepuff from './Hufflepuff';
import Ravenclaw from './Ravenclaw';
import Slytherin from './Slytherin';
import ConfettiLayout from '../Reusable/ConfettiLayout';

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
      <ConfettiLayout />
      {renderHouse[houseSelect]}
    </>
  );
}

export default HogwartsHouse;
