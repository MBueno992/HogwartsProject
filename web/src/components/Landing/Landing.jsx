import Login from './Login';
import '../../scss/layout/Landing.scss';
// import { Link } from 'react-router-dom';
import Register from './Register';
import PropTypes from 'prop-types';
import sombrero from '../../images/sombrero.png';
import Articles from '../Articles';
import SwiperComponent from './SwiperComponent';

function Landing({ loginUser, loginInput, loginError, randomQuote }) {
  return (
    <div className="landing">
      {/* <Login
        loginUser={loginUser}
        loginInput={loginInput}
        loginError={loginError}
      />
      <Register /> */}

      <SwiperComponent />
      <aside className="landing__quote">
        <p>{randomQuote.quote}</p>
        <p>{randomQuote.autor}</p>
      </aside>

      <Login />
    </div>
  );
}

Landing.propTypes = {
  loginUser: PropTypes.func,
  loginInput: PropTypes.func,
  loginError: PropTypes.string,
};

export default Landing;
