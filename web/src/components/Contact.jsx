import '../scss/layout/Contact.scss';

function Contact() {
  return (
    <>
      <form className="contact">
        <p>Texto agradecimiento</p>
        <label>Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />

        <label>Correo electrónico:</label>
        <input type="email" id="correo" name="correo" required />

        <label>Opinión:</label>
        <textarea
          id="opinion"
          name="opinion"
          rows="4"
          cols="50"
          required
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default Contact;
