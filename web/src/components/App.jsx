import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/App.scss';
import Footer from './Footer.jsx';
import Ministery from './Ministery.jsx';
import Header from './Header.jsx';
import CarouselFadeExample from './Letter/Carousel.jsx';
import ShortingHat from './Form/ShortingHat.jsx';
import Form from './Form/Form.jsx';
import questions from '../services/data.json';
import ResultForm from './ResgisterForm/ResultForm.jsx';
import Landing from './Landing/Landing.jsx';
import Profile from './Profile/Profile.jsx';
import local from '../services/localStorage.js';
import connectBack from '../services/Login-User.jsx';
import AboutMe from './AboutMe.jsx';
import router from '../services/router';
import Contact from './Contact.jsx';
import Wizards from './Wizards/Wizards.jsx';
import WizardDetail from './Wizards/WizardDetail.jsx';
import dataBase from '../services/dataBD.jsx';
import ParticlesBack from './ParticlesBack.jsx';
import Register from './Landing/Register.jsx';

function App() {
  const [userName, setUserName] = useState('');
  const [login, setLogin] = useState({ email: '', hashed_password: '' });
  const [randomQuote, setRandomQuote] = useState([]);
  // const [userId, setUserId] = useState('');
  const [loginError, setLoginError] = useState('');
  const [alertMsg, setAlertMsg] = useState('');
  const [indexCarrusel, setIndexCarrusel] = useState(0);
  const [randomOrder, setRandomOrder] = useState([]);
  const [answerArray, setAnswerArray] = useState([]);
  const [answerSelected, setAnswerSelected] = useState([]);
  const [houseSelect, setHouseSelect] = useState(local.get('house', ''));
  const navigate = useNavigate();
  const [wizardsList, setWizardsList] = useState([]);
  const [dataUser, setDataUser] = useState(
    local.get('userData', {
      gender: '',
      name: '',
      wizardName: '',
      birthdate: '',
      province: '',
      city: '',
      house: '',
      email: '',
      password: '',
      image: '',
    })
  );

  useEffect(() => {
    local.set('user', userName);
    local.set('house', houseSelect);
  }, [userName, houseSelect]);

  useEffect(() => {
    let number = Math.floor(Math.random() * 57);
    dataBase.quote().then((resp) => {
      setRandomQuote(resp[number]);
    });
    console.log(randomQuote);
  }, []);

  const loginInput = (ev) => {
    setLogin({ ...login, [ev.target.id]: ev.target.value });
  };

  const loginUser = () => {
    connectBack.sendLogin(login).then((response) => {
      setAlertMsg('');
      if (response.success === true) {
        // setUserId(response.userId);
        local.set('token', response.token);
        connectBack.getProfile(response.wizardName).then((wizardData) => {
          setDataUser(wizardData);
          local.set('userData', wizardData);
          router.redirect(`/profile/${response.wizardName}`);
        });
      } else {
        setLoginError(response.msg);
      }
    });
  };

  const userNameInput = (value) => {
    setUserName(value);
  };

  const userRegister = (key, value) => {
    setDataUser({ ...dataUser, [key]: value });
  };

  useEffect(() => {
    setDataUser((dataUser) => ({
      ...dataUser,
      house: houseSelect,
    }));
  }, [houseSelect]);

  const registerWizard = () => {
    connectBack.sendRegister(dataUser).then((response) => {
      if (response.success === false) {
        setAlertMsg(response.msg);
      } else {
        setAlertMsg('Registrado con exito');
        setTimeout(() => {
          router.redirect(`/profile/${dataUser.wizardName}`);
        }, 800);
      }
    });
  };

  const addUserName = () => {
    if (userName === '') {
      setAlertMsg('Por favor, introduce tu nombre y apellido');
    } else {
      router.redirect('/hogwarts-letter');
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const logout = () => {
    connectBack.logoutUser().then((response) => {
      if (response.success === true) {
        router.redirect('/');
        router.reload();
        local.clear();
      } else {
        setAlertMsg('No se ha podido cerrar la sesión');
      }
    });
  };

  return (
    <div className="background">
      {/* <ParticlesBack /> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Landing
                randomQuote={randomQuote}
                loginInput={loginInput}
                loginUser={loginUser}
                loginError={loginError}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Header />
              <Register
                dataUser={dataUser}
                alertMsg={alertMsg}
                registerWizard={registerWizard}
                userRegister={userRegister}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/quest-intro"
          element={
            <>
              <Header />
              <ShortingHat questions={questions} />
              <Footer />
            </>
          }
        />
        <Route
          path="/profile/:wizardName"
          element={
            <>
              <div
                className={`${!dataUser.house ? 'background' : dataUser.house}`}
              >
                <Header houseSelect={dataUser.house} />
                <Profile data={dataUser} logout={logout} />
                <Footer houseSelect={dataUser.house} />
              </div>
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
        {/* <Route
          path="/register"
          element={
            <div className={houseSelect ? houseSelect : 'background'}>
              <Header houseSelect={houseSelect} />
              <ResultForm
                userName={userName}
                houseSelect={houseSelect}
                userRegister={userRegister}
                dataUser={dataUser}
                alertMsg={alertMsg}
                registerWizard={registerWizard}
                formatDate={formatDate}
              />
              <Footer houseSelect={houseSelect} />
            </div>
          }
        /> */}
        <Route
          path="/about-me"
          element={
            <div className="background">
              <Header />
              <AboutMe />
              <Footer />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="background">
              <Header />
              <Contact />
              <Footer />
            </div>
          }
        />
        <Route
          path="/wizards"
          element={
            <div className="background">
              <Header />
              <Wizards data={wizardsList} setWizardsList={setWizardsList} />
              <Footer />
            </div>
          }
        />

        <Route
          path="/wizards/:idWizard"
          element={
            <div className="background">
              <Header />
              <WizardDetail data={wizardsList} />
              <Footer />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
