import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { GetPokemonByRecord } from "../utilities";

export const EvoPhoto = (pokeId) => {
  const pokemon = GetPokemonByRecord(pokeId.pokemon);
  return (
    <>
      {pokemon.map((poke) => (
        <Card key={poke.id}>
          <CardContent>
            <img src={poke.fields.artwork[0].url} alt={poke.fields.name} />
          </CardContent>
        </Card>
      ))}
    </>
  );
};
