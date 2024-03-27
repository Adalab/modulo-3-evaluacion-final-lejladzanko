import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

function CharacterList({ characters }) {
  return (
    <div className="character-list">
      {characters.map(character => (
        <Link key={character.id} to={`/character/${character.id}`}>
          <CharacterCard character={character} />
        </Link>
      ))}
    </div>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default CharacterList;
