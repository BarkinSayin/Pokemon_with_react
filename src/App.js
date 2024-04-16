import "./App.css";
import { useState, useEffect } from "react";
import Header from "header.js";
import Inputs from "inputs.js";

function App() {
  const pokemonApiURL = "https://pokeapi.co/api/v2/";

  const [pokemonInput, setPokemonInput] = useState({
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
      </div>
    </div>
  );
}

export default App;
