import PropTypes from 'prop-types';

function ScoreBoard({ msgResult, playerScore, pcScore }) {
  return (
    <section className="scoreboard">
      <h3 className="scoreboard__msg">{msgResult}</h3>
      <p className="scoreboard__score">{`Jugador ${playerScore}`}</p>
      <p className="scoreboard__score">{`Ordenador ${pcScore}`}</p>
    </section>
  );
}
ScoreBoard.propTypes = {
  msgResult: PropTypes.string,
  playerScore: PropTypes.number,
  pcScore: PropTypes.number,
};

export default ScoreBoard;
