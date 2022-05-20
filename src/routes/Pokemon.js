import React, { useState, useEffect } from "react";

import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
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
import { Location } from "../components/Location";
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

  const [gen1MoveValue, setGen1MoveValue] = useState("1");
  const handleGen1MoveValue = (event, newValue) => {
    setGen1MoveValue(newValue);
  };
  const [gen2MoveValue, setGen2MoveValue] = useState("1");
  const handleGen2MoveValue = (event, newValue) => {
    setGen2MoveValue(newValue);
  };
  const [gen3MoveValue, setGen3MoveValue] = useState("1");
  const handleGen3MoveValue = (event, newValue) => {
    setGen3MoveValue(newValue);
  };
  const [gen4MoveValue, setGen4MoveValue] = useState("1");
  const handleGen4MoveValue = (event, newValue) => {
    setGen4MoveValue(newValue);
  };
  const [gen5MoveValue, setGen5MoveValue] = useState("1");
  const handleGen5MoveValue = (event, newValue) => {
    setGen5MoveValue(newValue);
  };
  const [gen6MoveValue, setGen6MoveValue] = useState("1");
  const handleGen6MoveValue = (event, newValue) => {
    setGen6MoveValue(newValue);
  };
  const [gen7MoveValue, setGen7MoveValue] = useState("1");
  const handleGen7MoveValue = (event, newValue) => {
    setGen7MoveValue(newValue);
  };
  const [gen8MoveValue, setGen8MoveValue] = useState("1");
  const handleGen8MoveValue = (event, newValue) => {
    setGen8MoveValue(newValue);
  };
  const [gen9MoveValue, setGen9MoveValue] = useState("1");
  const handleGen9MoveValue = (event, newValue) => {
    setGen9MoveValue(newValue);
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
      {pokemon.map((poke, index) => (
        <Box
          key={index}
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

          {/***** GENERATION SPECIFIC INFO *****/}
          <Container
            maxWidth="xl"
            sx={{ mt: 5, pt: 5, pb: 10, background: "#EEEEEE" }}
          >
            <Box id="genInfo">
              <TabsUnstyled defaultValue={7}>
                <TabsListUnstyled className="chipTabs">
                  {poke.fields.redText ||
                  poke.fields.blueText ||
                  poke.fields.yellowText ? (
                    <TabUnstyled>
                      <Chip label="Gen I" clickable />
                    </TabUnstyled>
                  ) : (
                    <TabUnstyled></TabUnstyled>
                  )}
                  {poke.fields.goldText ||
                  poke.fields.silverText ||
                  poke.fields.crystalText ? (
                    <TabUnstyled>
                      <Chip label="Gen II" clickable />
                    </TabUnstyled>
                  ) : (
                    <TabUnstyled></TabUnstyled>
                  )}
                  {poke.fields.rubyText ||
                  poke.fields.sapphireText ||
                  poke.fields.emeraldText ||
                  poke.fields.fireRedText ||
                  poke.fields.leafGreenText ? (
                    <TabUnstyled>
                      <Chip label="Gen III" clickable />
                    </TabUnstyled>
                  ) : (
                    <TabUnstyled></TabUnstyled>
                  )}
                  {poke.fields.diamondText ||
                  poke.fields.pearlText ||
                  poke.fields.platinumText ||
                  poke.fields.heartGoldText ||
                  poke.fields.soulSilverText ? (
                    <TabUnstyled>
                      <Chip label="Gen IV" clickable />
                    </TabUnstyled>
                  ) : (
                    <TabUnstyled></TabUnstyled>
                  )}
                  {poke.fields.blackText ||
                  poke.fields.whiteText ||
                  poke.fields.black2Text ||
                  poke.fields.white2Text ? (
                    <TabUnstyled>
                      <Chip label="Gen V" clickable />
                    </TabUnstyled>
                  ) : (
                    <TabUnstyled></TabUnstyled>
                  )}
                  {poke.fields.xText ||
                  poke.fields.yText ||
                  poke.fields.omegaRubyText ||
                  poke.fields.alphaSapphireText ? (
                    <TabUnstyled>
                      <Chip label="Gen VI" clickable />
                    </TabUnstyled>
                  ) : (
                    <TabUnstyled></TabUnstyled>
                  )}
                  {poke.fields.sunText ||
                  poke.fields.moonText ||
                  poke.fields.ultraSunText ||
                  poke.fields.ultraMoonText ||
                  poke.fields.letsGoPikachuText ||
                  poke.fields.letsGoEeveeText ? (
                    <TabUnstyled>
                      <Chip label="Gen VII" clickable />
                    </TabUnstyled>
                  ) : (
                    <TabUnstyled></TabUnstyled>
                  )}
                  {poke.fields.swordText ||
                  poke.fields.shieldText ||
                  poke.fields.brilliantDiamondText ||
                  poke.fields.shiningPearlText ||
                  poke.fields.legendsArceusText ? (
                    <TabUnstyled>
                      <Chip label="Gen VIII" clickable />
                    </TabUnstyled>
                  ) : (
                    <TabUnstyled></TabUnstyled>
                  )}
                  {poke.fields.scarletText || poke.fields.violetText ? (
                    <TabUnstyled>
                      <Chip label="Gen IX" clickable />
                    </TabUnstyled>
                  ) : (
                    <TabUnstyled></TabUnstyled>
                  )}
                </TabsListUnstyled>
                <TabPanelUnstyled value={0}>
                  {poke.fields.redText ||
                  poke.fields.blueText ||
                  poke.fields.yellowText ? (
                    <Box>
                      <h2>Pokédex Entries</h2>
                      {poke.fields.redText === poke.fields.blueText ? (
                        poke.fields.blueText === poke.fields.yellowText ? (
                          <>
                            <h3>
                              <span className="red">Red</span> /{" "}
                              <span className="blue">Blue</span> /{" "}
                              <span className="yellow">Yellow</span>
                            </h3>
                            <p>{poke.fields.redText}</p>
                          </>
                        ) : (
                          <>
                            {poke.fields.redText ? (
                              <>
                                <h3>
                                  <span className="red">Red</span> /{" "}
                                  <span className="blue">Blue</span>
                                </h3>
                                <p>{poke.fields.redText}</p>
                              </>
                            ) : (
                              ""
                            )}
                            {poke.fields.yellowText ? (
                              <>
                                <h3>
                                  <span className="yellow">Yellow</span>
                                </h3>
                                <p>{poke.fields.yellowText}</p>
                              </>
                            ) : (
                              ""
                            )}
                          </>
                        )
                      ) : (
                        <>
                          {poke.fields.redText ? (
                            <>
                              <h3 className="red">Red</h3>
                              <p>{poke.fields.redText}</p>
                            </>
                          ) : (
                            ""
                          )}
                          {poke.fields.blueText ? (
                            <>
                              <h3 className="blue">Blue</h3>
                              <p>{poke.fields.blueText}</p>
                            </>
                          ) : (
                            ""
                          )}
                          {poke.fields.yellowText ? (
                            <>
                              <h3 className="yellow">Yellow</h3>
                              <p>{poke.fields.yellowText}</p>
                            </>
                          ) : (
                            ""
                          )}
                        </>
                      )}
                    </Box>
                  ) : (
                    ""
                  )}
                  <Box sx={{ mt: 5 }}>
                    <h2>Where to Find {poke.fields.name}</h2>
                    <h3 className="red">Red</h3>
                    <Location pokemon={poke} game="I - Red" />
                    <Divider />
                    <h3 className="blue">Blue</h3>
                    <Location pokemon={poke} game="I - Blue" />
                    <Divider />
                    <h3 className="yellow">Yellow</h3>
                    <Location pokemon={poke} game="I - Yellow" />
                  </Box>
                  {poke.fields.moves ? (
                    <Box sx={{ mt: 5 }} className="moves">
                      <h2>Moves</h2>
                      <TabContext value={gen1MoveValue}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                          <TabList
                            onChange={handleGen1MoveValue}
                            aria-label="game selection"
                          >
                            <Tab label="Red/Blue" value="1" />
                            <Tab label="Yellow" value="2" />
                          </TabList>
                        </Box>
                        <TabPanel value="1">
                          <Moves pokemon={poke} game="Red/Blue" />
                        </TabPanel>
                        <TabPanel value="2">
                          <Moves pokemon={poke} game="Yellow" />
                        </TabPanel>
                      </TabContext>
                    </Box>
                  ) : (
                    ""
                  )}
                </TabPanelUnstyled>

                <TabPanelUnstyled value={1}>
                  {poke.fields.goldText ||
                  poke.fields.silverText ||
                  poke.fields.crystalText ? (
                    <Box>
                      <h2>Pokédex Entries</h2>
                      {poke.fields.goldText === poke.fields.silverText ? (
                        poke.fields.silverText === poke.fields.crystalText ? (
                          <>
                            <h3>
                              <span className="gold">Gold</span> /{" "}
                              <span className="silver">Silver</span> /{" "}
                              <span className="crystal">Crystal</span>
                            </h3>
                            <p>{poke.fields.goldText}</p>
                          </>
                        ) : (
                          <>
                            {poke.fields.goldText ? (
                              <>
                                <h3>
                                  <span className="gold">Gold</span> /{" "}
                                  <span className="silver">Silver</span>
                                </h3>
                                <p>{poke.fields.goldText}</p>
                              </>
                            ) : (
                              ""
                            )}
                            {poke.fields.crystalText ? (
                              <>
                                <h3>
                                  <span className="crystal">Crystal</span>
                                </h3>
                                <p>{poke.fields.crystalText}</p>
                              </>
                            ) : (
                              ""
                            )}
                          </>
                        )
                      ) : (
                        <>
                          {poke.fields.goldText ? (
                            <>
                              <h3 className="gold">Gold</h3>
                              <p>{poke.fields.goldText}</p>
                            </>
                          ) : (
                            ""
                          )}
                          {poke.fields.silverText ? (
                            <>
                              <h3 className="silver">Silver</h3>
                              <p>{poke.fields.silverText}</p>
                            </>
                          ) : (
                            ""
                          )}
                          {poke.fields.crystalText ? (
                            <>
                              <h3 className="crystal">Crystal</h3>
                              <p>{poke.fields.crystalText}</p>
                            </>
                          ) : (
                            ""
                          )}
                        </>
                      )}
                    </Box>
                  ) : (
                    ""
                  )}
                  <Box sx={{ mt: 5 }}>
                    <h2>Where to Find {poke.fields.name}</h2>
                    <h3 className="gold">Gold</h3>
                    <Location pokemon={poke} game="II - Gold" />
                    <Divider />
                    <h3 className="silver">Silver</h3>
                    <Location pokemon={poke} game="II - Silver" />
                    <Divider />
                    <h3 className="crystal">Crystal</h3>
                    <Location pokemon={poke} game="II - Crystal" />
                  </Box>
                  {poke.fields.moves ? (
                    <Box sx={{ mt: 5 }} className="moves">
                      <h2>Moves</h2>
                      <TabContext value={gen2MoveValue}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                          <TabList
                            onChange={handleGen2MoveValue}
                            aria-label="game selection"
                          >
                            <Tab label="Gold/Silver" value="1" />
                            <Tab label="Crystal" value="2" />
                          </TabList>
                        </Box>
                        <TabPanel value="1">
                          <Moves pokemon={poke} game="Gold/Silver" />
                        </TabPanel>
                        <TabPanel value="2">
                          <Moves pokemon={poke} game="Crystal" />
                        </TabPanel>
                      </TabContext>
                    </Box>
                  ) : (
                    ""
                  )}
                </TabPanelUnstyled>

                <TabPanelUnstyled value={2}>
                  {poke.fields.rubyText ||
                  poke.fields.sapphireText ||
                  poke.fields.emeraldText ||
                  poke.fields.fireRedText ||
                  poke.fields.leafGreenText ? (
                    <Box>
                      <h2>Pokédex Entries</h2>
                      {poke.fields.rubyText ||
                      poke.fields.sapphireText ||
                      poke.fields.emeraldText ? (
                        poke.fields.rubyText === poke.fields.sapphireText ? (
                          poke.fields.sapphireText ===
                          poke.fields.emeraldText ? (
                            <>
                              <h3>
                                <span className="ruby">Ruby</span> /{" "}
                                <span className="sapphire">Sapphire</span> /{" "}
                                <span className="emerald">Emerald</span>
                              </h3>
                              <p>{poke.fields.rubyText}</p>
                            </>
                          ) : (
                            <>
                              {poke.fields.rubyText ? (
                                <>
                                  <h3>
                                    <span className="ruby">Ruby</span> /{" "}
                                    <span className="sapphire">Sapphire</span>
                                  </h3>
                                  <p>{poke.fields.rubyText}</p>
                                </>
                              ) : (
                                ""
                              )}
                              {poke.fields.emeraldText ? (
                                <>
                                  <h3>
                                    <span className="emerald">Emerald</span>
                                  </h3>
                                  <p>{poke.fields.emeraldText}</p>
                                </>
                              ) : (
                                ""
                              )}
                            </>
                          )
                        ) : (
                          <>
                            {poke.fields.rubyText ? (
                              <>
                                <h3 className="ruby">Ruby</h3>
                                <p>{poke.fields.rubyText}</p>
                              </>
                            ) : (
                              ""
                            )}
                            {poke.fields.sapphireText ? (
                              <>
                                <h3 className="sapphire">Sapphire</h3>
                                <p>{poke.fields.sapphireText}</p>
                              </>
                            ) : (
                              ""
                            )}
                            {poke.fields.emeraldText ? (
                              <>
                                <h3 className="emerald">Emerald</h3>
                                <p>{poke.fields.emeraldText}</p>
                              </>
                            ) : (
                              ""
                            )}
                          </>
                        )
                      ) : (
                        ""
                      )}
                      {poke.fields.fireRedText || poke.fields.leafGreenText ? (
                        poke.fields.fireRedText ===
                        poke.fields.leafGreenText ? (
                          <>
                            <h3>
                              <span className="fireRed">FireRed</span> /{" "}
                              <span className="leafGreen">LeafGreen</span>
                            </h3>
                            <p>{poke.fields.fireRedText}</p>
                          </>
                        ) : (
                          <>
                            {poke.fields.fireRedText ? (
                              <>
                                <h3 className="fireRed">FireRed</h3>
                                <p>{poke.fields.fireRedText}</p>
                              </>
                            ) : (
                              ""
                            )}
                            {poke.fields.leafGreenText ? (
                              <>
                                <h3 className="leafGreen">LeafGreen</h3>
                                <p>{poke.fields.leafGreenText}</p>
                              </>
                            ) : (
                              ""
                            )}
                          </>
                        )
                      ) : (
                        ""
                      )}
                    </Box>
                  ) : (
                    ""
                  )}
                  <Box sx={{ mt: 5 }}>
                    <h2>Where to Find {poke.fields.name}</h2>
                    <h3 className="ruby">Ruby</h3>
                    <Location pokemon={poke} game="III - Ruby" />
                    <Divider />
                    <h3 className="sapphire">Sapphire</h3>
                    <Location pokemon={poke} game="III - Sapphire" />
                    <Divider />
                    <h3 className="emerald">Emerald</h3>
                    <Location pokemon={poke} game="III - Emerald" />
                    <Divider />
                    <h3 className="fireRed">FireRed</h3>
                    <Location pokemon={poke} game="III - FireRed" />
                    <Divider />
                    <h3 className="leafGreen">LeafGreen</h3>
                    <Location pokemon={poke} game="III - LeafGreen" />
                  </Box>
                  {poke.fields.moves ? (
                    <Box sx={{ mt: 5 }} className="moves">
                      <h2>Moves</h2>
                      <TabContext value={gen3MoveValue}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                          <TabList
                            onChange={handleGen3MoveValue}
                            aria-label="game selection"
                          >
                            <Tab label="Ruby/Sapphire" value="1" />
                            <Tab label="Emerald" value="2" />
                            <Tab label="FireRed/LeafGreen" value="3" />
                          </TabList>
                        </Box>
                        <TabPanel value="1">
                          <Moves pokemon={poke} game="Ruby/Sapphire" />
                        </TabPanel>
                        <TabPanel value="2">
                          <Moves pokemon={poke} game="Emerald" />
                        </TabPanel>
                        <TabPanel value="3">
                          <Moves pokemon={poke} game="FireRed/LeafGreen" />
                        </TabPanel>
                      </TabContext>
                    </Box>
                  ) : (
                    ""
                  )}
                </TabPanelUnstyled>

                <TabPanelUnstyled value={3}>
                  {poke.fields.diamondText ||
                  poke.fields.pearlText ||
                  poke.fields.platinumText ||
                  poke.fields.heartGoldText ||
                  poke.fields.soulSilverText ? (
                    <Box>
                      <h2>Pokédex Entries</h2>
                      {poke.fields.diamondText ||
                      poke.fields.pearlText ||
                      poke.fields.platinumText ? (
                        poke.fields.diamondText === poke.fields.pearlText ? (
                          poke.fields.pearlText === poke.fields.platinumText ? (
                            <>
                              <h3>
                                <span className="diamond">Diamond</span> /{" "}
                                <span className="pearl">Pearl</span> /{" "}
                                <span className="platinum">Platinum</span>
                              </h3>
                              <p>{poke.fields.diamondText}</p>
                            </>
                          ) : (
                            <>
                              {poke.fields.diamondText ? (
                                <>
                                  <h3>
                                    <span className="diamond">Diamond</span> /{" "}
                                    <span className="pearl">Pearl</span>
                                  </h3>
                                  <p>{poke.fields.diamondText}</p>
                                </>
                              ) : (
                                ""
                              )}
                              {poke.fields.platinumText ? (
                                <>
                                  <h3>
                                    <span className="platinum">Platinum</span>
                                  </h3>
                                  <p>{poke.fields.platinumText}</p>
                                </>
                              ) : (
                                ""
                              )}
                            </>
                          )
                        ) : (
                          <>
                            {poke.fields.diamondText ? (
                              <>
                                <h3 className="diamond">Diamond</h3>
                                <p>{poke.fields.diamondText}</p>
                              </>
                            ) : (
                              ""
                            )}
                            {poke.fields.pearlText ? (
                              <>
                                <h3 className="pearl">Pearl</h3>
                                <p>{poke.fields.pearlText}</p>
                              </>
                            ) : (
                              ""
                            )}
                            {poke.fields.platinumText ? (
                              <>
                                <h3 className="platinum">Platinum</h3>
                                <p>{poke.fields.platinumText}</p>
                              </>
                            ) : (
                              ""
                            )}
                          </>
                        )
                      ) : (
                        ""
                      )}
                      {poke.fields.heartGoldText ||
                      poke.fields.soulSilverText ? (
                        poke.fields.heartGoldText ===
                        poke.fields.soulSilverText ? (
                          <>
                            <h3>
                              <span className="heartGold">HeartGold</span> /{" "}
                              <span className="soulSilver">SoulSilver</span>
                            </h3>
                            <p>{poke.fields.heartGoldText}</p>
                          </>
                        ) : (
                          <>
                            {poke.fields.heartGoldText ? (
                              <>
                                <h3 className="heartGold">HeartGold</h3>
                                <p>{poke.fields.heartGoldText}</p>
                              </>
                            ) : (
                              ""
                            )}
                            {poke.fields.soulSilverText ? (
                              <>
                                <h3 className="soulSilver">SoulSilver</h3>
                                <p>{poke.fields.soulSilverText}</p>
                              </>
                            ) : (
                              ""
                            )}
                          </>
                        )
                      ) : (
                        ""
                      )}
                    </Box>
                  ) : (
                    ""
                  )}
                  <Box sx={{ mt: 5 }}>
                    <h2>Where to Find {poke.fields.name}</h2>
                    <h3 className="diamond">Diamond</h3>
                    <Location pokemon={poke} game="IV - Diamond" />
                    <Divider />
                    <h3 className="pearl">Pearl</h3>
                    <Location pokemon={poke} game="IV - Pearl" />
                    <Divider />
                    <h3 className="platinum">Platinum</h3>
                    <Location pokemon={poke} game="IV - Platinum" />
                    <Divider />
                    <h3 className="heartGold">HeartGold</h3>
                    <Location pokemon={poke} game="IV - HeartGold" />
                    <Divider />
                    <h3 className="soulSilver">SoulSilver</h3>
                    <Location pokemon={poke} game="IV - SoulSilver" />
                  </Box>
                  {poke.fields.moves ? (
                    <Box sx={{ mt: 5 }} className="moves">
                      <h2>Moves</h2>
                      <TabContext value={gen4MoveValue}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                          <TabList
                            onChange={handleGen4MoveValue}
                            aria-label="game selection"
                          >
                            <Tab label="Diamond/Pearl" value="1" />
                            <Tab label="Platinum" value="2" />
                            <Tab label="HeartGold/SoulSilver" value="3" />
                          </TabList>
                        </Box>
                        <TabPanel value="1">
                          <Moves pokemon={poke} game="Ruby/Sapphire" />
                        </TabPanel>
                        <TabPanel value="2">
                          <Moves pokemon={poke} game="Platinum" />
                        </TabPanel>
                        <TabPanel value="3">
                          <Moves pokemon={poke} game="HeartGold/SoulSilver" />
                        </TabPanel>
                      </TabContext>
                    </Box>
                  ) : (
                    ""
                  )}
                </TabPanelUnstyled>

                <TabPanelUnstyled value={4}>
                  {poke.fields.blackText ||
                  poke.fields.whiteText ||
                  poke.fields.black2Text ||
                  poke.fields.white2Text ? (
                    <Box>
                      <h2>Pokédex Entries</h2>
                      {poke.fields.blackText || poke.fields.whiteText ? (
                        poke.fields.blackText === poke.fields.whiteText ? (
                          <>
                            <h3>
                              <span className="blackGame">Black</span> /{" "}
                              <span className="whiteGame">White</span>
                            </h3>
                            <p>{poke.fields.blackText}</p>
                          </>
                        ) : (
                          <>
                            {poke.fields.blackText ? (
                              <>
                                <h3 className="blackGame">Black</h3>
                                <p>{poke.fields.blackText}</p>
                              </>
                            ) : (
                              ""
                            )}
                            {poke.fields.whiteText ? (
                              <>
                                <h3 className="whiteGame">White</h3>
                                <p>{poke.fields.whiteText}</p>
                              </>
                            ) : (
                              ""
                            )}
                          </>
                        )
                      ) : (
                        ""
                      )}
                      {poke.fields.black2Text || poke.fields.white2Text ? (
                        poke.fields.black2Text === poke.fields.white2Text ? (
                          <>
                            <h3>
                              <span className="black2">Black 2</span> /{" "}
                              <span className="white2">White 2</span>
                            </h3>
                            <p>{poke.fields.black2Text}</p>
                          </>
                        ) : (
                          <>
                            {poke.fields.black2Text ? (
                              <>
                                <h3 className="black2">Black 2</h3>
                                <p>{poke.fields.black2Text}</p>
                              </>
                            ) : (
                              ""
                            )}
                            {poke.fields.white2Text ? (
                              <>
                                <h3 className="white2">White 2</h3>
                                <p>{poke.fields.white2Text}</p>
                              </>
                            ) : (
                              ""
                            )}
                          </>
                        )
                      ) : (
                        ""
                      )}
                    </Box>
                  ) : (
                    ""
                  )}
                  <Box sx={{ mt: 5 }}>
                    <h2>Where to Find {poke.fields.name}</h2>
                    <h3 className="blackGame">Black</h3>
                    <Location pokemon={poke} game="V - Black 1" />
                    <Divider />
                    <h3 className="whiteGame">White</h3>
                    <Location pokemon={poke} game="V - White 1" />
                    <Divider />
                    <h3 className="black2">Black 2</h3>
                    <Location pokemon={poke} game="V - Black 2" />
                    <Divider />
                    <h3 className="white2">White 2</h3>
                    <Location pokemon={poke} game="V - White 2" />
                  </Box>
                </TabPanelUnstyled>

                <TabPanelUnstyled value={5}>
                  {poke.fields.xText ||
                  poke.fields.yText ||
                  poke.fields.omegaRubyText ||
                  poke.fields.alphaSapphireText ? (
                    <Box>
                      <h2>Pokédex Entries</h2>
                      {poke.fields.xText || poke.fields.yText ? (
                        poke.fields.xText === poke.fields.yText ? (
                          <>
                            <h3>
                              <span className="x">X</span> /{" "}
                              <span className="y">Y</span>
                            </h3>
                            <p>{poke.fields.xText}</p>
                          </>
                        ) : (
                          <>
                            {poke.fields.xText ? (
                              <>
                                <h3 className="x">X</h3>
                                <p>{poke.fields.xText}</p>
                              </>
                            ) : (
                              ""
                            )}
                            {poke.fields.yText ? (
                              <>
                                <h3 className="y">Y</h3>
                                <p>{poke.fields.yText}</p>
                              </>
                            ) : (
                              ""
                            )}
                          </>
                        )
                      ) : (
                        ""
                      )}
                      {poke.fields.omegaRubyText ||
                      poke.fields.alphaSapphireText ? (
                        poke.fields.omegaRubyText ===
                        poke.fields.alphaSapphireText ? (
                          <>
                            <h3>
                              <span className="omegaRuby">Omega Ruby</span> /{" "}
                              <span className="alphaSapphire">
                                Alpha Sapphire
                              </span>
                            </h3>
                            <p>{poke.fields.omegaRubyText}</p>
                          </>
                        ) : (
                          <>
                            {poke.fields.omegaRubyText ? (
                              <>
                                <h3 className="omegaRuby">Omega Ruby</h3>
                                <p>{poke.fields.omegaRubyText}</p>
                              </>
                            ) : (
                              ""
                            )}
                            {poke.fields.alphaSapphireText ? (
                              <>
                                <h3 className="alphaSapphire">
                                  Alpha Sapphire
                                </h3>
                                <p>{poke.fields.alphaSapphireText}</p>
                              </>
                            ) : (
                              ""
                            )}
                          </>
                        )
                      ) : (
                        ""
                      )}
                    </Box>
                  ) : (
                    ""
                  )}
                  <Box sx={{ mt: 5 }}>
                    <h2>Where to Find {poke.fields.name}</h2>
                    <h3 className="x">X</h3>
                    <Location pokemon={poke} game="VI - X" />
                    <Divider />
                    <h3 className="y">Y</h3>
                    <Location pokemon={poke} game="VI - Y" />
                    <Divider />
                    <h3 className="omegaRuby">Omega Ruby</h3>
                    <Location pokemon={poke} game="VI - Omega Ruby" />
                    <Divider />
                    <h3 className="alphaSapphire">Alpha Sapphire</h3>
                    <Location pokemon={poke} game="VI - Alpha Sapphire" />
                  </Box>
                </TabPanelUnstyled>

                <TabPanelUnstyled value={6}>
                  <Box>
                    <h2>Pokédex Entries</h2>
                    {poke.fields.sunText ? (
                      <>
                        <h3 className="sun">Sun</h3>
                        <p>{poke.fields.sunText}</p>
                        <Divider />
                      </>
                    ) : (
                      ""
                    )}
                    {poke.fields.moonText ? (
                      <>
                        <h3 className="moon">Moon</h3>
                        <p>{poke.fields.moonText}</p>
                        <Divider />
                      </>
                    ) : (
                      ""
                    )}
                    {poke.fields.ultraSunText ? (
                      <>
                        <h3 className="ultraSun">Ultra Sun</h3>
                        <p>{poke.fields.ultraSunText}</p>
                        <Divider />
                      </>
                    ) : (
                      ""
                    )}
                    {poke.fields.ultraMoonText ? (
                      <>
                        <h3 className="ultraMoon">Ultra Moon</h3>
                        <p>{poke.fields.ultraMoonText}</p>
                        <Divider />
                      </>
                    ) : (
                      ""
                    )}
                    {poke.fields.letsGoPikachuText ? (
                      <>
                        <h3 className="LGPikachu">Let's Go Pikachu</h3>
                        <p>{poke.fields.letsGoPikachuText}</p>
                        <Divider />
                      </>
                    ) : (
                      ""
                    )}
                    {poke.fields.letsGoEeveeText ? (
                      <>
                        <h3 className="LGEevee">Let's Go Eevee</h3>
                        <p>{poke.fields.letsGoEeveeText}</p>
                      </>
                    ) : (
                      ""
                    )}
                  </Box>
                  <Box sx={{ mt: 5 }}>
                    <h2>Where to Find {poke.fields.name}</h2>
                    <h3 className="sun">Sun</h3>
                    <Location pokemon={poke} game="VII - Sun" />
                    <Divider />
                    <h3 className="moon">Moon</h3>
                    <Location pokemon={poke} game="VII - Moon" />
                    <Divider />
                    <h3 className="ultraSun">Ultra Sun</h3>
                    <Location pokemon={poke} game="VII - Ultra Sun" />
                    <Divider />
                    <h3 className="ultraMoon">Ultra Moon</h3>
                    <Location pokemon={poke} game="VII - Ultra Moon" />
                    <Divider />
                    <h3 className="LGPikachu">Let's Go Pikachu</h3>
                    <Location pokemon={poke} game="VII - Let's Go Pikachu" />
                    <Divider />
                    <h3 className="LGEevee">Let's Go Eevee</h3>
                    <Location pokemon={poke} game="VII - Let's Go Eevee" />
                  </Box>
                </TabPanelUnstyled>

                <TabPanelUnstyled value={7}>
                  <Box>
                    <h2>Pokédex Entries</h2>
                    {poke.fields.swordText ? (
                      <>
                        <h3 className="sword">Sword</h3>
                        <p>{poke.fields.swordText}</p>
                        <Divider />
                      </>
                    ) : (
                      ""
                    )}
                    {poke.fields.shieldText ? (
                      <>
                        <h3 className="shield">Shield</h3>
                        <p>{poke.fields.shieldText}</p>
                        <Divider />
                      </>
                    ) : (
                      ""
                    )}
                    {poke.fields.brilliantDiamondText ? (
                      <>
                        <h3 className="brilliantDiamond">Brilliant Diamond</h3>
                        <p>{poke.fields.brilliantDiamondText}</p>
                        <Divider />
                      </>
                    ) : (
                      ""
                    )}
                    {poke.fields.shiningPearlText ? (
                      <>
                        <h3 className="shiningPearl">Shining Pearl</h3>
                        <p>{poke.fields.shiningPearlText}</p>
                        <Divider />
                      </>
                    ) : (
                      ""
                    )}
                    {poke.fields.legendsArceusText ? (
                      <>
                        <h3 className="legendsArceus">Legends: Arceus</h3>
                        <p>{poke.fields.legendsArceusText}</p>
                      </>
                    ) : (
                      ""
                    )}
                  </Box>
                  <Box sx={{ mt: 5 }}>
                    <h2>Where to Find {poke.fields.name}</h2>
                    <h3 className="sword">Sword</h3>
                    <Location pokemon={poke} game="VIII - Sword" />
                    <Divider />
                    <h3 className="shield">Shield</h3>
                    <Location pokemon={poke} game="VIII - Shield" />
                    <Divider />
                    <h3 className="brilliantDiamond">Brilliant Diamond</h3>
                    <Location pokemon={poke} game="VIII - Brilliant Diamond" />
                    <Divider />
                    <h3 className="shiningPearl">Shining Pearl</h3>
                    <Location pokemon={poke} game="VIII - Shining Pearl" />
                    <Divider />
                    <h3 className="legendsArceus">Legends: Arceus</h3>
                    <Location pokemon={poke} game="VIII - Legends Arceus" />
                  </Box>
                </TabPanelUnstyled>

                <TabPanelUnstyled value={8}>
                  <Box>
                    <h2>Pokédex Entries</h2>
                    {poke.fields.scarletText ? (
                      <>
                        <h3 className="scarlet">Scarlet</h3>
                        <p>{poke.fields.scarletText}</p>
                        <Divider />
                      </>
                    ) : (
                      ""
                    )}
                    {poke.fields.violetText ? (
                      <>
                        <h3 className="violet">Violet</h3>
                        <p>{poke.fields.violetText}</p>
                        <Divider />
                      </>
                    ) : (
                      ""
                    )}
                  </Box>
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
