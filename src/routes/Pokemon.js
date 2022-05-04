import React, { useState, useEffect } from "react";

import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";

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
import { EggGroups } from "../components/EggGroups";
import { Moves } from "../components/Moves";
import { AltFormNav } from "../components/AltFormNav";
import {
  generations,
  typesArray,
  GetPokemon,
  convertNational
} from "../utilities";

export default function Pokemon() {
  const params = useParams();
  const pokemon = GetPokemon(
    parseInt(params.pokedexId, 10),
    parseInt(params.pokedexAltId, 10)
  );

  const checkForType2 = (type2) => {
    const checkForType2Results = type2 ? (
      <Chip label={type2} data-type={type2} />
    ) : (
      ""
    );
    return checkForType2Results;
  };

  const totalStats = (hp, att, def, spAtt, spDef, spd) => {
    return hp + att + def + spAtt + spDef + spd;
  };

  return (
    <div id="Pokemon">
      {/***** SPEED DIAL *****/}
      <PokemonSpeedDial />

      {/***** APP BAR *****/}
      <AppBar>
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

      {/*******************************************
					POKEMON START
			*******************************************/}
      {pokemon.map((poke) => (
        <Box
          key={poke.id}
          data-type-one={poke.fields.type1}
          data-type-two={poke.fields.type2}
          sx={{ mb: 5 }}
        >
          {/***** HEADER *****/}
          <Box className="pokemonHeader">
            <p>{poke.fields.japaneseKata}</p>
            <img src={poke.fields.artwork[0].url} alt={poke.fields.name} />
          </Box>

          {/***** BASIC INFO *****/}
          <Container maxWidth="xl" sx={{ mt: 5, mb: 3 }}>
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
                  label={poke.fields.type1}
                  sx={{ mr: 1 }}
                  data-type={poke.fields.type1}
                />
                {checkForType2(poke.fields.type2)}
              </div>
            </Box>
          </Container>

          {/***** ALT FORMS *****/}
          {poke.fields.altForms ? (
            <Container maxWidth="xl">
              <Box id="altForms">
                <AltFormNav pokemon={poke} />
              </Box>
            </Container>
          ) : (
            ""
          )}

          {/***** STATS *****/}
          <Container maxWidth="xl" sx={{ pt: 3 }}>
            <Box id="stats">
              <TabsUnstyled defaultValue={0}>
                <TabPanelUnstyled value={0}>
                  <Statbar stat="hp" label="HP" num={poke.fields.hp} />
                  <Statbar stat="att" label="Attack" num={poke.fields.att} />
                  <Statbar stat="def" label="Defense" num={poke.fields.def} />
                  <Statbar
                    stat="spAtt"
                    label="Sp.Att"
                    num={poke.fields.spAtt}
                  />
                  <Statbar
                    stat="spDef"
                    label="Sp.Def"
                    num={poke.fields.spDef}
                  />
                  <Statbar stat="spd" label="Speed" num={poke.fields.spd} />
                  <div className="stat total">
                    <p className="statLabel">Total</p>
                    <p className="statNum">
                      {totalStats(
                        poke.fields.hp,
                        poke.fields.att,
                        poke.fields.def,
                        poke.fields.spAtt,
                        poke.fields.spDef,
                        poke.fields.spd
                      )}
                    </p>
                  </div>
                </TabPanelUnstyled>
                <TabPanelUnstyled value={1}>
                  <Statbar
                    stat="hp"
                    label="HP"
                    min={poke.fields.hp50Min}
                    max={poke.fields.hp50Max}
                  />
                  <Statbar
                    stat="att"
                    label="Attack"
                    min={poke.fields.att50Min}
                    max={poke.fields.att50Max}
                  />
                  <Statbar
                    stat="def"
                    label="Defense"
                    min={poke.fields.def50Min}
                    max={poke.fields.def50Max}
                  />
                  <Statbar
                    stat="spAtt"
                    label="Sp.Att"
                    min={poke.fields.spAtt50Min}
                    max={poke.fields.spAtt50Max}
                  />
                  <Statbar
                    stat="spDef"
                    label="Sp.Def"
                    min={poke.fields.spDef50Min}
                    max={poke.fields.spDef50Max}
                  />
                  <Statbar
                    stat="spd"
                    label="Speed"
                    min={poke.fields.spd50Min}
                    max={poke.fields.spd50Max}
                  />
                  <div className="stat total">
                    <p className="statLabel">Total</p>
                    <p className="statNum">
                      {totalStats(
                        poke.fields.hp50Min,
                        poke.fields.att50Min,
                        poke.fields.def50Min,
                        poke.fields.spAtt50Min,
                        poke.fields.spDef50Min,
                        poke.fields.spd50Min
                      )}
                      -
                      {totalStats(
                        poke.fields.hp50Max,
                        poke.fields.att50Max,
                        poke.fields.def50Max,
                        poke.fields.spAtt50Max,
                        poke.fields.spDef50Max,
                        poke.fields.spd50Max
                      )}
                    </p>
                  </div>
                </TabPanelUnstyled>
                <TabPanelUnstyled value={2}>
                  <Statbar
                    stat="hp"
                    label="HP"
                    min={poke.fields.hp100Min}
                    max={poke.fields.hp100Max}
                  />
                  <Statbar
                    stat="att"
                    label="Attack"
                    min={poke.fields.att100Min}
                    max={poke.fields.att100Max}
                  />
                  <Statbar
                    stat="def"
                    label="Defense"
                    min={poke.fields.def100Min}
                    max={poke.fields.def100Max}
                  />
                  <Statbar
                    stat="spAtt"
                    label="Sp.Att"
                    min={poke.fields.spAtt100Min}
                    max={poke.fields.spAtt100Max}
                  />
                  <Statbar
                    stat="spDef"
                    label="Sp.Def"
                    min={poke.fields.spDef100Min}
                    max={poke.fields.spDef100Max}
                  />
                  <Statbar
                    stat="spd"
                    label="Speed"
                    min={poke.fields.spd100Min}
                    max={poke.fields.spd100Max}
                  />
                  <div className="stat total">
                    <p className="statLabel">Total</p>
                    <p className="statNum">
                      {totalStats(
                        poke.fields.hp100Min,
                        poke.fields.att100Min,
                        poke.fields.def100Min,
                        poke.fields.spAtt100Min,
                        poke.fields.spDef100Min,
                        poke.fields.spd100Min
                      )}
                      -
                      {totalStats(
                        poke.fields.hp100Max,
                        poke.fields.att100Max,
                        poke.fields.def100Max,
                        poke.fields.spAtt100Max,
                        poke.fields.spDef100Max,
                        poke.fields.spd100Max
                      )}
                    </p>
                  </div>
                </TabPanelUnstyled>
                <TabsListUnstyled className="chipTabs">
                  <TabUnstyled>
                    <Chip label="Base" clickable />
                  </TabUnstyled>
                  <TabUnstyled>
                    <Chip label="Lvl 50" clickable />
                  </TabUnstyled>
                  <TabUnstyled>
                    <Chip label="Lvl 100" clickable />
                  </TabUnstyled>
                </TabsListUnstyled>
              </TabsUnstyled>
            </Box>
          </Container>

          {/***** EVOLUTION *****/}
          {poke.fields.evolution ? (
            <Container maxWidth="xl" sx={{ mt: 5 }}>
              <Box id="evolution">
                <Evolution key={poke.id} pokemon={poke} />
              </Box>
            </Container>
          ) : (
            ""
          )}

          {/***** WEAKNESSES *****/}
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

          {/***** ABILITIES *****/}
          <Container maxWidth="xl" sx={{ mt: 5 }}>
            <Box id="abilities">
              <Abilities key={poke.id} pokemon={poke} />
            </Box>
          </Container>

          {/***** BREEDING *****/}
          <Container maxWidth="xl" sx={{ mt: 5 }}>
            <Box id="breeding">
              <h2>Breeding</h2>
              <Box>
                <EggGroups key={poke.id} pokemon={poke} />
              </Box>
              <Box>
                <h3>Egg Cycles</h3>
                <p className="eggCycles">{poke.fields.eggCycles}</p>
                <p className="eggCyclesSteps">
                  ({poke.fields.eggCycles * 255}-{poke.fields.eggCycles * 257}{" "}
                  steps)
                </p>
              </Box>
            </Box>
          </Container>

          {/***** MORE INFO *****/}
          <Container maxWidth="xl" sx={{ mt: 5 }}>
            <Box id="more">
              <Box className="gendAndSize">
                <Box id="gendRatio">
                  <h3>Gender Ratio</h3>
                  <div
                    className="genderPie"
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: "50%",
                      backgroundImage: `conic-gradient(hsl(208, 91%, 40%) ${
                        poke.fields.MGendRatio * 100
                      }%, hsl(356, 92%, 76%) 0)`
                    }}
                  />
                  <p>
                    <MaleRoundedIcon />
                    {poke.fields.MGendRatio * 100}%
                  </p>
                  <p>
                    <FemaleRoundedIcon />
                    {poke.fields.FGendRatio * 100}%
                  </p>
                </Box>
                <Box id="height">
                  <h3>Height</h3>
                  <p>{Math.round((poke.fields.height / 2.54) * 100) / 100}"</p>
                  <p>{poke.fields.height} m</p>
                </Box>
                <Box id="weight">
                  <h3>Weight</h3>
                  <p>
                    {Math.round(poke.fields.weight * 2.205 * 100) / 100} lbs
                  </p>
                  <p>{poke.fields.weight} kg</p>
                </Box>
              </Box>
              <Box id="evYield">
                <h3>EV Yield</h3>
                {poke.fields.evYield.map((ev, index) => (
                  <Chip key={index} label={ev}></Chip>
                ))}
              </Box>
              <h3 id="catchRate">Catch Rate</h3>
              <p>{poke.fields.catchRate}</p>
              <h3 id="friendship">Base Friendship</h3>
              <p>{poke.fields.baseFriendship}</p>
              <h3 id="experience">Base Experience</h3>
              <p>{poke.fields.baseExperience}</p>
              <h3 id="growthRate">Growth Rate</h3>
              <p>{poke.fields.growthRate}</p>
            </Box>
          </Container>

          <Divider sx={{ mt: 5 }} />

          {/***** GENERATION SPECIFIC INFO *****/}
          <Container
            maxWidth="xl"
            sx={{ mt: 5, pt: 2, pb: 2, background: "#EEEEEE" }}
          >
            <Box id="genInfo">
              <TabsUnstyled defaultValue={0}>
                <TabsListUnstyled className="chipTabs">
                  {generations.map((gen, index) => (
                    <TabUnstyled>
                      <Chip key={index} label={gen} clickable />
                    </TabUnstyled>
                  ))}
                </TabsListUnstyled>
                <TabPanelUnstyled value={0}>
                  <Box>
                    <h2>Pokédex Entries</h2>
                    <h3 className="red">Red</h3>
                    <p>{poke.fields.redText}</p>
                    <Divider />
                    <h3 className="blue">Blue</h3>
                    <p>{poke.fields.blueText}</p>
                    <Divider />
                    <h3 className="yellow">Yellow</h3>
                    <p>{poke.fields.yellowText}</p>
                  </Box>
                  <Box sx={{ mt: 5 }}>
                    <h2>Where to Find {poke.fields.name}</h2>
                    <h3 className="red">Red</h3>
                    <Chip label={poke.fields.redLocations} />
                    <Divider />
                    <h3 className="blue">Blue</h3>
                    <Chip label={poke.fields.blueLocations} />
                    <Divider />
                    <h3 className="yellow">Yellow</h3>
                    <Chip label={poke.fields.yellowLocations} />
                  </Box>
                  {poke.fields.moves ? (
                    <Box sx={{ mt: 5 }}>
                      <h2>Moves</h2>
                      <Moves pokemon={poke} game="Red/Blue" />
                    </Box>
                  ) : (
                    ""
                  )}
                </TabPanelUnstyled>
                <TabPanelUnstyled value={1}>
                  <Box>
                    <h2>Pokédex Entries</h2>
                    <h3 className="gold">Gold</h3>
                    <p>{poke.fields.goldText}</p>
                    <Divider />
                    <h3 className="silver">Silver</h3>
                    <p>{poke.fields.silverText}</p>
                    <Divider />
                    <h3 className="crystal">Crystal</h3>
                    <p>{poke.fields.crystalText}</p>
                  </Box>
                  <Box sx={{ mt: 5 }}>
                    <h2>Where to Find {poke.fields.name}</h2>
                    <h3 className="gold">Gold</h3>
                    <Chip label={poke.fields.goldLocations} />
                    <Divider />
                    <h3 className="silver">Silver</h3>
                    <Chip label={poke.fields.silverLocations} />
                    <Divider />
                    <h3 className="crystal">Crystal</h3>
                    <Chip label={poke.fields.crystalLocations} />
                  </Box>
                  {poke.fields.moves ? (
                    <Box sx={{ mt: 5 }}>
                      <h2>Moves</h2>
                      {poke.fields.moves.map((move, index) => (
                        <p key={index}>{move}</p>
                      ))}
                    </Box>
                  ) : (
                    ""
                  )}
                </TabPanelUnstyled>
                <TabPanelUnstyled value={2}>
                  <Box>
                    <h2>Pokédex Entries</h2>
                    <h3 className="ruby">Ruby</h3>
                    <p>{poke.fields.rubyText}</p>
                    <Divider />
                    <h3 className="sapphire">Sapphire</h3>
                    <p>{poke.fields.sapphireText}</p>
                    <Divider />
                    <h3 className="emerald">Emerald</h3>
                    <p>{poke.fields.emeraldText}</p>
                    <Divider />
                    <h3 className="fireRed">FireRed</h3>
                    <p>{poke.fields.fireRedText}</p>
                    <Divider />
                    <h3 className="leafGreen">LeafGreen</h3>
                    <p>{poke.fields.leafGreenText}</p>
                  </Box>
                  <Box sx={{ mt: 5 }}>
                    <h2>Where to Find {poke.fields.name}</h2>
                    <h3 className="ruby">Ruby</h3>
                    <Chip label={poke.fields.rubyLocations} />
                    <Divider />
                    <h3 className="sapphire">Sapphire</h3>
                    <Chip label={poke.fields.sapphireLocations} />
                    <Divider />
                    <h3 className="emerald">Emerald</h3>
                    <Chip label={poke.fields.emeraldLocations} />
                    <Divider />
                    <h3 className="fireRed">FireRed</h3>
                    <Chip label={poke.fields.fireRedLocations} />
                    <Divider />
                    <h3 className="leafGreen">LeafGreen</h3>
                    <Chip label={poke.fields.leafGreenLocations} />
                  </Box>
                  {poke.fields.moves ? (
                    <Box sx={{ mt: 5 }}>
                      <h2>Moves</h2>
                      {poke.fields.moves.map((move, index) => (
                        <p key={index}>{move}</p>
                      ))}
                    </Box>
                  ) : (
                    ""
                  )}
                </TabPanelUnstyled>
                <TabPanelUnstyled value={3}>
                  <Box>
                    <h2>Pokédex Entries</h2>
                    <h3 className="ruby">Ruby</h3>
                    <p>{poke.fields.rubyText}</p>
                    <Divider />
                    <h3 className="sapphire">Sapphire</h3>
                    <p>{poke.fields.sapphireText}</p>
                    <Divider />
                    <h3 className="emerald">Emerald</h3>
                    <p>{poke.fields.emeraldText}</p>
                    <Divider />
                    <h3 className="fireRed">FireRed</h3>
                    <p>{poke.fields.fireRedText}</p>
                    <Divider />
                    <h3 className="leafGreen">LeafGreen</h3>
                    <p>{poke.fields.leafGreenText}</p>
                  </Box>
                  <Box sx={{ mt: 5 }}>
                    <h2>Where to Find {poke.fields.name}</h2>
                    <h3 className="ruby">Ruby</h3>
                    <Chip label={poke.fields.rubyLocations} />
                    <Divider />
                    <h3 className="sapphire">Sapphire</h3>
                    <Chip label={poke.fields.sapphireLocations} />
                    <Divider />
                    <h3 className="emerald">Emerald</h3>
                    <Chip label={poke.fields.emeraldLocations} />
                    <Divider />
                    <h3 className="fireRed">FireRed</h3>
                    <Chip label={poke.fields.fireRedLocations} />
                    <Divider />
                    <h3 className="leafGreen">LeafGreen</h3>
                    <Chip label={poke.fields.leafGreenLocations} />
                  </Box>
                  {poke.fields.moves ? (
                    <Box sx={{ mt: 5 }}>
                      <h2>Moves</h2>
                      {poke.fields.moves.map((move, index) => (
                        <p key={index}>{move}</p>
                      ))}
                    </Box>
                  ) : (
                    ""
                  )}
                </TabPanelUnstyled>
                <TabPanelUnstyled value={4}>
                  <Box>
                    <h2>Pokédex Entries</h2>
                    <h3 className="gold">Gold</h3>
                    <p>{poke.fields.goldText}</p>
                    <Divider />
                    <h3 className="silver">Silver</h3>
                    <p>{poke.fields.silverText}</p>
                    <Divider />
                    <h3 className="crystal">Crystal</h3>
                    <p>{poke.fields.crystalText}</p>
                  </Box>
                  <Box sx={{ mt: 5 }}>
                    <h2>Where to Find {poke.fields.name}</h2>
                    <h3 className="gold">Gold</h3>
                    <Chip label={poke.fields.goldLocations} />
                    <Divider />
                    <h3 className="silver">Silver</h3>
                    <Chip label={poke.fields.silverLocations} />
                    <Divider />
                    <h3 className="crystal">Crystal</h3>
                    <Chip label={poke.fields.crystalLocations} />
                  </Box>
                  {poke.fields.moves ? (
                    <Box sx={{ mt: 5 }}>
                      <h2>Moves</h2>
                      {poke.fields.moves.map((move, index) => (
                        <p key={index}>{move}</p>
                      ))}
                    </Box>
                  ) : (
                    ""
                  )}
                </TabPanelUnstyled>
                <TabPanelUnstyled value={5}>
                  <Box>
                    <h2>Pokédex Entries</h2>
                    <h3 className="gold">Gold</h3>
                    <p>{poke.fields.goldText}</p>
                    <Divider />
                    <h3 className="silver">Silver</h3>
                    <p>{poke.fields.silverText}</p>
                    <Divider />
                    <h3 className="crystal">Crystal</h3>
                    <p>{poke.fields.crystalText}</p>
                  </Box>
                  <Box sx={{ mt: 5 }}>
                    <h2>Where to Find {poke.fields.name}</h2>
                    <h3 className="gold">Gold</h3>
                    <Chip label={poke.fields.goldLocations} />
                    <Divider />
                    <h3 className="silver">Silver</h3>
                    <Chip label={poke.fields.silverLocations} />
                    <Divider />
                    <h3 className="crystal">Crystal</h3>
                    <Chip label={poke.fields.crystalLocations} />
                  </Box>
                  {poke.fields.moves ? (
                    <Box sx={{ mt: 5 }}>
                      <h2>Moves</h2>
                      {poke.fields.moves.map((move, index) => (
                        <p key={index}>{move}</p>
                      ))}
                    </Box>
                  ) : (
                    ""
                  )}
                </TabPanelUnstyled>
                <TabPanelUnstyled value={6}>
                  <Box>
                    <h2>Pokédex Entries</h2>
                    <h3 className="gold">Gold</h3>
                    <p>{poke.fields.goldText}</p>
                    <Divider />
                    <h3 className="silver">Silver</h3>
                    <p>{poke.fields.silverText}</p>
                    <Divider />
                    <h3 className="crystal">Crystal</h3>
                    <p>{poke.fields.crystalText}</p>
                  </Box>
                  <Box sx={{ mt: 5 }}>
                    <h2>Where to Find {poke.fields.name}</h2>
                    <h3 className="gold">Gold</h3>
                    <Chip label={poke.fields.goldLocations} />
                    <Divider />
                    <h3 className="silver">Silver</h3>
                    <Chip label={poke.fields.silverLocations} />
                    <Divider />
                    <h3 className="crystal">Crystal</h3>
                    <Chip label={poke.fields.crystalLocations} />
                  </Box>
                  {poke.fields.moves ? (
                    <Box sx={{ mt: 5 }}>
                      <h2>Moves</h2>
                      {poke.fields.moves.map((move, index) => (
                        <p key={index}>{move}</p>
                      ))}
                    </Box>
                  ) : (
                    ""
                  )}
                </TabPanelUnstyled>
                <TabPanelUnstyled value={7}>
                  <Box>
                    <h2>Pokédex Entries</h2>
                    <h3 className="gold">Gold</h3>
                    <p>{poke.fields.goldText}</p>
                    <Divider />
                    <h3 className="silver">Silver</h3>
                    <p>{poke.fields.silverText}</p>
                    <Divider />
                    <h3 className="crystal">Crystal</h3>
                    <p>{poke.fields.crystalText}</p>
                  </Box>
                  <Box sx={{ mt: 5 }}>
                    <h2>Where to Find {poke.fields.name}</h2>
                    <h3 className="gold">Gold</h3>
                    <Chip label={poke.fields.goldLocations} />
                    <Divider />
                    <h3 className="silver">Silver</h3>
                    <Chip label={poke.fields.silverLocations} />
                    <Divider />
                    <h3 className="crystal">Crystal</h3>
                    <Chip label={poke.fields.crystalLocations} />
                  </Box>
                  {poke.fields.moves ? (
                    <Box sx={{ mt: 5 }}>
                      <h2>Moves</h2>
                      {poke.fields.moves.map((move, index) => (
                        <p key={index}>{move}</p>
                      ))}
                    </Box>
                  ) : (
                    ""
                  )}
                </TabPanelUnstyled>
                <TabPanelUnstyled value={8}>
                  <Box>
                    <h2>Pokédex Entries</h2>
                    <h3 className="gold">Gold</h3>
                    <p>{poke.fields.goldText}</p>
                    <Divider />
                    <h3 className="silver">Silver</h3>
                    <p>{poke.fields.silverText}</p>
                    <Divider />
                    <h3 className="crystal">Crystal</h3>
                    <p>{poke.fields.crystalText}</p>
                  </Box>
                  <Box sx={{ mt: 5 }}>
                    <h2>Where to Find {poke.fields.name}</h2>
                    <h3 className="gold">Gold</h3>
                    <Chip label={poke.fields.goldLocations} />
                    <Divider />
                    <h3 className="silver">Silver</h3>
                    <Chip label={poke.fields.silverLocations} />
                    <Divider />
                    <h3 className="crystal">Crystal</h3>
                    <Chip label={poke.fields.crystalLocations} />
                  </Box>
                  {poke.fields.moves ? (
                    <Box sx={{ mt: 5 }}>
                      <h2>Moves</h2>
                      {poke.fields.moves.map((move, index) => (
                        <p key={index}>{move}</p>
                      ))}
                    </Box>
                  ) : (
                    ""
                  )}
                </TabPanelUnstyled>
              </TabsUnstyled>
            </Box>
          </Container>

          {/***** NAME TRANSLATIONS *****/}
          <Container maxWidth="xl" sx={{ mt: 5 }}>
            <Box id="name">
              <h2>Name & Translations</h2>
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
        </Box>
      ))}
    </div>
  );
}
