import React from "react";

import Chip from "@mui/material/Chip";

import { GetLocations } from "../utilities";

export const Location = (poke) => {
  return (
    <>
      {GetLocations(poke.pokemon.fields.name, poke.game).map((loc, index) => (
        <Chip key={index} label={loc.fields.location} clickable />
      ))}
    </>
  );
};
