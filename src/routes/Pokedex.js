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
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import { GetAllPokemon, url } from "../utilities";

export default function Pokedex() {
  const pokemon = GetAllPokemon();

  const checkForType2 = (type2) => {
    const checkForType2Results = type2 ? <Chip label={type2} /> : "";

    return checkForType2Results;
  };

  const convertNational = (num) => {
    num = String(num);
    while (num.length < 3) num = "0" + num;
    return num;
  };

  return (
    <>
      <AppBar position="absolute">
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
      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <Box>
          <Stack spacing={2}>
            {pokemon.map((poke) => (
              <Card
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
                            className={poke.fields.type1}
                            label={poke.fields.type1}
                            sx={{ mr: 1 }}
                          />
                          {checkForType2(poke.fields.type2)}
                        </div>
                        <Stack
                          direction="row"
                          spacing={1}
                          justifyContent="space-between"
                          className="stats"
                        >
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
                            <h4>Sp.Att</h4>
                            <p>{poke.fields.hp}</p>
                          </div>
                          <div>
                            <h4>Sp.Def</h4>
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
                        </Stack>
                      </div>
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
