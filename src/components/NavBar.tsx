import React from "react";
import logo from "../assets/logo.jpg";
import { Box, Grid } from "@mui/material";

const NavBar = () => {
  return (
    <Grid item>
      <Box
        display="flex"
        alignItems="center"
        marginLeft={"30px"}
        marginTop={"10px"}
      >
        <img src={logo} width={"50px"} />
        <Grid color="#FF4500" fontWeight={"600"} fontSize={40} marginLeft={2}>
          Cookit
        </Grid>
      </Box>
    </Grid>
  );
};

export default NavBar;
