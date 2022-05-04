import React, { useState, useEffect } from "react";
import { base } from "./components/base";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function GetMoveByGame(moveId, game, type) {
  const [moves, setMoves] = useState([]);

  useEffect(() => {
    setMoves([]);
    base("movesByGame")
      .select({
        view: "master",
        filterByFormula: `AND((RECORD_ID() = "${moveId}"), (FIND("${game}", game)), (type = "${type}"))`
      })
      .eachPage((records, fetchNextPage) => {
        setMoves((rec) => [...rec, ...records]);
        fetchNextPage();
      });
  }, []);

  return moves;
}

export const Moves = (poke) => {
  // const movesEgg = GetMoves(poke.pokemon.fields.moves, poke.gen, "Egg");
  // const movesHM = GetMoves(poke.pokemon.fields.moves, poke.gen, "HM");
  // const movesTM = GetMoves(poke.pokemon.fields.moves, poke.gen, "TM");

  return (
    <>
      <Box>
        <h3>Moves Learnt by Level Up</h3>
        <TableContainer>
          <Table>
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
              {poke.pokemon.fields.moves.map((move) => (
                <TableRow key={move.id}>
                  <TableCell>{move.fields.level}</TableCell>
                  <TableCell>{move.fields.move}</TableCell>
                  <TableCell>{move.fields.moves}</TableCell>
                  <TableCell>{move.fields.moves}</TableCell>
                  <TableCell>{move.fields.moves}</TableCell>
                  <TableCell>{move.fields.moves}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box>
        <h3>Egg Moves</h3>
      </Box>
      <Box>
        <h3>Moves Learnt by HM</h3>
      </Box>
      <Box>
        <h3>Moves Learnt by TM</h3>
      </Box>
    </>
  );
};
