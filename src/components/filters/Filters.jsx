import PropTypes from 'prop-types';
import FilterByName from './FilterByName';

function Filters({ onChangeName, valueName }) {
  return (
    <form>
      <FilterByName onChangeName={onChangeName} valueName={valueName} />
    </form>
  );
}

Filters.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  valueName: PropTypes.string.isRequired,
};

export default Filters;
