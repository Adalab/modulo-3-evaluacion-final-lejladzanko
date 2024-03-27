import PropTypes from 'prop-types';
import '../scss/layout/FilterByName.scss';

function FilterByName({ onChangeName, valueName }) {
  const handleChange = (event) => {
    onChangeName(event.target.value);
  };

  return (
    <div className="filter-container">
      <label className="label" htmlFor="name-filter"></label>
      <input
        id="name-filter"
        className="input"
        type="text"
        onChange={handleChange}
        value={valueName}
        placeholder="Escribe el nombre del personaje"
      />
    </div>
  );
}

FilterByName.propTypes = {
    onChangeName: PropTypes.func.isRequired,
    valueName: PropTypes.string.isRequired,
};

export default FilterByName;
