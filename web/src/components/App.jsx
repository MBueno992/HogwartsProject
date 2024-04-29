//Hooks
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

//Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/App.scss';
//Componentes
import Header from './Base/Header.jsx';
import Footer from './Base/Footer.jsx';
import Landing from './Base/Landing.jsx';
import Register from './Form/Register.jsx';
import Ministery from './CompletePages/Ministery.jsx';
import ShortingHat from './Form/ShortingHat.jsx';
import Form from './Form/Form.jsx';
import Profile from './Profile/Profile.jsx';
import Wizards from './Wizards/Wizards.jsx';
import WizardDetail from './Wizards/WizardDetail.jsx';
import HogwartsHouse from './Houses/HogwartsHouse.jsx';
import LandingGames from './games/LandingGames.jsx';
import HangedGame from './games/hanged/HangedGame.jsx';
import AdminData from './CompletePages/AdminData.jsx';
import SwiperLetter from './Swipers/SwiperLetter.jsx';
import AboutMe from './CompletePages/AboutMe.jsx';
import Contact from './CompletePages/Contact.jsx';
//Services
import questions from '../services/data.json';
import local from '../services/localStorage.js';
import connectBack from '../services/Login-User.jsx';
import dataBase from '../services/dataBD.jsx';
import router from '../services/router';

function App() {
  const [userName, setUserName] = useState('');
  const [login, setLogin] = useState({ email: '', hashed_password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(local.get('isLogged', false));
  const [randomQuote, setRandomQuote] = useState([]);
  // const [userId, setUserId] = useState('');
  const [loginError, setLoginError] = useState('');
  const [alertMsg, setAlertMsg] = useState('');
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

  //V.Estado Ahorcado
  const [word, setWord] = useState('');
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState('');
  const [gameMsg, setGameMsg] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [winner, setWinner] = useState(true);

  useEffect(() => {
    local.set('user', userName);
    local.set('house', houseSelect);
    local.set('isLogged', isLoggedIn);
  }, [userName, houseSelect, isLoggedIn]);

  //Carga las frases
  useEffect(() => {
    let number = Math.floor(Math.random() * 57);
    dataBase.quote().then((resp) => {
      console.log(resp[number]);
      setRandomQuote(resp[number]);
    });
  }, []);

  //Juego Ahorcado

  useEffect(() => {
    let number = Math.floor(Math.random() * 115);
    dataBase.wordsGame().then((resp) => {
      setWord(resp[number].palabra);
    });
  }, []);

  // const wonGame=()=>{
  //   setWinner(true)

  // }

  const inputLetter = (ev) => {
    const input = ev.target.value.trim().split('');
    const letter = input[input.length - 1];
    setLastLetter('');
    if (letter.match(/[a-zA-ZñÑ]/)) {
      setLastLetter(letter);
      setGameMsg('');
      if (!userLetters.includes(letter)) {
        setUserLetters([...userLetters, letter]);
      }
      if (!word.includes(letter)) {
        setNumberOfErrors(numberOfErrors + 1);
        if (numberOfErrors === 12) {
          setGameMsg('Has perdido');
          restartGame();
        }
      }
    } else {
      setGameMsg('Introduce un carácter válido');
      setLastLetter('');
    }
  };

  const restartGame = () => {
    setLastLetter('');
    setGameMsg('');
    setUserLetters([]);
    setNumberOfErrors(0);
  };

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    const allLetters = wordLetters.every((letter) =>
      userLetters.includes(letter)
    );

    if (allLetters) {
      setGameMsg('Has ganado');
    } else {
      const letterLines = wordLetters.map((letter, i) => {
        if (letter === ' ') {
          return <span key={i} className="space"></span>;
        } else if (userLetters.includes(letter)) {
          return (
            <li key={i} className="hangedGame__letters--letter">
              {letter}
            </li>
          );
        } else {
          return <li key={i} className="hangedGame__letters--letter"></li>;
        }
      });
      return letterLines;
    }
  };

  const renderErrorLetters = () => {
    const wordLetters = word.split('');
    const errorLetters = userLetters.filter(
      (letter) => !wordLetters.includes(letter)
    );
    return errorLetters.map((letter, i) => {
      return (
        <li key={i} className="hangedGame__letters--letter">
          {letter}
        </li>
      );
    });
  };

  //Fin ahorcado

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
          setIsLoggedIn(true);
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

  const updateUserData = () => {
    connectBack.modifyUser(dataUser).then((response) => {
      setAlertMsg(response.result);
      setTimeout(() => {
        router.redirect('/');
      }, 800);
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
      setIsLoggedIn(false);
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
              <Header isLoggedIn={isLoggedIn} logout={logout} />
              <Landing
                data={dataUser}
                randomQuote={randomQuote}
                loginInput={loginInput}
                loginUser={loginUser}
                loginError={loginError}
                logout={logout}
                isLoggedIn={isLoggedIn}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} logout={logout} />
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
              <Header isLoggedIn={isLoggedIn} logout={logout} />
              <ShortingHat questions={questions} />
              <Footer />
            </>
          }
        />
        <Route
          path="/profile/:wizardName"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} logout={logout} />
              <Landing
                data={dataUser}
                randomQuote={randomQuote}
                loginInput={loginInput}
                logout={logout}
                isLoggedIn={isLoggedIn}
              />
              <Profile data={dataUser} logout={logout} />
              <Footer />
            </>
          }
        />
        <Route
          path="/ministery"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} logout={logout} />
              <Ministery
                click={addUserName}
                handleInput={userNameInput}
                text={alertMsg}
                userName={userName}
                isLoggedIn={isLoggedIn}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/hogwarts-letter"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} logout={logout} />
              <SwiperLetter userName={userName} name={dataUser.name} />
              <Footer />
            </>
          }
        />
        <Route
          path="/quest"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} logout={logout} />
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
          path="/house"
          element={
            <>
              <Header houseSelect={houseSelect} />
              <HogwartsHouse houseSelect={houseSelect} />
              <Footer houseSelect={houseSelect} />
            </>
          }
        />
        <Route
          path="/games"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} logout={logout} />
              <LandingGames />
              <Footer />
            </>
          }
        />
        <Route
          path="/hangedGame"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} logout={logout} />
              <HangedGame
                word={word}
                renderSolutionLetters={renderSolutionLetters}
                renderErrorLetters={renderErrorLetters}
                numberOfErrors={numberOfErrors}
                inputLetter={inputLetter}
                lastLetter={lastLetter}
                gameMsg={gameMsg}
                restartGame={restartGame}
                winner={winner}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/admin"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} logout={logout} />
              <AdminData
                dataUser={dataUser}
                alertMsg={alertMsg}
                registerWizard={registerWizard}
                userRegister={userRegister}
                formatDate={formatDate}
                houseSelect={houseSelect}
                isLoggedIn={isLoggedIn}
                updateUserData={updateUserData}
              />
              <Footer />
            </>
          }
        />

        <Route
          path="/about-me"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} logout={logout} />
              <AboutMe />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} logout={logout} />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/wizards"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} logout={logout} />
              <Wizards data={wizardsList} setWizardsList={setWizardsList} />
              <Footer />
            </>
          }
        />

        <Route
          path="/wizards/:idWizard"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} logout={logout} />
              <WizardDetail data={wizardsList} />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
