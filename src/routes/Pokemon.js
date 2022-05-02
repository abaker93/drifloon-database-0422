import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import TabPanel from "@mui/material/TabPanel";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import ListItem from "@mui/material/ListItem";
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
import { AltFormNav } from "../components/AltFormNav";
import { typesArray, GetPokemon, convertNational } from "../utilities";

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

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`generation-tabpanel-${index}`}
        aria-labelledby={`generation-tabpanel-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  TabPanel.protoTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
  };

  function a11yProps(index) {
    return {
      id: `generation-tab-${index}`,
      "aria-controls": `generation-tabpanel-${index}`
    };
  }

  const [value, setValue] = useState(0);

  const handleGenTabChange = (event, newValue) => {
    setValue(newValue);
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
              <Statbar stat="hp" label="HP" num={poke.fields.hp} />
              <Statbar stat="att" label="Attack" num={poke.fields.att} />
              <Statbar stat="def" label="Defense" num={poke.fields.def} />
              <Statbar stat="spAtt" label="Sp.Att" num={poke.fields.spAtt} />
              <Statbar stat="spDef" label="Sp.Def" num={poke.fields.spDef} />
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

              {/* <Tabs
								value={value}
								onChange={handleStatTabChange}
								aria-label="stat tabs"
								sx={{ mt: 2 }}
							>
								<Tab>
									<Chip label="Base" clickable />
								</Tab>
								<Chip label="Lvl 50" clickable />
								<Tab>
									<Chip label="Lvl 100" clickable />
								</Tab>
							</Tabs> */}
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
                <h3>Egg Groups</h3>
                <p>{poke.fields.eggGroups}</p>
              </Box>
              <Box>
                <h3>Egg Cycles</h3>
                <p>{poke.fields.eggCycles}</p>
              </Box>
            </Box>
          </Container>

          {/***** MORE INFO *****/}
          <Container maxWidth="xl" sx={{ mt: 5 }}>
            <Box id="more">
              <h2>More Info</h2>
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
          <Container maxWidth="xl" sx={{ mt: 5 }}>
            <TabsUnstyled defaultValue={0}>
              <TabsListUnstyled>
                <TabUnstyled>
                  <Chip label="one" />
                </TabUnstyled>
                <TabUnstyled>Two</TabUnstyled>
                <TabUnstyled>Three</TabUnstyled>
              </TabsListUnstyled>
              <TabPanelUnstyled value={0}>First page</TabPanelUnstyled>
              <TabPanelUnstyled value={1}>Second page</TabPanelUnstyled>
              <TabPanelUnstyled value={2}>Third page</TabPanelUnstyled>
            </TabsUnstyled>
            {/* <Tabs
              value={value}
              onChange={handleGenTabChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="generation tabs"
            >
              <Tab label="Gen I" {...a11yProps(0)} clickable />
              <Tab label="Gen II" {...a11yProps(1)} clickable />
              <Tab label="Gen III" {...a11yProps(2)} clickable />
              <Tab label="Gen IV" {...a11yProps(3)} clickable />
              <Tab label="Gen V" {...a11yProps(4)} clickable />
              <Tab label="Gen VI" {...a11yProps(5)} clickable />
              <Tab label="Gen VII" {...a11yProps(6)} clickable />
              <Tab label="Gen VIII" {...a11yProps(7)} clickable />
              <Tab label="Gen IX" {...a11yProps(8)} clickable />
            </Tabs>

            <TabPanel value={value} index={0}>
              Panel 1
            </TabPanel>
            <TabPanel value={value} index={1}>
              Panel 2
            </TabPanel>
            <TabPanel value={value} index={2}>
              Panel 3
            </TabPanel>
            <TabPanel value={value} index={3}>
              Panel 4
            </TabPanel>
            <TabPanel value={value} index={4}>
              Panel 5
            </TabPanel>
            <TabPanel value={value} index={5}>
              Panel 6
            </TabPanel>
            <TabPanel value={value} index={6}>
              Panel 7
            </TabPanel>
            <TabPanel value={value} index={7}>
              Panel 8
            </TabPanel>
            <TabPanel value={value} index={8}>
              Panel 9
            </TabPanel> */}
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
