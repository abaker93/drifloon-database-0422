import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "./theme";

const Home = lazy(() => import("./routes/Home"));
const Pokedex = lazy(() => import("./routes/Pokedex"));
const Pokemon = lazy(() => import("./routes/Pokemon"));
const Gradients = lazy(() => import("./routes/Gradients"));

export default function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="gradients" element={<Gradients />} />
                <Route path="pokedex">
                  <Route path=":pokedex">
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
