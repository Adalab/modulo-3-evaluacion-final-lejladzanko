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
        <select
          id="species-filter"
          className="input"
          onChange={handleChange}
          value={valueSpecies}
        >
          <option value="">Select species</option>
          <option value="human">Human</option>
          <option value="alien">Alien</option>
        </select>
      </div>
    </form>
  );
}

FilterBySpecies.propTypes = {
  onChangeSpecies: PropTypes.func.isRequired,
  valueSpecies: PropTypes.string.isRequired,
};

export default FilterBySpecies;
