import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../scss/layout/CharacterDetail.scss";

function CharacterDetail() {
  const [character, setCharacter] = useState(null); 
  const { id: characterId } = useParams();
  const aliveEmoji = "🔋";
  const deadEmoji = "🪫";

  useEffect(() => {
    const storedData = localStorage.getItem(`character-${characterId}`);

    if (storedData) {
      setCharacter(JSON.parse(storedData));
    } else {
      fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then((response) => response.json())
        .then((data) => {
          setCharacter(data);
          localStorage.setItem(`character-${characterId}`, JSON.stringify(data));
        })
        .catch((error) => console.error("Something went wrong", error));
    }
  }, [characterId]);

  if (character === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="character-detail">
      <div className="character-detail__container">
        <img src={character.image} alt={character.name} className="character-detail__image" />
        <h4 className="character-detail__name">{character.name}</h4>
        <div className="details-container">
          <div className="detail">
            <span className="detail-label">Species:</span>
            <span className="detail-value">{character.species}</span>
          </div>
          <div className="detail">
            <span className="detail-label">Origin:</span>
            <span className="detail-value">{character.origin.name}</span>
          </div>
          <div className="detail">
            <span className="detail-label">Status:</span>
            <span className="detail-value">
              {character.status} {character.status === "Alive" ? aliveEmoji : character.status === "Dead" ? deadEmoji : "❓"}
            </span>
          </div>
          <div className="detail">
            <span className="detail-label">Episodes:</span>
            <span className="detail-value">{character.episode.length}</span>
          </div>
        </div>
        <Link to="/" className="back-button">Volver al inicio</Link>
      </div>
    </div>
  );
}

export default CharacterDetail;
