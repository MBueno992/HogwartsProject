import { useEffect } from 'react';
import PropTypes from 'prop-types';

function SolutionLetters({
  word,
  userLetters,
  setWinner,
  renderSolutionLetters,
}) {
  useEffect(() => {
    const wordLetters = word.split('');
    const allLetters = wordLetters.every((letter) => {
      if (letter === ' ') {
        return true;
      }
      return userLetters.includes(letter);
    });
    if (allLetters) {
      setWinner(true);
    }
  }, [word, userLetters, setWinner]);

  return (
    <div className="hangedGame__solution">
      <ul className="hangedGame__letters">{renderSolutionLetters()}</ul>
    </div>
  );
}

SolutionLetters.propTypes = {
  word: PropTypes.string,
  userLetters: PropTypes.array,
  setWinner: PropTypes.bool,
  renderSolutionLetters: PropTypes.func,
};

export default SolutionLetters;
