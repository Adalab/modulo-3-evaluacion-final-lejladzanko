import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';

function CharacterList({ characters }) {
  return (
    <div className="character-list">
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default CharacterList;
