import React from "react";
import { Link } from "react-router-dom";
import { GetAllPokemon } from "../utilities";
import { PokemonListNav } from "../components/Navigation";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function PokemonList() {
  const pokemon = GetAllPokemon();

  const url = (national, alt) => {
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

  const nationalDex = (num) => {
    num = String(num);
    while (num.length < 3) num = "0" + num;
    return num;
  };

  const sumStats = (num1, num2, num3, num4, num5, num6) => {
    return num1 + num2 + num3 + num4 + num5 + num6;
  };

  return (
    <>
      <PokemonListNav />
      <div id="pokemonList">
        <h1>National Pokédex</h1>
        <div className="searchBar">
          <SearchRoundedIcon />
          <input placeholder="Search for Pokémon by name or Pokédex number"></input>
        </div>
        {pokemon.map((poke) => (
          <Link
            className="pokedexCard"
            to={`/pokemon/${url(poke.fields.national, poke.fields.altNum)}`}
            key={poke.id}
          >
            <div className={`${poke.fields.type1}1 ${poke.fields.type2}2`}>
              <img src={poke.fields.artwork[0].url} alt={poke.fields.name} />
              <div className="details">
                <h3>
                  <span>
                    <span>No.</span>
                    {nationalDex(poke.fields.national)}
                  </span>{" "}
                  {poke.fields.name}
                </h3>
                <div className="type">
                  <div className={poke.fields.type1}>{poke.fields.type1}</div>
                  <div className={poke.fields.type2}>{poke.fields.type2}</div>
                </div>
                <div className="stats">
                  <div>
                    <h6>HP</h6>
                    {poke.fields.hp}
                  </div>
                  <div>
                    <h6>Att</h6>
                    {poke.fields.att}
                  </div>
                  <div>
                    <h6>Def</h6>
                    {poke.fields.def}
                  </div>
                  <div>
                    <h6>Sp.Att</h6>
                    {poke.fields.spAtt}
                  </div>
                  <div>
                    <h6>Sp.Def</h6>
                    {poke.fields.spDef}
                  </div>
                  <div>
                    <h6>Spd</h6>
                    {poke.fields.spd}
                  </div>
                  <div className="total">
                    <h6>Total</h6>
                    <p>
                      {sumStats(
                        poke.fields.hp,
                        poke.fields.att,
                        poke.fields.def,
                        poke.fields.spAtt,
                        poke.fields.spDef,
                        poke.fields.spd
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default PokemonList;
