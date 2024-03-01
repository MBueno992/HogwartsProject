import Login from './Login';
import '../../scss/layout/Landing.scss';
import { Link } from 'react-router-dom';
import Register from './Register';

function Landing({ loginUser, loginInput, login, loginError }) {
  return (
    <section className="landing">
      <Login
        loginUser={loginUser}
        loginInput={loginInput}
        login={login}
        loginError={loginError}
      />
      <Register />
    </section>
  );
}

export default Landing;
