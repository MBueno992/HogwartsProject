import { Link } from 'react-router-dom';
import '../../scss/layout/Reusable.scss';

function ReturnBtn({ url, text }) {
  return (
    <Link to={url} className="return">
      <i className="fa-solid fa-wand-sparkles"></i>
      {text}
    </Link>
  );
}

export default ReturnBtn;
