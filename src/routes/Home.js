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

export default function Home() {
  const generations = [
    "Gen I",
    "Gen II",
    "Gen III",
    "Gen IV",
    "Gen V",
    "Gen VI",
    "Gen VII",
    "Gen VIII",
    "Gen IX"
  ];

  const typesArray = [
    "bug",
    "dark",
    "dragon",
    "electric",
    "fairy",
    "fighting",
    "fire",
    "flying",
    "ghost",
    "grass",
    "ground",
    "ice",
    "normal",
    "poison",
    "psychic",
    "rock",
    "steel",
    "water"
  ];

  const pokemon = GetPokemonUpdates();

  const changeDateTime = (string) => {
    let localDateTime = new Date(string);
    return localDateTime.toLocaleString();
  };

  return (
    <>
      <Box>
        <AppBar position="absolute">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton edge="start" aria-label="settings">
              <SettingsIcon />
            </IconButton>
            <Link to="/">
              <IconButton aria-label="home">
                <AppsIcon />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="xl" sx={{ mt: 10 }}>
        <Box>
          <h1>Drifloon Database</h1>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box>
          <h2>Quick Links</h2>
          <Link href="/pokedex/national" underline="none">
            <Card>
              <CardActionArea>
                <CardContent>National Pokédex</CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Box>
      </Container>
      <Container maxWidth="xl" sx={{ mt: 8 }}>
        <Box>
          <h2>Pokémon by Pokédex</h2>
          <Box>
            {generations.map((value, index) => {
              return (
                <Chip
                  key={index}
                  label={value}
                  clickable
                  sx={{ mr: 1, mb: 1 }}
                />
              );
            })}
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl" sx={{ mt: 8 }}>
        <Box>
          <h2>Pokémon by Type</h2>
          <Box>
            {typesArray.map((value, index) => {
              return (
                <Chip
                  key={index}
                  icon={<AppsIcon />}
                  label={value}
                  clickable
                  sx={{ mr: 1, mb: 1 }}
                />
              );
            })}
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl" sx={{ mt: 8 }}>
        <Box>
          <h2>Most Recent Updates</h2>
          <Stack spacing={2}>
            {pokemon.map((poke) => (
              <Card
                data-type-one={poke.fields.type1}
                data-type-two={poke.fields.type2}
              >
                <CardActionArea>
                  <CardContent>
                    <div className="image">
                      <img
                        src={poke.fields.artwork[0].url}
                        alt={poke.fields.name}
                      />
                    </div>
                    <div className="details">
                      <h3>{poke.fields.name}</h3>
                      <p>{changeDateTime(poke.fields.lastModifiedTime)}</p>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Stack>
        </Box>
      </Container>
      <Container maxWidth="xl" sx={{ mt: 8 }}>
        <Box>
          <h2>Project Notes</h2>
          <Stack>
            <Card>
              <CardContent>
                <h3>April 12, 2022</h3>
                <p>And... we're live!</p>
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </Container>
      <Container maxWidth="xl" sx={{ mt: 8 }}>
        <Box>
          <h2>Get in Touch!</h2>
          <p>Anna Baker</p>
          <p>Designer | Developer | Database Creator</p>
          <p>
            <a href="http://annabaker.design" target="_blank" rel="noreferrer">
              annabaker.design
            </a>
          </p>
        </Box>
      </Container>
    </>
  );
}
