import React from "react";
import { HomeNav } from "../components/Navigation";
import { GetPokemonUpdates, url, nationalDex } from "../utilities";
import { Link } from "react-router-dom";

function Home() {
  const pokemon = GetPokemonUpdates();

  const changeDateTime = (string) => {
    let localDateTime = new Date(string);
    return localDateTime.toLocaleString();
  };

  return (
    <>
      <HomeNav />
      <div id="home">
        <h1>Drifloon Database</h1>
        <div className="quickLinks">
          <h2>Quick Links</h2>
          <div>
            <Link to="/pokedex/national">
              <div>
                <h3>National Pokedex</h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="pokemonGen">
          <h2>Pokemon by Generation</h2>
          <Link to="/pokedex/kanto">
            <div className="gen1">Gen I</div>
          </Link>
          <Link to="/pokedex/johto">
            <div className="gen2">Gen II</div>
          </Link>
          <Link to="/pokedex/hoenn">
            <div className="gen3">Gen III</div>
          </Link>
          <Link to="/pokedex/sinnoh">
            <div className="gen4">Gen IV</div>
          </Link>
          <Link to="/pokedex/unova">
            <div className="gen5">Gen V</div>
          </Link>
          <Link to="/pokedex/kalos">
            <div className="gen6">Gen VI</div>
          </Link>
          <Link to="/pokedex/alola">
            <div className="gen7">Gen VII</div>
          </Link>
          <Link to="/pokedex/galar">
            <div className="gen8">Gen VIII</div>
          </Link>
          <Link to="/pokedex/gen-iv">
            <div className="gen9">Gen IX</div>
          </Link>
        </div>
        <div className="pokemonType">
          <h2>Pokemon by Type</h2>
          <Link to="/pokedex/national?type=bug">
            <div className="bug">Bug</div>
          </Link>
          <Link to="/pokedex/national?type=dark">
            <div className="dark">Dark</div>
          </Link>
          <Link to="/pokedex/national?type=dragon">
            <div className="dragon">Dragon</div>
          </Link>
          <Link to="/pokedex/national?type=electric">
            <div className="electric">Electric</div>
          </Link>
          <Link to="/pokedex/national?type=fairy">
            <div className="fairy">Fairy</div>
          </Link>
          <Link to="/pokedex/national?type=fighting">
            <div className="fighting">Fighting</div>
          </Link>
          <Link to="/pokedex/national?type=fire">
            <div className="fire">Fire</div>
          </Link>
          <Link to="/pokedex/national?type=flying">
            <div className="flying">Flying</div>
          </Link>
          <Link to="/pokedex/national?type=ghost">
            <div className="ghost">Ghost</div>
          </Link>
          <Link to="/pokedex/national?type=grass">
            <div className="grass">Grass</div>
          </Link>
          <Link to="/pokedex/national?type=ground">
            <div className="ground">Ground</div>
          </Link>
          <Link to="/pokedex/national?type=ice">
            <div className="ice">Ice</div>
          </Link>
          <Link to="/pokedex/national?type=normal">
            <div className="normal">Normal</div>
          </Link>
          <Link to="/pokedex/national?type=poison">
            <div className="poison">Poison</div>
          </Link>
          <Link to="/pokedex/national?type=psychic">
            <div className="psychic">Psychic</div>
          </Link>
          <Link to="/pokedex/national?type=rock">
            <div className="rock">Rock</div>
          </Link>
          <Link to="/pokedex/national?type=steel">
            <div className="steel">Steel</div>
          </Link>
          <Link to="/pokedex/national?type=water">
            <div className="water">Water</div>
          </Link>
        </div>
        <div className="recentUpdates">
          <h2>Most Recent Updates</h2>
          {pokemon.map((poke) => (
            <Link
              className="pokedexCard"
              to={`/pokedex/national/${url(
                poke.fields.national,
                poke.fields.altNum
              )}`}
              key={poke.id}
            >
              <div
                data-type-one={poke.fields.type1}
                data-type-two={poke.fields.type2}
              >
                <img src={poke.fields.artwork[0].url} alt={poke.fields.name} />
                <div className="details">
                  <h3>
                    <span>
                      <span>No.</span>
                      {nationalDex(poke.fields.national)}
                    </span>{" "}
                    {poke.fields.name}
                  </h3>
                  <div className="lastModifiedTime">
                    {changeDateTime(poke.fields.lastModifiedTime)}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="projectNotes">
          <h2>Project Notes</h2>
          <div>
            <h3>April 11, 2022</h3>
            <p>And.... we're live!</p>
          </div>
        </div>
        <div>
          <h2>Get in Touch!</h2>
          <p>Anna Baker</p>
          <p>Designer | Programmer | Database Creator</p>
          <p>
            <a href="https://annabaker.design" target="_blank" rel="noreferrer">
              annabaker.design
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
