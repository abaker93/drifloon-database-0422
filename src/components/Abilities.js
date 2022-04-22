import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { GetAbilities } from "../utilities";

export const Abilities = (poke) => {
  const abilities = GetAbilities(poke.pokemon.fields.abilities);
  const hiddenAbility = GetAbilities(poke.pokemon.fields.hiddenAbility);

  return (
    <>
      <Box>
        {abilities.length > 1 ? <h2>Abilties</h2> : <h2>Ability</h2>}
        {abilities.map((abil) => (
          <Card key={abil.id} className="dense clickable">
            <CardContent>{abil.fields.ability}</CardContent>
          </Card>
        ))}
      </Box>
      <Box>
        <h2>Hidden Ability</h2>
        {hiddenAbility.map((abil) => (
          <Card key={abil.id} className="dense clickable">
            <CardContent>{abil.fields.ability}</CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};
