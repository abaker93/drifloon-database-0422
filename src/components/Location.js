import React from "react";

import Chip from "@mui/material/Chip";

import { GetLocations } from "../utilities";

export const Location = (poke) => {
  return (
    <>
      {GetLocations(poke.pokemon.fields.name, poke.game).map((loc, index) => (
        <>
          {loc.fields.location === "Trade from another game" ? (
            <p>{loc.fields.location}</p>
          ) : loc.fields.location === "Not available in this game" ? (
            <p>{loc.fields.location}</p>
          ) : (
            <Chip key={index} label={loc.fields.location} clickable />
          )}
        </>
      ))}
    </>
  );
};
