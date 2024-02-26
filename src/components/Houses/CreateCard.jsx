function CreateCard() {
  return (
    <section className="card">
      <span className=""> {validation || ''} </span>
      <a href={urlCard} className="card__url" target="_blank" rel="noreferrer">
        {urlCard}
      </a>
    </section>
  );
}

export default CreateCard;
