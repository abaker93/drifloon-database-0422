import React, { useState } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

export const SettingsDrawer = () => {
  const [state, setState] = useState(false);
  const [colorMode, setColorMode] = useState("light");

  const handleColorMode = (event, newColorMode) => {
    setColorMode(newColorMode);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, open });
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        hello world!
        {/* <ToggleButtonGroup>
          <ToggleButton value="light" aria-label="light mode">
            <LightModeRoundedIcon />
            Light
          </ToggleButton>
        </ToggleButtonGroup> */}
      </List>
    </Box>
  );

  return (
    <div>
      <>
        <Button onClick={toggleDrawer(true)}>Open</Button>
        <Drawer open={state} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </>
    </div>
  );
};
