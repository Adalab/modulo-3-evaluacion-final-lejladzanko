import PropTypes from "prop-types";
import FilterByName from "./FilterByName";

function Filters({ onChangeName, valueName }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <FilterByName onChangeName={onChangeName} valueName={valueName} />
    </form>
  );
}

Filters.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  valueName: PropTypes.string.isRequired,
};

export default Filters;
