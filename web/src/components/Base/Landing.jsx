import Login from '../Form/Login';
import '../../scss/layout/Landing.scss';
import PropTypes from 'prop-types';
import SwiperComponent from '../Landing/SwiperComponent';
import Card from '../Card';

function Landing({
  loginUser,
  loginInput,
  loginError,
  randomQuote,
  logout,
  data,
  isLoggedIn,
}) {
  return (
    <div className="landing">
      <div className="landing__random">
        <SwiperComponent />
        <aside className="landing__random--quote">
          <p>{randomQuote.cita}</p>
          <p>{randomQuote.autor}</p>
        </aside>
      </div>
      {isLoggedIn ? (
        <Card dataUser={data} />
      ) : (
        <Login
          loginInput={loginInput}
          loginUser={loginUser}
          loginError={loginError}
        />
      )}
    </div>
  );
}

Landing.propTypes = {
  loginUser: PropTypes.func,
  loginInput: PropTypes.func,
  loginError: PropTypes.string,
};

export default Landing;
