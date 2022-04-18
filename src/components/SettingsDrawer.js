import React, { useState } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import SettingsIcon from "@mui/icons-material/Settings";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";

import { generations, typesArray } from "../utilities";

export default function SettingsDrawer(pokemon) {
  const [state, setState] = useState({
    settings: false,
    filter: false
  });
  const [lightMode, setLightMode] = useState("light");

  const favPokemon = ["bulbasaur", "ivysaur", "venusaur"];

  const handleLightMode = (event, newLightMode) => {
    setLightMode(newLightMode);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const drawerContents = (anchor) => (
    <Box
      sx={{
        width: 300,
        maxWidth: "calc(100% - 20px)",
        paddingLeft: 3,
        paddingRight: 3,
        paddingTop: 5,
        paddingBottom: 5
      }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {anchor === "settings" ? (
        <>
          <ToggleButtonGroup
            value={lightMode}
            exclusive
            onChange={handleLightMode}
            aria-label="light mode"
          >
            <ToggleButton value="light" aria-label="light mode">
              <LightModeRoundedIcon sx={{ mr: 1 }} />
              Light
            </ToggleButton>
            <ToggleButton value="dark" aria-label="dark mode">
              <DarkModeRoundedIcon sx={{ mr: 1 }} />
              Dark
            </ToggleButton>
          </ToggleButtonGroup>
          {/* <h6>Choose your favorite pokemon:</h6>
          <Autocomplete
            disablePortal
            id="favPokemonDropdown"
            options={favPokemon}
            renderInput={(params) => <TextField {...params} label="Pokemon" />}
          /> */}
        </>
      ) : anchor === "filter" ? (
        <Stack spacing={2}>
          <Button variant="outlined">Reset</Button>
          <h6>Pokedex</h6>
          <Box>
            {generations.map((value, index) => {
              return (
                <Chip
                  key={index}
                  label={value}
                  color="primary"
                  clickable
                  sx={{ mr: 1, mb: 1 }}
                />
              );
            })}
          </Box>
          <h6>Type</h6>
          <Box>
            {typesArray.map((value, index) => {
              return (
                <Chip
                  key={index}
                  // label={value}
                  data-type={value}
                  clickable
                  sx={{ mr: 1, mb: 1 }}
                />

                // ADD TOOLTIP WITH TYPE
              );
            })}
          </Box>
          <h6>Number Range</h6>
          <h6>Weakness</h6>
          <h6>Strength</h6>
          <h6>Color</h6>
          <h6>Height</h6>
          <h6>Weight</h6>
          <Button variant="contained">Filter</Button>
        </Stack>
      ) : (
        ""
      )}
    </Box>
  );

  return (
    <div>
      {["filter", "settings"].map((anchor) => (
        <React.Fragment key="settings">
          <IconButton onClick={toggleDrawer(anchor, true)}>
            {anchor === "filter" ? (
              <FilterListRoundedIcon />
            ) : anchor === "settings" ? (
              <SettingsIcon />
            ) : (
              ""
            )}
          </IconButton>
          <Drawer
            anchor="right"
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {drawerContents(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
