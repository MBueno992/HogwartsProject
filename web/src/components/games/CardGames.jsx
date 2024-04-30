import { Link } from 'react-router-dom';

function CardGames({ url, img, gameTitle, desc }) {
  return (
    <li>
      <Link to={url}>
        <div className="flip-card">
          <div className="flip-card__inner">
            <div className="flip-card__inner--front">
              <img src={img} alt="Ahorcado" />
              <p className="title">{gameTitle}</p>
            </div>
            <div className="flip-card__inner--back">
              <p className="title">{gameTitle}</p>
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default CardGames;
