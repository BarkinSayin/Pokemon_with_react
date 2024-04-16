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
