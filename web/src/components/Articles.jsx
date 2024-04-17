import { Link } from 'react-router-dom';

function Articles({ photo, desc, linkText, url }) {
  return (
    <article className="entrance">
      <img src={photo} alt={photo} className="entrance_img" />
      <p className="entrance__text">{desc}</p>
      <Link to={url} className="entrance__more">
        {linkText}
      </Link>
    </article>
  );
}

export default Articles;
