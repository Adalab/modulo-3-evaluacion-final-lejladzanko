import PropTypes from "prop-types";
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

function Filters({ onChangeName, valueName, onChangeSpecies, valueSpecies }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <FilterByName onChangeName={onChangeName} valueName={valueName} onSubmit={handleSubmit}/>
      <FilterBySpecies onChangeSpecies={onChangeSpecies} valueSpecies={valueSpecies} onSubmit={handleSubmit}/> 
    </div>
  );
}

Filters.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  valueName: PropTypes.string.isRequired,
  onChangeSpecies: PropTypes.func.isRequired,
  valueSpecies: PropTypes.string.isRequired,
};

export default Filters;
