import { useState, useEffect } from "react";

function PokemonCard({ pokemon, filterInput }) {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  //Pokemonun özelliklerine ulaşmamızı sağlayan fetch işlemi
  const fetchPokemonDetails = async () => {
    try {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      setPokemonDetails(data);
    } catch (error) {
      console.error("Error fetching Pokemon details:", error);
    }
  };

  //Her render olduğunda bu fonksiyonu çalıştırıyor
  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  //Baş harflerini büyük yapan fonksiyon
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    //Conditional render ile filtreleme işlemi
    (pokemonDetails || null) &&
    pokemonDetails.name
      .toLowerCase()
      .includes(filterInput.pokemonName.toLowerCase()) &&
    pokemonDetails.types.some((type) =>
      type.type.name.toLowerCase().includes(filterInput.typeName.toLowerCase())
    ) && (
      <div className="pokemon-card">
        <img
          src={pokemonDetails.sprites.other["official-artwork"].front_default}
          alt={pokemonDetails.name}
          className="pokemon-image"
        />
        <h3 className="pokemon-name">{`${
          pokemonDetails.id
        }. ${capitalizeFirstLetter(pokemonDetails.name)}`}</h3>
        <h4>Types:</h4>
        <div className="types">
          {pokemonDetails.types.map((type, index) => (
            <ul key={index} className="type-name">
              {capitalizeFirstLetter(type.type.name)}
            </ul>
          ))}
        </div>
      </div>
    )
  );
}

export default PokemonCard;
