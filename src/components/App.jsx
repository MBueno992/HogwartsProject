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
import Particles from '@tsparticles/react';
// import Particles from '@tsparticles/react';
// import { loadSlim } from '@tsparticles/slim';
import particlesConfig from '../services/particles-config.js';
import ResultForm from './Form/ResultForm.jsx';

function App() {
  const [userName, setUserName] = useState('');
  const [alertMsg, setAlertMsg] = useState('');
  const [indexCarrusel, setIndexCarrusel] = useState(0);
  const [randomOrder, setRandomOrder] = useState([]);
  const [answerArray, setAnswerArray] = useState([]);
  const [answerSelected, setAnswerSelected] = useState([]);
  const [finalResult, setFinalResult] = useState([]);
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState({
    userName: '',
    wizardName: '',
    birthdate: '',
  });

  // const [init, setInit] = useState(false);

  // useEffect(() => {
  //   initParticlesEngine(async (engine) => {
  //     await loadSlim(engine);
  //   }).then(() => {
  //     setInit(true);
  //   });
  // }, []);

  const userNameInput = (value) => {
    setUserName(value);
  };

  const addUserName = () => {
    if (userName === '') {
      setAlertMsg('Por favor, introduce tu nombre');
    } else {
      navigate('/hogwarts');
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
    setFinalResult(orderResults);
    console.log(finalResult);
    console.log(result);
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
      {/* {init && <Particles options={particlesConfig} />} */}
      <Routes>
        <Route
          path="/"
          element={
            <Ministery
              click={addUserName}
              input={userNameInput}
              text={alertMsg}
            />
          }
        />
        <Route
          path="/hogwarts"
          element={
            <div className="page">
              <Particles options={particlesConfig} />
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
          path="/sombrero-seleccionador"
          element={
            <>
              <Particles options={particlesConfig} />
              <Header />
              <ShortingHat questions={questions} />
              <Footer />
            </>
          }
        />
        <Route
          path="/cuestionario"
          element={
            <>
              <Particles options={particlesConfig} />
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
              {/* <Header /> */}
              <ResultForm
                finalResult={finalResult}
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
