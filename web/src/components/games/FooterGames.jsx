function FooterGames({ handleInstructions, resetGame }) {
  return (
    <aside className="gameOptions">
      <button className="gameOptions__btn" onClick={handleInstructions}>
        Instrucciones
      </button>
      <button className="gameOptions__btn" onClick={resetGame}>
        Reiniciar partida
      </button>
    </aside>
  );
}

export default FooterGames;
