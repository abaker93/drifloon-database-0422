import React from "react";

import { getPokemonByRecord } from "../utilities";

export const EvoPhoto = (pokeId) => {
  const pokemon = getPokemonByRecord(pokeId.pokemon);
  // console.log(pokemon);
  return (
    <>
      {pokemon.map((poke) => (
        <img src={poke.fields.artwork[0].url} alt={poke.fields.name} />
      ))}
    </>
  );
};
