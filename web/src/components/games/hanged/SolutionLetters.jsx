function SolutionLetters({ renderSolutionLetters }) {
  return (
    <div className="hangedGame__solution">
      {/* <h2 className="title">Solución:</h2> */}
      <ul className="hangedGame__letters">{renderSolutionLetters()}</ul>
    </div>
  );
}

export default SolutionLetters;
