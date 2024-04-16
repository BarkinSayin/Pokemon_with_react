import { useState, useEffect } from "react";

function PokemonCard(pokemon, filterInput) {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  return (
    <div className="pokemon-card">
      <img
        src={pokemonDetails.sprites.other["official-artwork"].front_default}
        alt={pokemonDetails.name}
        className="pokemon-image"
      />
      <h3 className="pokemon-name">
        {`${pokemonDetails.id}.${pokemonDetails.name}`}
      </h3>
      <h4>Types:</h4>
      <div className="types">
        {pokemonDetails.types.map((type, index) => (
          <ul key={index} className="type-name">
            {type.type.name}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
