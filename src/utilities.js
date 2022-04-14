import { useState, useEffect, useRef } from "react";
import { base } from "./components/base";

export const generations = [
  "Gen I",
  "Gen II",
  "Gen III",
  "Gen IV",
  "Gen V",
  "Gen VI",
  "Gen VII",
  "Gen VIII",
  "Gen IX"
];

export const typesArray = [
  "bug",
  "dark",
  "dragon",
  "electric",
  "fairy",
  "fighting",
  "fire",
  "flying",
  "ghost",
  "grass",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water"
];

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

// export function getPokemonByRecord(pokemonId) {
//   const [pokemon, setPokemon] = useState([]);

//   useEffect(() => {
//     setPokemon([]);
//     base("nationalDex")
//       .select({
//         view: "master",
//         filterByFormula: `RECORD_ID() = "${pokemonId}"`
//       })
//       .eachPage((records, fetchNextPage) => {
//         setPokemon((rec) => [...rec, ...records]);
//         fetchNextPage();
//       });
//   }, []);

//   return pokemon;
// }

export function GetEvolutions(evolutionId) {
  const [evolution, setEvolution] = useState([]);

  useEffect(() => {
    setEvolution([]);
    for (let i = 0; i < evolutionId.length; i++) {
      base("evolution")
        .select({
          view: "master",
          filterByFormula: `RECORD_ID() = "${evolutionId[i]}"`
        })
        .eachPage((records, fetchNextPage) => {
          setEvolution((rec) => [...rec, ...records]);
          fetchNextPage();
        });
    }
  }, []);

  return evolution;
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
