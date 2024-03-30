import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
import "../scss/layout/CharacterList.scss";

function CharacterList({ characters, valueName }) {
  return (
    <div className="character-list">
      {characters.length > 0 ? (
        characters.map((character) => (
          <Link key={character.id} to={`/character/${character.id}`}>
            <CharacterCard character={character} />
          </Link>
        ))
      ) : (
        <p className="character-message">
          No hay ningún personaje que coincida con la palabra {valueName}
        </p>
      )}
    </div>
  );
}
CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
  valueName: PropTypes.string.isRequired
};

export default CharacterList;
