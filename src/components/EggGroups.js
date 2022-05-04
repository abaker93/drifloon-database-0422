import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { GetEggGroups } from "../utilities";

export const EggGroups = (poke) => {
  const eggGroups = GetEggGroups(poke.pokemon.fields.eggGroups);

  return (
    <>
      <Box>
        {eggGroups.length > 1 ? <h3>Egg Groups</h3> : <h3>Egg Group</h3>}
        {eggGroups.map((egg) => (
          <Card key={egg.id} className="dense clickable">
            <CardContent>{egg.fields.eggGroup}</CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};
