import "./App.css";
import Header from "header.js";
import Inputs from "inputs.js";

function App() {
  const pokemonApiURL = "https://pokeapi.co/api/v2/";

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
