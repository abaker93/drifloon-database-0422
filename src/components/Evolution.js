import React from "react";

import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { GetEvolutions } from "../utilities";
import { EvoPhoto } from "./EvoPhoto";

export const Evolution = (poke) => {
  const evolutions = GetEvolutions(poke.pokemon.fields.evolution);

  const evoConditions = (lvl, cond) => {
    let evoCond = [];

    if (lvl) {
      if (cond) {
        for (let i = 0; i < lvl.length; i++) {
          if (lvl[i] === "_") {
            if (cond[i] === "_") {
            } else {
              evoCond.push(cond[i]);
            }
          } else {
            if (cond[i] === "_") {
              evoCond.push("lvl " + lvl[i]);
            } else {
              evoCond.push("lvl " + lvl[i] + " - " + cond[i]);
            }
          }
        }
      } else {
        for (let i = 0; i < lvl.length; i++) {
          if (lvl[i] === "_") {
          } else {
            evoCond.push("lvl " + lvl[i]);
          }
        }
      }
    } else {
      if (cond) {
        for (let i = 0; i < cond.length; i++) {
          if (cond[i] === "_") {
          } else {
            evoCond.push(cond[i]);
          }
        }
      }
    }

    return evoCond;
  };

  return (
    <>
      {evolutions.map((evo) => (
        <Stack key={evo.id} direction="row" spacing={1}>
          <Stack spacing={1}>
            {evo.fields.evo1
              ? evo.fields.evo1.map((value, index) =>
                  value !== "recCUXMOJy5H3QaO9" ? (
                    <EvoPhoto key={index} pokemon={value} />
                  ) : (
                    ""
                  )
                )
              : ""}
          </Stack>
          <Stack spacing={1}>
            {evoConditions(evo.fields.lvl1, evo.fields.cond1).map((cond) => (
              <Card>
                <CardContent>{cond}</CardContent>
              </Card>
            ))}
          </Stack>
          <Stack spacing={1}>
            {evo.fields.evo2
              ? evo.fields.evo2.map((value, index) =>
                  value !== "recCUXMOJy5H3QaO9" ? (
                    <EvoPhoto key={index} pokemon={value} />
                  ) : (
                    ""
                  )
                )
              : ""}
          </Stack>
          <Stack spacing={1}>
            {evoConditions(evo.fields.lvl2, evo.fields.cond2).map((cond) => (
              <Card>
                <CardContent>{cond}</CardContent>
              </Card>
            ))}
          </Stack>
          <Stack spacing={1}>
            {evo.fields.evo3
              ? evo.fields.evo3.map((value, index) =>
                  value !== "recCUXMOJy5H3QaO9" ? (
                    <EvoPhoto key={index} pokemon={value} />
                  ) : (
                    ""
                  )
                )
              : ""}
          </Stack>
          <Stack spacing={1}>
            {evoConditions(evo.fields.lvl3, evo.fields.cond3).map((cond) => (
              <Card>
                <CardContent>{cond}</CardContent>
              </Card>
            ))}
          </Stack>
          <Stack spacing={1}>
            {evo.fields.evo4
              ? evo.fields.evo4.map((value, index) =>
                  value !== "recCUXMOJy5H3QaO9" ? (
                    <EvoPhoto key={index} pokemon={value} />
                  ) : (
                    ""
                  )
                )
              : ""}
          </Stack>
        </Stack>
      ))}
    </>
  );
};
