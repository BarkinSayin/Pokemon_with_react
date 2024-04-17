function Inputs({ filterInput, setFilterInput }) {
  return (
    <form className="filters">
      <input
        type="text"
        id="pokemonNameInput"
        value={filterInput.pokemonName}
        placeholder="Find Pokemon..."
        onChange={(event) =>
          setFilterInput({
            ...filterInput,
            pokemonName: event.target.value,
          })
        }
      />
      <input
        type="text"
        id="typeNameInput"
        value={filterInput.typeName}
        placeholder="Find Type..."
        onChange={(event) =>
          setFilterInput({
            ...filterInput,
            typeName: event.target.value,
          })
        }
      />
    </form>
  );
}

export default Inputs;
