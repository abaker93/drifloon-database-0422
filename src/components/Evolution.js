import React from "react";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import { GetEvolutions, getPokemonByRecord } from "../utilities";
import { EvoPhoto } from "./EvoPhoto";

export const Evolution = (poke) => {
  const evolutions = GetEvolutions(poke.pokemon.fields.evolution);

  const evoConditions = (lvl, cond) => {
    console.log(lvl);
    console.log(cond);
  };

  return (
    <>
      {evolutions.map((evo) => (
        <Stack key={evo.id} direction="row" spacing={1}>
          <Box>
            {evo.fields.evo1
              ? evo.fields.evo1.map((value, index) =>
                  value !== "recCUXMOJy5H3QaO9" ? (
                    <EvoPhoto key={index} pokemon={value} />
                  ) : (
                    ""
                  )
                )
              : ""}
          </Box>
          <Box>
            {/* {evoConditions(evo.fields.lvl1, evo.fields.cond1)} */}
            {/* {evo.fields.lvl1
              ? evo.fields.lvl1.map((value, index) =>
                  value !== "_" ? <p key={index}>lvl {value}</p> : <div></div>
                )
              : ""}
            {evo.fields.cond1
              ? evo.fields.cond1.map((value, index) =>
                  value !== "_" ? <p key={index}>{value}</p> : <div></div>
                )
              : ""} */}
          </Box>
          <Box></Box>
          <Box>
            {evo.fields.evo2
              ? evo.fields.evo2.map((value, index) =>
                  value !== "recCUXMOJy5H3QaO9" ? (
                    <EvoPhoto key={index} pokemon={value} />
                  ) : (
                    ""
                  )
                )
              : ""}
          </Box>
          <Box>
            {evoConditions(evo.fields.lvl2, evo.fields.cond2)}
            {/* {evo.fields.lvl2
              ? evo.fields.lvl2.map((value, index) =>
                  value !== "_" ? <p key={index}>{value}</p> : <div></div>
                )
              : ""} */}
          </Box>
          {/* <Box>
            {evo.fields.cond2
              ? evo.fields.cond2.map((value, index) =>
                  value !== "_" ? <p key={index}>{value}</p> : <div></div>
                )
              : ""}
          </Box> */}
          <Box>
            {evo.fields.evo3
              ? evo.fields.evo3.map((value, index) =>
                  value !== "recCUXMOJy5H3QaO9" ? (
                    <EvoPhoto key={index} pokemon={value} />
                  ) : (
                    ""
                  )
                )
              : ""}
          </Box>
          <Box>
            {evo.fields.lvl3
              ? evo.fields.lvl3.map((value, index) => (
                  <p key={index}>{value}</p>
                ))
              : ""}
          </Box>
          <Box>
            {evo.fields.cond3
              ? evo.fields.cond3.map((value, index) => (
                  <p key={index}>{value}</p>
                ))
              : ""}
          </Box>
          <Box>
            {evo.fields.evo4
              ? evo.fields.evo4.map((value, index) =>
                  value !== "recCUXMOJy5H3QaO9" ? (
                    <EvoPhoto key={index} pokemon={value} />
                  ) : (
                    ""
                  )
                )
              : ""}
          </Box>
        </Stack>
      ))}
    </>
  );
};
