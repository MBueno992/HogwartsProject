import '../../scss/layout/Landing.scss';

function Login({ loginUser, loginInput, loginError }) {
  const handleClick = (ev) => {
    ev.preventDefault();
    loginUser();
  };

  return (
    <section className="login">
      <h3 className="login__title">Iniciar sesión</h3>
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
        <p>{loginError}</p>
        <p>¿Aún no has recibido tu carta de Hogwarts?</p>
      </div>
    </section>
  );
}

export default Login;
