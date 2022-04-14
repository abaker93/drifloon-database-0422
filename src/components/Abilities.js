import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { GetAbilities } from "../utilities";

export const Abilities = (poke) => {
  const abilities = GetAbilities(poke.pokemon.fields.abilities);

  const hiddenAbility = GetAbilities(poke.pokemon.fields.hiddenAbility);

  return (
    <>
      {abilities.map((abil) => (
        <Card key={abil.id}>
          <CardContent>{abil.fields.ability}</CardContent>
        </Card>
      ))}

      {hiddenAbility.map((abil) => (
        <Card key={abil.id}>
          <CardContent>{abil.fields.ability}</CardContent>
        </Card>
      ))}
    </>
  );
};
