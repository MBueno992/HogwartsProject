import { Link } from 'react-router-dom';

function Login() {
  const handleClick = (ev) => {
    ev.preventDefault();
  };
  return (
    <section className="login">
      <h3 className="login__title">Iniciar sesión</h3>
      <form className="login__form">
        <label>Usuario</label>
        <input type="text" name="" id="" />
        <label>Contraseña</label>
        <input type="text" name="" id="" />
        <button className="login__form--btn" onClick={handleClick}>
          Iniciar sesión
        </button>
      </form>
      <div className="login__register">
        <p>¿Aún no has recibido tu carta de Hogwarts?</p>
        <Link to="/register">Regístrate como mago aquí</Link>
      </div>
    </section>
  );
}

export default Login;
