import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import '../scss/App.scss';
import Footer from './Footer.jsx';
import Ministery from './Ministery.jsx';
import Header from './Header.jsx';
import CarouselFadeExample from './Letter/Carousel.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShortingHat from './ShortingHat.jsx';
import Form from './Form/Form.jsx';
import questions from '../services/data.json';
import ResultForm from './Form/ResultForm.jsx';
import Landing from './Landing/Landing.jsx';
import local from '../services/localStorage.js';

function App() {
  const [userName, setUserName] = useState(local.get('user', ''));
  const [alertMsg, setAlertMsg] = useState('');
  const [indexCarrusel, setIndexCarrusel] = useState(0);
  const [randomOrder, setRandomOrder] = useState([]);
  const [answerArray, setAnswerArray] = useState([]);
  const [answerSelected, setAnswerSelected] = useState([]);
  const [houseSelect, setHouseSelect] = useState(local.get('house', ''));
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState({
    userName: userName,
    wizardName: '',
    birthdate: '',
    email: '',
    password: '',
    image: '',
  });

  useEffect(() => {
    local.set('user', userName);
    local.set('house', houseSelect);
  }, [userName, houseSelect]);

  const userNameInput = (value) => {
    setUserName(value);
  };

  const addUserName = () => {
    if (userName === '') {
      setAlertMsg('Por favor, introduce tu nombre y apellido');
    } else {
      navigate('/hogwarts-letter');
    }
  };

  const selectCarousel = (value) => {
    setIndexCarrusel(value);
  };

  const answerSelect = (value) => {
    setAnswerSelected([...answerSelected, value]);
  };

  const resultForm = () => {
    const result = [];
    answerSelected.forEach((value) => {
      result[value] = (result[value] || 0) + 1;
    });
    const orderResults = Object.entries(result).sort((a, b) => b[1] - a[1]);
    const finalResult = orderResults[0][0];
    setHouseSelect(finalResult);
  };

  const getRandomNumber = () => {
    const randomNumbers = [];
    while (randomNumbers.length < 4) {
      const number = Math.floor(Math.random() * 4);
      if (!randomNumbers.includes(number)) {
        randomNumbers.push(number);
      }
    }
    setRandomOrder(randomNumbers);
  };

  useEffect(() => {
    getRandomNumber();
  }, []);

  const userRegister = (key, value) => {
    setDataUser({ ...dataUser, [key]: value });
  };

  return (
    <div className="background">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
              <Footer style="loginfooter" />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <Ministery
              click={addUserName}
              handleInput={userNameInput}
              text={alertMsg}
              userName={userName}
            />
          }
        />
        <Route
          path="/hogwarts-letter"
          element={
            <div className="page">
              <CarouselFadeExample
                userName={userName}
                selectCarousel={selectCarousel}
                index={indexCarrusel}
              />
              <Footer />
            </div>
          }
        />
        <Route
          path="/quest-intro"
          element={
            <div className="page">
              <Header />
              <ShortingHat questions={questions} />
              <Footer />
            </div>
          }
        />
        <Route
          path="/quest"
          element={
            <>
              <Header />
              <Form
                questions={questions}
                getRandomNumber={getRandomNumber}
                randomOrder={randomOrder}
                answerArray={answerArray}
                setAnswerArray={setAnswerArray}
                answerSelect={answerSelect}
                answerSelected={answerSelected}
                resultForm={resultForm}
                navigate={navigate}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/result"
          element={
            <>
              <ResultForm
                userName={userName}
                houseSelect={houseSelect}
                userRegister={userRegister}
                dataUser={dataUser}
              />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
