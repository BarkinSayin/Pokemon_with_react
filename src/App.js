import "./App.css";
import { useState, useEffect } from "react";
import Header from "header.js";
import Inputs from "inputs.js";
import Footer from "footer.js";
import PokemonCard from "pokemon-card.js";

function App() {
  const pokemonApiURL = "https://pokeapi.co/api/v2/";

  const [filterInput, setfilterInput] = useState({
    pokemonName: "",
    typeName: "",
  });
  const [pokemonList, setPokemonList] = useState([]);

  const getAllPokemons = async (limit = 151, offset = 0) => {
    try {
      const result = await fetch(
        `${pokemonApiURL}pokemon?limit=${limit}&offset=${offset}`
      );
      const data = await result.JSON();
      setPokemonList(data);
    } catch (error) {
      console.error("Error fetchingPokemon list:", error);
    }
  };

  useEffect(() => getAllPokemons(), []);

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Inputs />
        <div className="pokemon-card-container">
          {pokemonList.map((pokemon, index) => (
            <PokemonCard
              key={index}
              pokemon={pokemon}
              filterInput={filterInput}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
