import React from "react";

import Box from "@mui/material/Box";

import { GetEvolutions } from "../utilities";

export const Evolution = (poke) => {
  const evolutions = GetEvolutions(poke.pokemon.fields.evolution);

  // const buildEvolutionTree = () => {
  //   let evolutionTree = [];
  //   let evo1;

  //   evolutions.map((evo) => {
  //     if (evo.fields.evo1[0] === evo1) {
  //       return evo1;
  //     } else {
  //     }
  //   });

  //   console.log(evo1)

  //   return evolutionTree;
  // };

  // buildEvolutionTree();

  return (
    <>
      {evolutions.map((evo) => (
        <Box key={evo.id}>
          <p>{evo.fields.evo1}</p>
          <p>{evo.fields.lvl1}</p>
          <p>{evo.fields.cond1}</p>
          <p>{evo.fields.evo2}</p>
          <p>{evo.fields.lvl2}</p>
          <p>{evo.fields.cond2}</p>
          <p>{evo.fields.evo3}</p>
          <p>{evo.fields.lvl3}</p>
          <p>{evo.fields.cond3}</p>
          <p>{evo.fields.evo4}</p>
        </Box>
      ))}
    </>
  );
};
