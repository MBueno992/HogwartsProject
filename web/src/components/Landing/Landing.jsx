import Login from './Login';
import '../../scss/layout/Landing.scss';
// import { Link } from 'react-router-dom';
import Register from './Register';
import PropTypes from 'prop-types';

function Landing({ loginUser, loginInput, loginError }) {
  return (
    <section className="landing">
      <Login
        loginUser={loginUser}
        loginInput={loginInput}
        loginError={loginError}
      />
      <Register />
    </section>
  );
}

Landing.propTypes = {
  loginUser: PropTypes.func,
  loginInput: PropTypes.func,
  loginError: PropTypes.string,
};

export default Landing;
