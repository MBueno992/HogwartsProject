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
import connectBack from '../services/Login-User.jsx';
import AboutMe from './AboutMe.jsx';

function App() {
  const [userName, setUserName] = useState(local.get('user', ''));
  const [login, setLogin] = useState({ email: '', password: '' });
  const [alertMsg, setAlertMsg] = useState('');
  const [indexCarrusel, setIndexCarrusel] = useState(0);
  const [randomOrder, setRandomOrder] = useState([]);
  const [answerArray, setAnswerArray] = useState([]);
  const [answerSelected, setAnswerSelected] = useState([]);
  const [houseSelect, setHouseSelect] = useState(local.get('house', ''));
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState({
    name: userName,
    wizardName: '',
    birthdate: '',
    house: houseSelect,
    email: '',
    password: '',
    image: '',
  });

  useEffect(() => {
    local.set('user', userName);
    local.set('house', houseSelect);
  }, [userName, houseSelect]);

  const loginInput = (ev) => {
    setLogin({ ...login, [ev.target.id]: ev.target.value });
  };

  const loginUser = () => {
    connectBack.sendLogin(login).then((response) => {
      if (response.success === false) {
        setAlertMsg(response.msg);
      }
    });
  };

  const userNameInput = (value) => {
    setUserName(value);
  };

  const userRegister = (key, value) => {
    setDataUser({ ...dataUser, [key]: value });
  };

  const registerWizard = () => {
    connectBack.sendRegister(dataUser).then((response) => {
      if (response.success === false) {
        setAlertMsg(response.msg);
      }
    });
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

  return (
    <div className="background">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing
                loginUser={loginUser}
                loginInput={loginInput}
                login={login}
                alertMsg={alertMsg}
              />
              <Footer style="loginfooter" />
            </>
          }
        />
        <Route
          path="/ministery"
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
            <div className="background">
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
            <div className="background">
              <Header />
              <ShortingHat questions={questions} />
              <Footer />
            </div>
          }
        />
        <Route
          path="/quest"
          element={
            <div className="background">
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
            </div>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <ResultForm
                userName={userName}
                houseSelect={houseSelect}
                userRegister={userRegister}
                dataUser={dataUser}
                alertMsg={alertMsg}
                registerWizard={registerWizard}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/about-me"
          element={
            <>
              <Header />
              <AboutMe />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
