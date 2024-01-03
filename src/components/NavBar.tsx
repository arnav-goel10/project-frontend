import React from "react";
import logo from "../assets/logo.png";
import { Box, Button, Typography } from "@mui/material";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import ThemeChangeButton from "./ThemeChangeButton";
import Logo from "./Logo";

const NavBar = () => {
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
        <Logo />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <LoginButton />
        <ThemeChangeButton />
      </div>
    </Box>
  );
};

export default NavBar;
