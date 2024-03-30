import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "../scss/App.scss";
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import NotFound from "./NotFound";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterSpecies, setFilterSpecies] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("characters");
    if (storedData) {
      setCharacters(JSON.parse(storedData));
    } else {
      fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => {
          const sorted = data.results.sort((a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
          });
          setCharacters(sorted);
          localStorage.setItem("characters", JSON.stringify(sorted));
        })
        .catch((error) => console.error("Something went wrong", error));
    }
  }, []);

  const filteredCharacters = characters.filter(character => {
    return character.name.toLowerCase().includes(filterName.toLowerCase()) &&
           character.species.toLowerCase().includes(filterSpecies.toLowerCase());
  });

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
                  onChangeName={setFilterName}
                  onChangeSpecies={setFilterSpecies}
                  valueSpecies={filterSpecies}
                />
                <CharacterList characters={filteredCharacters} />
              </>
            }
          />
          <Route
            path="/character/:id"
            element={<CharacterDetail />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
