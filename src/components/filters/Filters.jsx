import React from 'react';
import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import FilterByImage from './FilterByImage';

function Filters({ onChangeName, onChangeSpecies, onChangeImage, valueName, valueSpecies }) {
  return (
    <form>
      <h3>Filters</h3>
      <FilterByName onChangeName={onChangeName} valueName={valueName} />
    </form>
  );
}

export default Filters;
