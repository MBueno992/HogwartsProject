import '../../scss/layout/LoginRegister.scss';
import PropTypes from 'prop-types';

function Login({ loginUser, loginInput, loginError }) {
  const handleClick = (ev) => {
    ev.preventDefault();
    loginUser();
  };

  return (
    <section className="login">
      <div className="login__title">
        <hr />
        <h3 className="login__title--text">Iniciar sesión</h3>
        <hr />
      </div>
      <form
        className="login__form"
        onChange={(ev) => {
          loginInput(ev);
        }}
      >
        <label>Email</label>
        <input type="text" id="email" />
        <label>Contraseña</label>
        <input type="password" id="password" />
        <button className="login__form--btn" onClick={handleClick}>
          Iniciar sesión
        </button>
      </form>
      <div className="login__register">
        <p className={!loginError ? '' : 'login__register--msg'}>
          {loginError}
        </p>
      </div>
    </section>
  );
}

Login.propTypes = {
  loginUser: PropTypes.func,
  loginInput: PropTypes.func,
  loginError: PropTypes.string,
};

export default Login;
