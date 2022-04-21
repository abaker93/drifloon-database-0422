import React, { useState } from "react";

import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import * as color from "../colors";
import { GetAltForms, url } from "../utilities";

export const AltFormNav = (poke) => {
  const altForms = GetAltForms(poke.pokemon.fields.national);

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={poke.pokemon.fields.altNum}
          aria-label="alt form navigation"
          variant="scrollable"
          scrollButtons="auto"
          data-type={poke.pokemon.fields.type1}
        >
          {altForms.map((form) => (
            <Tab
              href={`/pokedex/national/${url(
                form.fields.national,
                form.fields.altNum
              )}`}
              key={form.id}
              label={form.fields.name}
            ></Tab>
          ))}
        </Tabs>
      </Box>
    </>
  );
};
