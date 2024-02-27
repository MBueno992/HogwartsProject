import '../../scss/layout/Landing.scss';

function Login({ loginUser, loginInput, email, password }) {
  const handleClick = (ev) => {
    ev.preventDefault();
    loginUser(email, password);
  };
  const handleInput = (ev) => {
    const id = ev.target.id;
    const value = ev.target.value;
    loginInput(id, value);
  };

  return (
    <section className="login">
      <h3 className="login__title">Iniciar sesión</h3>
      <form className="login__form">
        <label>Email</label>
        <input type="text" id="email" value={email} onChange={handleInput} />
        <label>Contraseña</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handleInput}
        />
        <button className="login__form--btn" onClick={handleClick}>
          Iniciar sesión
        </button>
      </form>
      <div className="login__register">
        <p>El mensaje que toque</p>
        <p>¿Aún no has recibido tu carta de Hogwarts?</p>
      </div>
    </section>
  );
}

export default Login;
