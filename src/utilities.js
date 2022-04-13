import { useState, useEffect } from "react";
import Airtable from "airtable";

const base = new Airtable({ apiKey: "keyZwDzpt9mvZCXxD" }).base(
  "appGp9DfGNdO1qLcm"
);

export function GetAllPokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    setPokemon([]);
    base("nationalDex")
      .select({
        maxRecords: 10,
        view: "master",
        filterByFormula: 'altCheck = ""'
      })
      .eachPage((records, fetchNextPage) => {
        setPokemon((rec) => [...rec, ...records]);
        fetchNextPage();
      });
  }, []);

  return pokemon;
}

export function GetPokemonUpdates() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    setPokemon([]);
    base("nationalDex")
      .select({
        maxRecords: 10,
        view: "master",
        sort: [{ field: "lastModifiedTime", direction: "desc" }],
        timeZone: "America/Toronto",
        userLocale: "en-ca"
      })
      .eachPage((records, fetchNextPage) => {
        setPokemon((rec) => [...rec, ...records]);
        fetchNextPage();
      });
  }, []);

  return pokemon;
}

export function GetPokemon(pokedexId, pokedexAlt) {
  const [pokemon, setPokemon] = useState([]);

  if (isNaN(pokedexAlt)) {
    pokedexAlt = 0;
  }

  useEffect(() => {
    setPokemon([]);
    base("nationalDex")
      .select({
        view: "master",
        filterByFormula: `AND(national = ${pokedexId}, altNum = ${pokedexAlt})`
      })
      .eachPage((records, fetchNextPage) => {
        setPokemon((rec) => [...rec, ...records]);
        fetchNextPage();
      });
  }, []);

  return pokemon;
}

export const url = (national, alt) => {
  national = String(national);
  while (national.length < 3) national = "0" + national;

  if (alt > 0) {
    alt = String(alt);
    while (alt.length < 2) alt = "0" + alt;

    return national + "/" + alt;
  } else {
    return national;
  }
};

export const convertNational = (num) => {
  num = String(num);
  while (num.length < 3) num = "0" + num;
  return num;
};
