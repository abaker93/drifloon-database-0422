import React from "react";
import { PokemonNav } from "../components/Navigation";
import { Statbar } from "../components/Statbar";
import { Weakness } from "../components/Weakness";
import { useParams } from "react-router-dom";
import { GetPokemon } from "../utilities";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import Tooltip from "@mui/material/Tooltip";

function Pokemon() {
  let params = useParams();
  let pokemon = GetPokemon(
    parseInt(params.pokedexId, 10),
    parseInt(params.pokedexAltId, 10)
  );

  const nationalDex = (num) => {
    num = String(num);
    while (num.length < 3) num = "0" + num;
    return num;
  };

  return (
    <>
      <PokemonNav />
      <div id="pokemon">
        {pokemon.map((poke) => (
          <div
            key={poke.id}
            data-type-one={poke.fields.type1}
            data-type-two={poke.fields.type2}
          >
            <div id="pokemonHeader">
              <span className="japanese">{poke.fields.japaneseKata}</span>
              <img
                className="artwork"
                src={poke.fields.artwork[0].url}
                alt={poke.fields.name}
              />
            </div>
            <div id="pokemonDetails">
              <h1>
                <span>
                  <span>No.</span>
                  {nationalDex(poke.fields.national)}
                </span>
                {poke.fields.name}
              </h1>
              <p className="category">{poke.fields.category}</p>
              <div className="types">
                <div className={poke.fields.type1}>{poke.fields.type1}</div>
                <div className={poke.fields.type2}>{poke.fields.type2}</div>
              </div>
              <div id="stats">
                <Statbar stat="hp" label="HP" num={poke.fields.hp} />
                <Statbar stat="att" label="Attack" num={poke.fields.att} />
                <Statbar stat="def" label="Defense" num={poke.fields.def} />
                <Statbar stat="spAtt" label="Sp. Att" num={poke.fields.spAtt} />
                <Statbar stat="spDef" label="Sp. Def" num={poke.fields.spDef} />
                <Statbar stat="spd" label="Speed" num={poke.fields.spd} />

                <div className="statsNav">
                  <button className="base active">Base</button>
                  <button className="lvl50">LVL 50</button>
                  <button className="lvl100">LVL 100</button>
                  <Tooltip
                    title="Minimum stats are calculated with 0 EVs, IVs of 0, and (if applicable) a hindering nature. Maximum stats are calculated with 252 EVs, IVs of 31, and (if applicable) a helpful nature."
                    placement="top"
                    arrow
                  >
                    <InfoRoundedIcon className="infoIcon" />
                  </Tooltip>
                </div>
              </div>
              <div id="evolution">
                <h2>Evolution</h2>
              </div>
              <div id="weakness">
                <Weakness
                  attType="normal"
                  type1={poke.fields.type1}
                  type2={poke.fields.type2}
                />
                <Weakness
                  attType="fire"
                  type1={poke.fields.type1}
                  type2={poke.fields.type2}
                />
                <Weakness
                  attType="water"
                  type1={poke.fields.type1}
                  type2={poke.fields.type2}
                />
                <Weakness
                  attType="electric"
                  type1={poke.fields.type1}
                  type2={poke.fields.type2}
                />
                <Weakness
                  attType="grass"
                  type1={poke.fields.type1}
                  type2={poke.fields.type2}
                />
                <Weakness
                  attType="ice"
                  type1={poke.fields.type1}
                  type2={poke.fields.type2}
                />
                <Weakness
                  attType="fighting"
                  type1={poke.fields.type1}
                  type2={poke.fields.type2}
                />
                <Weakness
                  attType="poison"
                  type1={poke.fields.type1}
                  type2={poke.fields.type2}
                />
                <Weakness
                  attType="ground"
                  type1={poke.fields.type1}
                  type2={poke.fields.type2}
                />
                <Weakness
                  attType="flying"
                  type1={poke.fields.type1}
                  type2={poke.fields.type2}
                />
                <Weakness
                  attType="psychic"
                  type1={poke.fields.type1}
                  type2={poke.fields.type2}
                />
                <Weakness
                  attType="bug"
                  type1={poke.fields.type1}
                  type2={poke.fields.type2}
                />
                <Weakness
                  attType="rock"
                  type1={poke.fields.type1}
                  type2={poke.fields.type2}
                />
                <Weakness
                  attType="ghost"
                  type1={poke.fields.type1}
                  type2={poke.fields.type2}
                />
                <Weakness
                  attType="dragon"
                  type1={poke.fields.type1}
                  type2={poke.fields.type2}
                />
                <Weakness
                  attType="dark"
                  type1={poke.fields.type1}
                  type2={poke.fields.type2}
                />
                <Weakness
                  attType="steel"
                  type1={poke.fields.type1}
                  type2={poke.fields.type2}
                />
                <Weakness
                  attType="fairy"
                  type1={poke.fields.type1}
                  type2={poke.fields.type2}
                />
              </div>
              <div id="abilities">
                <div className="abilities">{poke.fields.abilities}</div>
                <div className="hiddenAbilities">
                  {poke.fields.hiddenAbility}
                </div>
              </div>
              <div id="name">
                <div className="english">
                  <h6>English</h6>
                  <p>{poke.fields.english}</p>
                </div>
                <div className="spanish">
                  <h6>Spanish</h6>
                  <p>{poke.fields.spanish}</p>
                </div>
                <div className="italian">
                  <h6>Italian</h6>
                  <p>{poke.fields.italian}</p>
                </div>
                <div className="japaneseName">
                  <h6>Japanese</h6>
                  <p>{`${poke.fields.japaneseKata} (${poke.fields.japaneseLat})`}</p>
                </div>
                <div className="german">
                  <h6>German</h6>
                  <p>{poke.fields.german}</p>
                </div>
                <div className="nameOrigin">
                  <h6>Name Origin</h6>
                  <p>{poke.fields.nameOrigin}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Pokemon;
