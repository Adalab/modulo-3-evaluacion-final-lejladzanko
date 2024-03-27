function FilterByName({ onChangeName, valueName }) {
  const handleChange = (event) => {
    onChangeName(event.target.value);
  };

  return (
    <div>
      <label htmlFor="name-filter">Filtra por nombre</label>
      <input
        id="name-filter"
        type="text"
        onChange={handleChange}
        value={valueName}
        placeholder="Escribe el nombre del personaje"
      />
    </div>
  );
}

export default FilterByName;
