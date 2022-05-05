import React, { useState, useEffect } from "react";
import { base } from "./base";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";

function GetMovesByGame(poke, game, type) {
  const [movesByGame, setMovesByGame] = useState([]);

  useEffect(() => {
    setMovesByGame([]);
    base("movesByGame")
      .select({
        view: "master",
        filterByFormula: `AND((nationalDex = "${poke}"), (FIND("${game}", game)), (moveType = "${type}"))`,
        sort: [
          { field: "level", direction: "asc" },
          { field: "hmNum", direction: "asc" },
          { field: "tmNum", direction: "asc" }
        ]
      })
      .eachPage((records, fetchNextPage) => {
        setMovesByGame((rec) => [...rec, ...records]);
        fetchNextPage();
      });
  }, []);

  return movesByGame;
}

export const Moves = (poke) => {
  return (
    <>
      <Box>
        <h3>Moves Learnt by Level Up</h3>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Lv.</TableCell>
                <TableCell>Move</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Cat.</TableCell>
                <TableCell>Power</TableCell>
                <TableCell>Acc.</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {GetMovesByGame(poke.pokemon.fields.name, poke.game, "Level").map(
                (move) => (
                  <TableRow key={move.id} hover>
                    <TableCell>{move.fields.level}</TableCell>
                    <TableCell>{move.fields.move}</TableCell>
                    <TableCell>
                      <Chip
                        label={move.fields.type}
                        data-type={move.fields.type}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <img src={`/assets/${move.fields.category}.svg`} />
                    </TableCell>
                    <TableCell>
                      {move.fields.power ? move.fields.power : <>&mdash;</>}
                    </TableCell>
                    <TableCell>
                      {move.fields.accuracy ? (
                        move.fields.accuracy
                      ) : (
                        <>&mdash;</>
                      )}
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {GetMovesByGame(poke.pokemon.fields.name, poke.game, "Egg") ? (
        <Box sx={{ mt: 5 }}>
          <h3>Egg Moves</h3>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Move</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Cat.</TableCell>
                  <TableCell>Power</TableCell>
                  <TableCell>Acc.</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {GetMovesByGame(poke.pokemon.fields.name, poke.game, "Egg").map(
                  (move) => (
                    <TableRow key={move.id} hover>
                      <TableCell>{move.fields.move}</TableCell>
                      <TableCell>
                        <Chip
                          label={move.fields.type}
                          data-type={move.fields.type}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <img src={`/assets/${move.fields.category}.svg`} />
                      </TableCell>
                      <TableCell>
                        {move.fields.power ? move.fields.power : <>&mdash;</>}
                      </TableCell>
                      <TableCell>
                        {move.fields.accuracy ? (
                          move.fields.accuracy
                        ) : (
                          <>&mdash;</>
                        )}
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        ""
      )}
      <Box sx={{ mt: 5 }}>
        <h3>Moves Learnt by HM</h3>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>HM</TableCell>
                <TableCell>Move</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Cat.</TableCell>
                <TableCell>Power</TableCell>
                <TableCell>Acc.</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {GetMovesByGame(poke.pokemon.fields.name, poke.game, "HM").map(
                (move) => (
                  <TableRow key={move.id} hover>
                    <TableCell>{move.fields.hmNum}</TableCell>
                    <TableCell>{move.fields.move}</TableCell>
                    <TableCell>
                      <Chip
                        label={move.fields.type}
                        data-type={move.fields.type}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <img src={`/assets/${move.fields.category}.svg`} />
                    </TableCell>
                    <TableCell>
                      {move.fields.power ? move.fields.power : <>&mdash;</>}
                    </TableCell>
                    <TableCell>
                      {move.fields.accuracy ? (
                        move.fields.accuracy
                      ) : (
                        <>&mdash;</>
                      )}
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{ mt: 5 }}>
        <h3>Moves Learnt by TM</h3>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>TM</TableCell>
                <TableCell>Move</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Cat.</TableCell>
                <TableCell>Power</TableCell>
                <TableCell>Acc.</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {GetMovesByGame(poke.pokemon.fields.name, poke.game, "TM").map(
                (move) => (
                  <TableRow key={move.id} hover>
                    <TableCell>{move.fields.tmNum}</TableCell>
                    <TableCell>{move.fields.move}</TableCell>
                    <TableCell>
                      <Chip
                        label={move.fields.type}
                        data-type={move.fields.type}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <img src={`/assets/${move.fields.category}.svg`} />
                    </TableCell>
                    <TableCell>
                      {move.fields.power ? move.fields.power : <>&mdash;</>}
                    </TableCell>
                    <TableCell>
                      {move.fields.accuracy ? (
                        move.fields.accuracy
                      ) : (
                        <>&mdash;</>
                      )}
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
