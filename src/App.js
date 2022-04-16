import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import Home from "./routes/Home";
import Pokedex from "./routes/Pokedex";
import Pokemon from "./routes/Pokemon";
import { theme } from "./theme";

export default function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="pokedex">
                  <Route path="national">
                    <Route index element={<Pokedex />} />
                    <Route path=":pokedexId">
                      <Route index element={<Pokemon />} />
                      <Route path=":pokedexAltId" element={<Pokemon />} />
                    </Route>
                  </Route>
                </Route>
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}
