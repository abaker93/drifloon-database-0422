import React from "react";

import { GetPokemonByRecord } from "../utilities";

export const EvoPhoto = (pokeId) => {
  const pokemon = GetPokemonByRecord(pokeId.pokemon);
  return (
    <>
      {pokemon.map((poke) => (
        <div key={poke.id} className="evoBlock evoImg">
          {poke.fields.artwork ? (
            <img src={poke.fields.artwork[0].url} alt={poke.fields.name} />
          ) : (
            ""
          )}
        </div>
      ))}
    </>
  );
};
