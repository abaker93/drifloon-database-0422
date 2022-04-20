import React, { useState } from "react";

import { useTheme } from "@mui/material/styles";

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
import Slider from "@mui/material/Slider";
import Tooltip from "@mui/material/Tooltip";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
  const [value, setValue] = useState([1, 905]);

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

  const valueText = (value) => {
    return `${value}*C`;
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  };

  const getStyles = (type, typeName, theme) => {
    return {
      fontWeight:
        typeName.indexOf(type) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium
    };
  };

  const theme = useTheme();
  const [type, setType] = useState([]);

  const handleWeaknessChange = (event) => {
    const {
      target: { value }
    } = event;
    setType(typeof value === "string" ? value.split(",") : value);
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
          <h6>Choose your favorite pokemon:</h6>
          <Autocomplete
            disablePortal
            id="favPokemonDropdown"
            options={favPokemon}
            renderInput={(params) => <TextField {...params} label="Pokemon" />}
          />
        </>
      ) : anchor === "filter" ? (
        <Stack spacing={2}>
          <Button variant="outlined">Reset</Button>
          <Box>
            <h6>Pokedex</h6>
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
          <Box>
            <h6>Type</h6>
            {typesArray.map((value, index) => {
              return (
                <Tooltip title={value} arrow>
                  <Chip
                    key={index}
                    data-type={value}
                    className="iconChip"
                    clickable
                    sx={{ mr: 1, mb: 1 }}
                  />
                </Tooltip>
              );
            })}
          </Box>
          <Box>
            <h6>National Dex Range</h6>
            <Slider
              getAriaLabel={() => "National dex range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valueText}
              min={1}
              max={905}
              valueLabelDisplay="on"
            />
          </Box>
          <Box>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="selectWeaknessesLabel">Weaknesses</InputLabel>
              <Select
                labelId="selectWeaknessLabel"
                id="selectWeakness"
                multiple
                value={type}
                onChange={handleWeaknessChange}
                input={
                  <OutlinedInput id="selectWeaknessChip" label="Weakness" />
                }
                rendervalue={(seleced) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    <Chip key={value} label={value} />
                  </Box>
                )}
                // MenuProps={MenuProps}
              >
                {typesArray.map((type) => (
                  <MenuItem
                    key={type}
                    value={type}
                    style={getStyles(type, type, theme)}
                  >
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="selectWeaknessesLabel">Strengths</InputLabel>
              <Select
                labelId="selectWeaknessLabel"
                id="selectWeakness"
                multiple
                value={type}
                onChange={handleWeaknessChange}
                input={
                  <OutlinedInput id="selectWeaknessChip" label="Weakness" />
                }
                rendervalue={(seleced) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    <Chip key={value} label={value} />
                  </Box>
                )}
              >
                {typesArray.map((type) => (
                  <MenuItem
                    key={type}
                    value={type}
                    style={getStyles(type, type, theme)}
                  >
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
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
