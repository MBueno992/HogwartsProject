import Login from './Login';
import '../../scss/layout/Landing.scss';
import PropTypes from 'prop-types';
import SwiperComponent from './SwiperComponent';

function Landing({ loginUser, loginInput, loginError, randomQuote }) {
  return (
    <div className="landing">
      <div className="landing__random">
        <SwiperComponent />
        <aside className="landing__random--quote">
          <p>{randomQuote.quote}</p>
          <p>{randomQuote.autor}</p>
        </aside>
      </div>
      <Login
        loginInput={loginInput}
        loginUser={loginUser}
        loginError={loginError}
      />
    </div>
  );
}

Landing.propTypes = {
  loginUser: PropTypes.func,
  loginInput: PropTypes.func,
  loginError: PropTypes.string,
};

export default Landing;
