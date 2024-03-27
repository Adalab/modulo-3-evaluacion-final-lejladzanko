import React from 'react';
import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import FilterByImage from './FilterByImage';

function Filters({ onChangeName, valueName }) {
  return (
    <form>
      <FilterByName onChangeName={onChangeName} valueName={valueName} />
    </form>
  );
}

export default Filters;
