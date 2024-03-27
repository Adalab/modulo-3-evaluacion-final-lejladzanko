import PropTypes from "prop-types";
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

function Filters({ onChangeName, valueName, onChangeSpecies, valueSpecies }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <FilterByName onChangeName={onChangeName} valueName={valueName} />
      <FilterBySpecies onChangeSpecies={onChangeSpecies} valueSpecies={valueSpecies} /> 
    </form>
  );
}

Filters.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  valueName: PropTypes.string.isRequired,
  onChangeSpecies: PropTypes.func.isRequired,
  valueSpecies: PropTypes.string.isRequired,
};

export default Filters;
