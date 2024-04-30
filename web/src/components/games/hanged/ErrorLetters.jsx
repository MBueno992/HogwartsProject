function ErrorLetters({ renderErrorLetters }) {
  return (
    <div className="hangedGame__error">
      <h2 className="title">Letras falladas:</h2>
      <ul className="hangedGame__letters">{renderErrorLetters()}</ul>
    </div>
  );
}

export default ErrorLetters;
