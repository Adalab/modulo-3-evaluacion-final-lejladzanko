import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import "../scss/App.scss";
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";

function App() {
  const [characters, setCharacters] = useState([]);
  const [storedCharacters, setStoredCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [sortedCharacters, setSortedCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterSpecies, setFilterSpecies] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("characters");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setCharacters(parsedData);
      setStoredCharacters(parsedData);
      setFilteredCharacters(parsedData);
      setSortedCharacters(parsedData);
    } else {
      fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => {
          const sorted = data.results.sort((a, b) =>
            a.name < b.name ? -1 : 1
          );
          setCharacters(sorted);
          setStoredCharacters(sorted);
          setFilteredCharacters(sorted);
          setSortedCharacters(sorted);
          localStorage.setItem("characters", JSON.stringify(sorted));
        })
        .catch((error) => console.error("Something went wrong", error));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "filteredCharacters",
      JSON.stringify(filteredCharacters)
    );
  }, [filteredCharacters]);

  const handleNameChange = (newValue) => {
    setFilterName(newValue);
    const filtered = storedCharacters.filter((character) =>
      character.name.toLowerCase().includes(newValue.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };

  const handleSpeciesChange = (newValue) => {
    setFilterSpecies(newValue);
    const filtered = characters.filter((character) =>
      character.species.toLowerCase().includes(newValue.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };

  const { pathname } = useLocation();
  const characterDetailRoute = matchPath("/character/:id", pathname);
  const idCharacter = characterDetailRoute
    ? parseInt(characterDetailRoute.params.id)
    : null;
  const characterDetailData = characters.find(
    (character) => character.id === idCharacter
  );

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  valueName={filterName}
                  onChangeName={handleNameChange}
                  onChangeSpecies={handleSpeciesChange}
                  valueSpecies={filterSpecies}
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
