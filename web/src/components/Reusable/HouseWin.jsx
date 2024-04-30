// import confetti from 'https://cdn.skypack.dev/canvas-confetti@1.3.2';
function HouseWin({ gif, welcome, text }) {
  // confetti();
  return (
    <article className="house">
      <img src={gif} alt="" className="house__gif" />
      <div className="house__text">
        <h4>{welcome}</h4>
        <p>{text}</p>
      </div>
    </article>
  );
}

export default HouseWin;
