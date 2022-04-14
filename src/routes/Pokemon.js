import React, { useState, useEffect } from "react";

import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";

import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import MaleRoundedIcon from "@mui/icons-material/MaleRounded";
import FemaleRoundedIcon from "@mui/icons-material/FemaleRounded";

import { useParams } from "react-router-dom";
import { Statbar } from "../components/Statbar";
import { PokemonSpeedDial } from "../components/PokemonSpeedDial";
import { Evolution } from "../components/Evolution";
import { Weakness } from "../components/Weakness";
import { Abilities } from "../components/Abilities";
import { typesArray, GetPokemon, convertNational } from "../utilities";

export default function Pokemon() {
  const params = useParams();
  const pokemon = GetPokemon(
    parseInt(params.pokedexId, 10),
    parseInt(params.pokedexAltId, 10)
  );

  const checkForType2 = (type2) => {
    const checkForType2Results = type2 ? <Chip label={type2} /> : "";

    return checkForType2Results;
  };

  return (
    <>
      <PokemonSpeedDial />
      <AppBar position="absolute">
        <Toolbar>
          <Link href="/pokedex/national">
            <IconButton edge="start" aria-label="back">
              <ArrowBackIosRoundedIcon />
            </IconButton>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton edge="start" aria-label="settings">
            <SettingsIcon />
          </IconButton>
          <Link href="/">
            <IconButton aria-label="home">
              <AppsRoundedIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
      {pokemon.map((poke) => (
        <Box key={poke.id}>
          <Box className="pokemonHeader" sx={{ mt: 10 }}>
            <p>{poke.fields.japaneseKata}</p>
            <img src={poke.fields.artwork[0].url} alt={poke.fields.name} />
          </Box>
          <Container maxWidth="xl" sx={{ mt: 5 }}>
            <Box id="basicInfo">
              <h1>
                <span>
                  <span>No.</span>
                  {convertNational(poke.fields.national)}
                </span>
                {poke.fields.name}
              </h1>
              <p>{poke.fields.category}</p>
              <div className="types">
                <Chip
                  className={poke.fields.type1}
                  label={poke.fields.type1}
                  sx={{ mr: 1 }}
                />
                {checkForType2(poke.fields.type2)}
              </div>
            </Box>
          </Container>
          <Container maxWidth="xl" sx={{ mt: 5 }}>
            <Box id="stats">
              <Statbar stat="hp" label="HP" num={poke.fields.hp} />
              <Statbar stat="att" label="Attack" num={poke.fields.att} />
              <Statbar stat="def" label="Defense" num={poke.fields.def} />
              <Statbar stat="spAtt" label="Sp.Att" num={poke.fields.spAtt} />
              <Statbar stat="spDef" label="Sp.Def" num={poke.fields.spDef} />
              <Statbar stat="spd" label="Speed" num={poke.fields.spd} />

              <Stack direction="row" spacing={1}>
                <Chip label="Base" clickable />
                <Chip label="Lvl 50" clickable />
                <Chip label="Lvl 100" clickable />
              </Stack>
            </Box>
          </Container>
          <Container maxWidth="xl" sx={{ mt: 5 }}>
            <Box id="evolution">
              <Evolution key={poke.id} pokemon={poke} />
            </Box>
          </Container>
          <Container maxWidth="xl" sx={{ mt: 5 }}>
            <Box id="weaknesses">
              {typesArray.map((value, index) => {
                return (
                  <Weakness
                    key={index}
                    attType={value}
                    type1={poke.fields.type1}
                    type2={poke.fields.type2}
                  />
                );
              })}
            </Box>
          </Container>
          <Container maxWidth="xl" sx={{ mt: 5 }}>
            <Box id="abilities">
              <Abilities key={poke.id} pokemon={poke} />
            </Box>
          </Container>
          <Container maxWidth="xl" sx={{ mt: 5 }}>
            <Box id="name">
              <Box>
                <Chip label="English / Spanish / Italian" />
                <p>{poke.fields.english}</p>
              </Box>
              <Box>
                <Chip label="Japanese" />
                <p>
                  {poke.fields.japaneseKata}
                  <br />({poke.fields.japaneseLat})
                </p>
              </Box>
              <Box>
                <Chip label="German" />
                <p>{poke.fields.german}</p>
              </Box>
              <Box>
                <Chip label="French" />
                <p>{poke.fields.french}</p>
              </Box>
              <Box>
                <Chip label="Name Origin" />
                <p>{poke.fields.nameOrigin}</p>
              </Box>
            </Box>
          </Container>
          <Container maxWidth="xl" sx={{ mt: 5 }}>
            <Box id="breeding">
              <Box>
                <h4>Egg Groups</h4>
                <p>{poke.fields.eggGroups}</p>
              </Box>
              <Box>
                <h4>Egg Cycles</h4>
                <p>{poke.fields.eggCycles}</p>
              </Box>
            </Box>
          </Container>
          <Container maxWidth="xl" sx={{ mt: 5 }}>
            <Box id="more">
              <Box>
                <h4>Gender Ratio</h4>
                <p>
                  <MaleRoundedIcon />
                  {poke.fields.MGendRatio}
                </p>
                <p>
                  <FemaleRoundedIcon />
                  {poke.fields.FGendRatio}
                </p>
              </Box>
              <Box>
                <h4>Height</h4>
                <p>{poke.fields.height} cm</p>
              </Box>
              <Box>
                <h4>Weight</h4>
                <p>{poke.fields.weight} kg</p>
              </Box>
              <Box>
                <h4>EV Yield</h4>
                {poke.fields.evYield.map((ev, index) => (
                  <p key={index}>{ev}</p>
                ))}
              </Box>
              <Box>
                <h4>Catch Rate</h4>
                <p>{poke.fields.catchRate}</p>
              </Box>
              <Box>
                <h4>Base Friendship</h4>
                <p>{poke.fields.baseFriendship}</p>
              </Box>
              <Box>
                <h4>Base Experience</h4>
                <p>{poke.fields.baseExperience}</p>
              </Box>
              <Box>
                <h4>Growth Rate</h4>
                <p>{poke.fields.growthRate}</p>
              </Box>
            </Box>
          </Container>
        </Box>
      ))}
    </>
  );
}
