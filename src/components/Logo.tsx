import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
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
  );
};

export default Logo;
