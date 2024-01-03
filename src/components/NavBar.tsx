import React from "react";
import logo from "../assets/logo.png";
import { Box, Button, Typography } from "@mui/material";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";

const NavBar = () => {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        backgroundColor: "#f2f2f2",
        borderRadius: 15,
      }}
    >
      <div>
        <Link to="/" style={{ display: "flex" }}>
          <img src={logo} width="70" alt="Logo" />
          <Typography
            ml={2}
            sx={{
              fontSize: 45,
              height: 20,
              color: "orangered",
              fontFamily: "fantasy",
            }}
          >
            Cookit
          </Typography>
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <LoginButton />
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={60}
        />
      </div>
    </Box>
  );
};

export default NavBar;
