import { useState, useEffect } from "react";
import { base } from "./airtableBase";

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

export function GetPokemon(pokedexId, pokedexAlt) {
  const [pokemon, setPokemon] = useState([]);

  if (isNaN(pokedexAlt)) {
    pokedexAlt = 0;
  }

  useEffect(() => {
    setPokemon([]);
    base("nationalDex")
      .select({
        // maxRecords: 1,
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
