import React from 'react';

function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
    </div>
  );
}

export default CharacterCard;
