import PropTypes from 'prop-types';
import '../scss/layout/CharacterCard.scss';

function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>{character.species}</p>
    </div>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
  }

export default CharacterCard;
