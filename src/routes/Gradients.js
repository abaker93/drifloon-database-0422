import React from "react";

import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";

import { typesArray } from "../utilities";

export default function Gradients() {
  return (
    <div id="gradients">
      {typesArray.map((type1, index) => (
        <Stack key={index} className="gradientStack" sx={{ mt: 2, mb: 2 }}>
          <h2>{type1}</h2>
          {typesArray.map((type2, index) => (
            <Card
              className="clickable"
              key={index}
              data-type-one={type1}
              data-type-two={type2}
              sx={{ mt: 1, mb: 1 }}
            >
              <CardActionArea>
                <CardContent>
                  {type1} | {type2}
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Stack>
      ))}
    </div>
  );
}
