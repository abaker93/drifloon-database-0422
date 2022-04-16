import React, { useState } from "react";

import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import SortRoundedIcon from "@mui/icons-material/SortRounded";

import { GetAllPokemon, url, convertNational } from "../utilities";

export default function Pokedex() {
  const [state, setState] = useState({ open: false });
  // const [colorMode, setColorMode] = useState("light");

  // const handleColorMode = (event, newColorMode) => {
  //   setColorMode(newColorMode);
  // };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, open: open });
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <SortRoundedIcon />
          </ListItemIcon>
        </ListItem>
      </List>
    </Box>
  );

  const pokemon = GetAllPokemon();

  const checkForType2 = (type2) => {
    const checkForType2Results = type2 ? (
      <Chip data-type={type2} label={type2} size="small" />
    ) : (
      ""
    );
    return checkForType2Results;
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton edge="start" aria-label="filter">
            <FilterListRoundedIcon />
          </IconButton>
          <IconButton aria-label="sort">
            <SortRoundedIcon />
          </IconButton>
          <IconButton aria-label="settings" onClick={toggleDrawer(true)}>
            <SettingsIcon />
            <Drawer open={state["open"]} onClose={toggleDrawer(false)}>
              {list()}
            </Drawer>
          </IconButton>
          <Link href="/">
            <IconButton aria-label="home">
              <AppsRoundedIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl" sx={{ mt: 10 }}>
        <Box>
          <h1>National Pokédex</h1>
        </Box>
      </Container>
      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <Box>
          <Autocomplete
            freeSolo
            disablePortal
            options={["bulbasaur", "ivysaur", "venusaur", "drifloon"]}
            renderInput={(params) => <TextField {...params} label="Search" />}
          />
        </Box>
      </Container>
      <Container maxWidth="xl" sx={{ mt: 5 }}>
        <Box>
          <Stack spacing={5}>
            {pokemon.map((poke) => (
              <Card
                className="clickable"
                key={poke.id}
                data-type-one={poke.fields.type1}
                data-type-two={poke.fields.type2}
              >
                <Link
                  href={`/pokedex/national/${url(
                    poke.fields.national,
                    poke.fields.altNum
                  )}/`}
                  underline="none"
                >
                  <CardActionArea>
                    <CardContent>
                      <Stack direction="row" spacing={2}>
                        <div className="image">
                          <img
                            src={poke.fields.artwork[0].url}
                            alt={poke.fields.name}
                          />
                        </div>
                        <div className="details">
                          <h3>
                            <span>
                              <span>No.</span>
                              {convertNational(poke.fields.national)}
                            </span>
                            {poke.fields.name}
                          </h3>
                          <div className="types">
                            <Chip
                              data-type={poke.fields.type1}
                              label={poke.fields.type1}
                              size="small"
                              sx={{ mr: 1 }}
                            />
                            {checkForType2(poke.fields.type2)}
                          </div>
                          <div className="stats">
                            <div>
                              <h4>HP</h4>
                              <p>{poke.fields.hp}</p>
                            </div>
                            <div>
                              <h4>Att</h4>
                              <p>{poke.fields.hp}</p>
                            </div>
                            <div>
                              <h4>Def</h4>
                              <p>{poke.fields.hp}</p>
                            </div>
                            <div>
                              <h4>Sp.A</h4>
                              <p>{poke.fields.hp}</p>
                            </div>
                            <div>
                              <h4>Sp.D</h4>
                              <p>{poke.fields.hp}</p>
                            </div>
                            <div>
                              <h4>Spd</h4>
                              <p>{poke.fields.hp}</p>
                            </div>
                            <div>
                              <h4>Total</h4>
                              <p>{poke.fields.hp}</p>
                            </div>
                          </div>
                        </div>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            ))}
          </Stack>
        </Box>
      </Container>
    </>
  );
}
