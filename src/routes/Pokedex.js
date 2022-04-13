import React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Chip from "@mui/material/Chip";
import AppsIcon from "@mui/icons-material/Apps";
import SettingsIcon from "@mui/icons-material/Settings";
import { GetPokemonUpdates } from "../utilities";

export default function Pokedex() {
  return (
    <AppBar position="absolute">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton edge="start" aria-label="settings">
          <SettingsIcon />
        </IconButton>
        <IconButton aria-label="home">
          <AppsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
