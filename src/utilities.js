import { useState, useEffect } from "react";
import Airtable from "airtable";

const base = new Airtable({ apiKey: "keyZwDzpt9mvZCXxD" }).base(
  "appGp9DfGNdO1qLcm"
);

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
