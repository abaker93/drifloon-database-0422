import React from "react";
import { Link } from "react-router-dom";
import { GetAllPokemon, url, nationalDex } from "../utilities";
import { PokemonListNav } from "../components/Navigation";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function PokemonList() {
  const pokemon = GetAllPokemon();

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
            to={`/pokedex/national/${url(
              poke.fields.national,
              poke.fields.altNum
            )}`}
            key={poke.id}
            data-type-one={poke.fields.type1}
            data-type-two={poke.fields.type2}
          >
            <div id="pokedexCard">
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
