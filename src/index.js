import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import PokemonList from "./routes/PokemonList";
import Pokemon from "./routes/Pokemon";
import GradientTest from "./routes/GradientTest";
import "./styles/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="pokedex/national">
            <Route index element={<PokemonList />} />
            <Route path=":pokedexId">
              <Route index element={<Pokemon />} />
              <Route path=":pokedexAltId" element={<Pokemon />} />
            </Route>
          </Route>
          <Route path="gradients" element={<GradientTest />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
