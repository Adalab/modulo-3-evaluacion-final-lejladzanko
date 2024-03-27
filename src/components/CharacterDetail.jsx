import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CharacterDetail({ character }) {
  return (
    <div>
      <img src={character.image} alt={character.name} />
      <h4>{character.name}</h4>
      <div className="details-container">
        <div className="detail">
          <span className="detail-label">Species: </span>
          <span className="detail-value">{character.species}</span>
        </div>
        <div className="detail">
          <span className="detail-label">Origin: </span>
          <span className="detail-value">{character.origin.name}</span>
        </div>
        <div className="detail">
          <span className="detail-label">Status: </span>
          <span className="detail-value">{character.status}</span>
        </div>
      </div>
      <Link to="/" className="back-button">Volver al inicio</Link>
    </div>
  );
}



CharacterDetail.propTypes = {
character: PropTypes.object.isRequired,
}

export default CharacterDetail;

