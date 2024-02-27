import Login from './Login';
import '../../scss/layout/Landing.scss';
import { Link } from 'react-router-dom';
import Register from './Register';

function Landing({ loginUser, loginInput, email, password }) {
  return (
    <section className="landing">
      <Link to="/login">
        <div className="landing__login">
          <Login
            loginUser={loginUser}
            loginInput={loginInput}
            email={email}
            password={password}
          />
        </div>
      </Link>
      <Link to="/register">
        <div className="landing__register">
          <Register />
        </div>
      </Link>
    </section>
  );
}

export default Landing;
