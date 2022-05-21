import React from "react";
import { useSearchParams, useParams } from "react-router-dom";

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
import SortRoundedIcon from "@mui/icons-material/SortRounded";

import { GetAllPokemon, url, convertNational } from "../utilities";
import SettingsDrawer from "../components/SettingsDrawer";

export default function Pokedex() {
  const params = useParams();
  const pokemon = GetAllPokemon(params.pokedex);
  const [searchParams, setSearchParams] = useSearchParams();

  const URLfilter = new URL(document.location).searchParams.get("filter");

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
          <div>Drifloon Database</div>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton edge="start" aria-label="sort">
            <SortRoundedIcon />
          </IconButton>
          {/* <SettingsDrawer /> */}
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
            options={pokemon.map((poke) => poke.fields.name)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search for Pokémon by name or Pokédex number"
                InputProps={{
                  ...params.InputProps,
                  type: "search"
                }}
              />
            )}
            onChange={(event, value) => {
              let filter = value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
        </Box>
      </Container>
      <Container maxWidth="xl" sx={{ mt: 5 }}>
        <Box>
          <Stack spacing={5}>
            {pokemon
              .filter((poke) => {
                let filter = searchParams.get("filter");
                if (!filter) return true;
                let name = poke.fields.name.toLowerCase();
                let national = poke.fields.national.toString();
                if (filter >= 0) {
                  return national.includes(filter);
                } else {
                  return name.includes(filter.toLowerCase());
                }
              })
              .map((poke) => (
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
