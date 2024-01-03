import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Link to="/login">
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "orangered",
          padding: "10px 20px",
          fontSize: "20px",
          borderRadius: "30px",
          fontFamily: "Segoe UI",
        }}
      >
        LogIn
      </Button>
    </Link>
  );
};

export default LoginButton;
