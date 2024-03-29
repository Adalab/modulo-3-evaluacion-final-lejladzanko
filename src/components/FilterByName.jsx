import PropTypes from "prop-types";
import "../scss/layout/FilterByName.scss";

function FilterByName({ onChangeName, valueName }) {
  const handleChange = (event) => {
    onChangeName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="filter-form">
      <div className="filter-container">
        <label className="label" htmlFor="name-filter"></label>
        <input
          id="name-filter"
          className="input"
          type="text"
          onChange={handleChange}
          value={valueName}
          placeholder="Enter character name"
        />
      </div>
    </form>
  );
}

FilterByName.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  valueName: PropTypes.string.isRequired,
};

export default FilterByName;
