import Login from './Login';
import '../../scss/layout/Landing.scss';
import { Link } from 'react-router-dom';
import Register from './Register';

function Landing({ loginUser, loginInput, login, alertMsg }) {
  return (
    <section className="landing">
      <Login
        loginUser={loginUser}
        loginInput={loginInput}
        login={login}
        alertMsg={alertMsg}
      />
      <Register />
    </section>
  );
}

export default Landing;
