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
import ShortingHat from './CompletePages/ShortingHat.jsx';
import Form from './games/QuestHouse/Form.jsx';
import Wizards from './Wizards/Wizards.jsx';
import WizardDetail from './Wizards/WizardDetail.jsx';
import HogwartsHouse from './Houses/HogwartsHouse.jsx';
import LandingGames from './games/LandingGames.jsx';
import HangedGame from './games/hanged/HangedGame.jsx';
import RockPaperScissors from './games/rockPaperScissors/RockPaperScissors.jsx';
import AdminData from './CompletePages/AdminData.jsx';
import SwiperLetter from './Swipers/SwiperLetter.jsx';
import AboutMe from './CompletePages/AboutMe.jsx';
import Contact from './CompletePages/Contact.jsx';
//Services
import questions from '../services/data.json';
import local from '../services/localStorage.js';
import connectBack from '../services/LoginBD.jsx';
import dataBase from '../services/dataBD.jsx';
import router from '../services/router';
import Construction from './Base/Construction.jsx';
import MemoGame from './games/Memory/MemoGame.jsx';

function App() {
  const [userName, setUserName] = useState('');
  const [login, setLogin] = useState({ email: '', hashed_password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(local.get('isLogged', false));
  const [randomQuote, setRandomQuote] = useState([]);
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
  const [winner, setWinner] = useState(false);
  const [endGame, setEndGame] = useState(false);

  useEffect(() => {
    local.set('user', userName);
    local.set('house', houseSelect);
    local.set('isLogged', isLoggedIn);
  }, [userName, houseSelect, isLoggedIn]);

  //Carga las frases
  useEffect(() => {
    let number = Math.floor(Math.random() * 57);
    dataBase.quote().then((resp) => {
      setRandomQuote(resp[number]);
    });
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
    });
  };

  const addUserName = () => {
    if (userName === '') {
      setAlertMsg('Por favor, introduce tu nombre y apellido');
    } else {
      router.redirect('/hogwarts-letter');
    }
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

  //Juego Ahorcado

  useEffect(() => {
    loadWord();
  }, []);

  const [instruc, setInstruc] = useState(false);
  const handleInstructions = () => {
    setInstruc(!instruc);
  };
  const loadWord = () => {
    let number = Math.ceil(Math.random() * 115);
    dataBase.wordsGame().then((resp) => {
      setWord(resp[number].palabra);
    });
  };

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
          setEndGame(true);
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
    setWinner(false);
    setEndGame(false);
    loadWord();
  };

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
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

  //Snape, Neville, Nagini
  const [pcOption, setPcOption] = useState('');
  const [userOption, setUserOption] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [pcScore, setPcScore] = useState(0);
  const [msgResult, setMsgResult] = useState('Selecciona una jugada');

  const getRandomMove = () => {
    return Math.ceil(Math.random() * 3);
  };

  const computerMove = () => {
    const move = getRandomMove();
    if (move === 1) {
      setPcOption('Snape');
    } else if (move === 2) {
      setPcOption('Neville');
    } else {
      setPcOption('Nagini');
    }
    return pcOption;
  };

  const gameRules = () => {
    if (userOption === '') {
      setMsgResult('Selecciona una jugada');
    } else if (userOption === pcOption) {
      setMsgResult('¡Empate!');
    } else if (userOption === 'Snape' && pcOption === 'Neville') {
      setMsgResult('¡Por las barbas de Merlín, me has ganado!');
      setPlayerScore(playerScore + 1);
    } else if (userOption === 'Snape' && pcOption === 'Nagini') {
      setMsgResult('Mírame, tienes los ojos de tu madre. Has perdido.');
      setPcScore(pcScore + 1);
    } else if (userOption === 'Neville' && pcOption === 'Snape') {
      setMsgResult('¡50 puntos menos para Gryffindor!. Has perdido.');
      setPcScore(pcScore + 1);
    } else if (userOption === 'Neville' && pcOption === 'Nagini') {
      setMsgResult('¡Es hora de terminar esto!. Has ganado.');
      setPlayerScore(playerScore + 1);
    } else if (userOption === 'Nagini' && pcOption === 'Snape') {
      setMsgResult('Always Snape. Has ganado.');
      setPlayerScore(playerScore + 1);
    } else if (userOption === 'Nagini' && pcOption === 'Neville') {
      setMsgResult('Nunca hemos tenido tanto que perder. Has perdido.');
      setPcScore(pcScore + 1);
    }
    finishGame();
  };

  const finishGame = () => {
    if (playerScore === 5) {
      setWinner(true);
    }
    if (pcScore === 5) {
      setEndGame(true);
    }
  };

  const resetRockPaper = () => {
    setPcScore(0);
    setPlayerScore(0);
    setUserOption('');
    setPcOption('');
    setMsgResult('Selecciona una jugada');
    setWinner(false);
    setEndGame(false);
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
            <div className={houseSelect ? houseSelect : 'background'}>
              <Header
                isLoggedIn={isLoggedIn}
                logout={logout}
                houseSelect={houseSelect}
              />{' '}
              <HogwartsHouse houseSelect={houseSelect} />
              <Footer houseSelect={houseSelect} />
            </div>
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
                userLetters={userLetters}
                renderSolutionLetters={renderSolutionLetters}
                renderErrorLetters={renderErrorLetters}
                numberOfErrors={numberOfErrors}
                inputLetter={inputLetter}
                lastLetter={lastLetter}
                gameMsg={gameMsg}
                restartGame={restartGame}
                winner={winner}
                setWinner={setWinner}
                handleInstructions={handleInstructions}
                instruc={instruc}
                endGame={endGame}
                setEndGame={setEndGame}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/rockpaper"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} logout={logout} />
              <RockPaperScissors
                computerMove={computerMove}
                gameRules={gameRules}
                pcOption={pcOption}
                userOption={userOption}
                setUserOption={setUserOption}
                pcScore={pcScore}
                playerScore={playerScore}
                msgResult={msgResult}
                handleInstructions={handleInstructions}
                instruc={instruc}
                restart={resetRockPaper}
                winner={winner}
                setWinner={setWinner}
                endGame={endGame}
                setEndGame={setEndGame}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/memory"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} logout={logout} />
              <MemoGame />
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
          path="/construction"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} logout={logout} />
              <Construction />
              <Footer />
            </>
          }
        />
        {/* <Route
          path="/wizards"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} logout={logout} />
              <Wizards data={wizardsList} setWizardsList={setWizardsList} />
              <Footer />
            </>
          }
        /> */}

        {/* <Route
          path="/wizards/:idWizard"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} logout={logout} />
              <WizardDetail data={wizardsList} />
              <Footer />
            </>
          }
        /> */}
      </Routes>
    </div>
  );
}

export default App;
