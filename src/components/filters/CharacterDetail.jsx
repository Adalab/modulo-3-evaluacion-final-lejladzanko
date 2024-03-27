import PropTypes from 'prop-types';

function CharacterDetail({ character }) {
  return (
    <div className="character-detail">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Species: {character.species}</p>
      <p>Episodes: {character.episode}</p>
    </div>
  );
}

CharacterDetail.propTypes = {
character: PropTypes.string.isRequired,
}

export default CharacterDetail;
