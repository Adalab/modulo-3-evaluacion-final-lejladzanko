import React, { useState, useEffect } from 'react';
import '../scss/App.scss';
import Filters from './filters/Filters';
import CharacterList from './filters/CharacterList';
import CharacterDetail from './filters/CharacterDetail';

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setFilteredCharacters(data.results);
      })
      .catch(error => console.error('Something went wrong', error));
  }, []);

  const handleNameChange = newValue => {
    setFilterName(newValue);
    setFilteredCharacters(
      characters.filter(character =>
        character.name.toLowerCase().includes(newValue.toLowerCase())
      )
    );
  };

  return (
    <div>
      <h1>Rick and Morty Character Explorer</h1>
      <Filters onChangeName={handleNameChange} valueName={filterName} />
      <CharacterList characters={filteredCharacters} />
    </div>
  );
}

export default App;
