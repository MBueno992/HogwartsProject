import '../../scss/layout/CardDetail.scss';

function CardDetail() {
  return (
    <article key={data.id} className={`cardDetail ${data.house}`}>
      <img
        src={data.image !== '' ? data.image : sinImg}
        alt={data.name}
        className="cardDetail__image"
      />
      <div className="cardDetail__text">
        <h2 className="cardDetail__text--name">{data.name}</h2>
        {nickNames !== '' && (
          <p className="cardDetail__text--prop">
            Otros nombres: <span>{nickNames}</span>
          </p>
        )}

        <p className="cardDetail__text--prop">
          Especie: <span>{data.specie}</span>
        </p>
        <p className="cardDetail__text--prop">
          Estatus:
          {data.alive ? (
            <span>
              Vivo <i className="fa-solid fa-heart-pulse"></i>
            </span>
          ) : (
            <span>
              No vivo <i className="fa-solid fa-skull"></i>
            </span>
          )}
        </p>
        <p className="cardDetail__text--prop">
          Género:<span> {data.gender}</span>
        </p>
        {data.house !== '' && (
          <>
            <p className="cardDetail__text--prop">
              Casa: <span>{data.house}</span>
            </p>
            <img
              src={imgShield[data.house]}
              alt="Escudo de la casa"
              className="cardDetail__shield"
            />
          </>
        )}
      </div>
    </article>
  );
}

export default CardDetail;
