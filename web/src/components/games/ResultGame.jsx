function ResultGame({ winner }) {
  return (
    <section className="resultGame">
      {winner ? (
        <article className="resultGame__text">
          <i className="fa-solid fa-xmark resultGame__close"></i>
          <h3>¡Enhorabuena, has ganado!</h3>
          <p>
            ¡¿La magia está de tu lado o tal vez has utilizado un hechizo
            confundus a tu contrincante?!
          </p>
        </article>
      ) : null}
    </section>
  );
}

export default ResultGame;
