import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./routes/Home";
import Pokedex from "./routes/Pokedex";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="pokedex">
              <Route path="national" element={<Pokedex />}></Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}
