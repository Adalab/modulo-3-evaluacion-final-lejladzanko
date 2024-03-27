import React from 'react';

function CharacterDetail({ character }) {
  return (
    <div className="character-detail">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
    </div>
  );
}

export default CharacterDetail;
