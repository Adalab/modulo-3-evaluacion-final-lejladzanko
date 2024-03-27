import PropTypes from 'prop-types';

function CharacterDetail({ character }) {
  return (
    <div className="character-detail">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
    </div>
  );
}

CharacterDetail.propTypes = {
character: PropTypes.string.isRequired,
}

export default CharacterDetail;
