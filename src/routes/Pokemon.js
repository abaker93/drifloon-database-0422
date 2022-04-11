import React from "react";
import { PokemonNav } from "../components/Navigation";
import { useParams } from "react-router-dom";
import { GetPokemon } from "../utilities";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

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
          <div key={poke.id}>
            <div id="pokemonHeader" className={poke.fields.type1}>
              <div className={poke.fields.type2}>
                <span className="japanese">{poke.fields.japaneseKata}</span>
                <img
                  className="artwork"
                  src={poke.fields.artwork[0].url}
                  alt={poke.fields.name}
                />
              </div>
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
                <div className="hp">{poke.fields.hp}</div>
                <div className="att">{poke.fields.att}</div>
                <div className="def">{poke.fields.def}</div>
                <div className="spAtt">{poke.fields.spAtt}</div>
                <div className="spDef">{poke.fields.spDef}</div>
                <div className="Spd">{poke.fields.spd}</div>
                <div className="statsNav">
                  <button className="base">Base</button>
                  <button className="lvl50">LVL 50</button>
                  <button className="lvl100">LVL 100</button>
                  <InfoRoundedIcon />
                </div>
              </div>
              <div id="evolution">
                <h2>Evolution</h2>
              </div>
              <div id="weakness">
                <div className="normal">0</div>
                <div className="fire">0</div>
                <div className="water">0</div>
                <div className="electric">0</div>
                <div className="grass">0</div>
                <div className="ice">0</div>
                <div className="fighting">0</div>
                <div className="poison">0</div>
                <div className="ground">0</div>
                <div className="flying">0</div>
                <div className="psychic">0</div>
                <div className="bug">0</div>
                <div className="rock">0</div>
                <div className="ghost">0</div>
                <div className="dragon">0</div>
                <div className="dark">0</div>
                <div className="steel">0</div>
                <div className="fairy">0</div>
              </div>
              <div id="abilities">
                <div className="abilities">{poke.fields.abilities}</div>
                <div className="hiddenAbilities">
                  {poke.fields.hiddenAbility}
                </div>
              </div>
              <div id="name">
                <div className="english">{poke.fields.english}</div>
                <div className="spanish">{poke.fields.spanish}</div>
                <div className="italian">{poke.fields.italian}</div>
                <div className="japanese">{`${poke.fields.japaneseKata} (${poke.fields.japaneseLat})`}</div>
                <div className="german">{poke.fields.german}</div>
                <div className="nameOrigin">{poke.fields.nameOrigin}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Pokemon;
