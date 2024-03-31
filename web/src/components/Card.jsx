function Card({ dataUser, houseSelect, imageHouse, formatDate }) {
  const { name, wizardName, birthdate, image } = dataUser;
  return (
    <article className="register__data">
      <img
        src={image || imageHouse[houseSelect].Shield}
        alt={wizardName || ''}
      />
      <h3>
        Alumno/a: <span>{name || ''}</span>{' '}
      </h3>
      <h4>
        Apodo: <span>{wizardName || ''} </span>
      </h4>
      <p>
        Fecha de nacimiento:{' '}
        <span>{!birthdate ? '' : formatDate(birthdate)} </span>
      </p>
      <p>
        Miembro de la casa: <span>{houseSelect} </span>
      </p>
    </article>
  );
}

export default Card;
