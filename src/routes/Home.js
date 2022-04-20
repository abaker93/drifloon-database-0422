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

import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import SettingsIcon from "@mui/icons-material/Settings";

import { generations, typesArray, GetPokemonUpdates, url } from "../utilities";

export default function Home() {
  const pokemon = GetPokemonUpdates();

  const changeDateTime = (string) => {
    let localDateTime = new Date(string);
    return localDateTime.toLocaleString();
  };

  return (
    <div id="Home">
      <Box>
        <AppBar>
          <Toolbar>
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
      </Box>
      <Container maxWidth="xl" sx={{ mt: 10 }}>
        <Box>
          <h1>Drifloon Database</h1>
        </Box>
      </Container>
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Box>
          <h2>Quick Links</h2>
          <Link href="/pokedex/national" underline="none">
            <Card className="clickable quickLink" data-type-one="fighting">
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
                  color="primary"
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
                  label={value}
                  data-type={value}
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
          <Stack spacing={5}>
            {pokemon.map((poke) => (
              <Card
                className="clickable short"
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
                            sx={{ top: "-20px" }}
                          />
                        </div>
                        <div className="details">
                          <h3>{poke.fields.name}</h3>
                          <p>{changeDateTime(poke.fields.lastModifiedTime)}</p>
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
    </div>
  );
}
