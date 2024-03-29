import PropTypes from "prop-types";
import "../scss/layout/FilterByName.scss";

function FilterBySpecies({ onChangeSpecies, valueSpecies }) {
  const handleChange = (event) => {
    onChangeSpecies(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <form onSubmit={handleSubmit} className="filter-form">
      <div className="filter-container">
        <label className="label" htmlFor="species-filter">
        </label>
        <input
          id="species-filter"
          className="input"
          type="text"
          onChange={handleChange}
          value={valueSpecies}
          placeholder="Enter species name"
        />
      </div>
    </form>
  );
}

FilterBySpecies.propTypes = {
  onChangeSpecies: PropTypes.func.isRequired,
  valueSpecies: PropTypes.string.isRequired,
};

export default FilterBySpecies;
