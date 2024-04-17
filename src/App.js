import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Header.js";
import Inputs from "./input.js";
import Footer from "./Footer.js";
import PokemonCard from "./pokemon-card.js";

function App() {
  const pokemonApiURL = "https://pokeapi.co/api/v2/";

  const [filterInput, setfilterInput] = useState({
    pokemonName: "",
    typeName: "",
  });
  const [pokemonList, setPokemonList] = useState([]);

  //Belirlenen limit kadar pokemon verisi çeken fonksiyonu
  const getAllPokemons = async (limit = 151, offset = 0) => {
    try {
      const result = await fetch(
        `${pokemonApiURL}pokemon?limit=${limit}&offset=${offset}`
      );
      const data = await result.json();
      setPokemonList(data.results);
    } catch (error) {
      console.error("Error fetchingPokemon list:", error);
    }
  };

  //Sadece ilk render'dan sonra bu fonksiyonu çalıştırır
  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Inputs filterInput={filterInput} setfilterInput={setfilterInput} />
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
