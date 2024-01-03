import React from "react";
import logo from "../assets/logo.jpg";
import { Box, Grid } from "@mui/material";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const NavBar = () => {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  return (
    <Grid item>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginLeft={"30px"}
        marginTop={"0"} // Potentially adjust this or parent margins
      >
        <Box display="flex" alignItems="center">
          <img src={logo} width={"50px"} />
          <Grid color="#FF4500" fontWeight={"600"} fontSize={40} marginLeft={2}>
            Cookit
          </Grid>
        </Box>
        <Grid marginRight={"30px"} marginTop={"2rem"}>
          <DarkModeSwitch
            style={{ marginBottom: "2rem" }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={40}
          />
        </Grid>
      </Box>
    </Grid>
  );
};

export default NavBar;
