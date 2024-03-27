import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, matchPath } from 'react-router-dom';
import '../scss/App.scss';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
      })
      .catch(error => console.error('Something went wrong', error));
  }, []);

  const handleNameChange = newValue => {
    setFilterName(newValue);
  };

  const filteredCharacters = characters.filter(character => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  const { pathname } = useLocation();
  const characterDetailRoute = matchPath("/character/:id", pathname);
  const idCharacter = characterDetailRoute ? parseInt(characterDetailRoute.params.id) : null;
  const characterDetailData = characters.find(character => character.id === idCharacter);
  
  
  return (
    <>
    <Header/>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  valueName={filterName}
                  onChangeName={handleNameChange}
                />
                <CharacterList characters={filteredCharacters} />
              </>
            }
          />
          <Route
            path="/character/:id"
            element={<CharacterDetail character={characterDetailData} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
