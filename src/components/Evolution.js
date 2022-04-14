import React from "react";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import { GetEvolutions } from "../utilities";

export const Evolution = (poke) => {
  const evolutions = GetEvolutions(poke.pokemon.fields.evolution);

  return (
    <>
      {evolutions.map((evo) => (
        <Stack key={evo.id} direction="row" spacing={1}>
          <Box>
            {evo.fields.evo1
              ? evo.fields.evo1.map((cond, index) => <p key={index}>{cond}</p>)
              : ""}
          </Box>
          <Box>
            {evo.fields.lvl1
              ? evo.fields.lvl1.map((cond, index) => <p key={index}>{cond}</p>)
              : ""}
          </Box>
          <Box>
            {evo.fields.cond1
              ? evo.fields.cond1.map((cond, index) => <p key={index}>{cond}</p>)
              : ""}
          </Box>
          <Box>
            {evo.fields.evo2
              ? evo.fields.evo2.map((cond, index) => <p key={index}>{cond}</p>)
              : ""}
          </Box>
          <Box>
            {evo.fields.lvl2
              ? evo.fields.lvl2.map((cond, index) => <p key={index}>{cond}</p>)
              : ""}
          </Box>
          <Box>
            {evo.fields.cond2
              ? evo.fields.cond2.map((cond, index) => <p key={index}>{cond}</p>)
              : ""}
          </Box>
          <Box>
            {evo.fields.evo3
              ? evo.fields.evo3.map((cond, index) => <p key={index}>{cond}</p>)
              : ""}
          </Box>
          <Box>
            {evo.fields.lvl3
              ? evo.fields.lvl3.map((cond, index) => <p key={index}>{cond}</p>)
              : ""}
          </Box>
          <Box>
            {evo.fields.cond3
              ? evo.fields.cond3.map((cond, index) => <p key={index}>{cond}</p>)
              : ""}
          </Box>
          <Box>
            {evo.fields.evo4
              ? evo.fields.evo4.map((cond, index) => <p key={index}>{cond}</p>)
              : ""}
          </Box>
        </Stack>
      ))}
    </>
  );
};
