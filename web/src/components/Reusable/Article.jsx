function Article({ gif, welcome, text }) {
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

export default Article;
