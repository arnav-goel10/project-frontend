import React from "react";
import logo from "../assets/logo.png";
import { Box, Grid, Typography } from "@mui/material";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const NavBar = () => {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        backgroundColor: "#fcfcfc",
        borderRadius: 15,
      }}
    >
      <div style={{ display: "flex" }}>
        <img src={logo} width="70" alt="Logo" />
        <Typography
          style={{
            marginLeft: 15,
            fontSize: 45,
            height: 20,
            color: "orangered",
            fontFamily: "fantasy",
          }}
        >
          Cookit
        </Typography>
      </div>
      <div>
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={60}
        />
      </div>
    </div>
  );
};

export default NavBar;
