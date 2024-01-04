import { Hidden, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <Link to="/" style={{ display: "flex" }}>
      <div
        style={{ display: "flex", alignItems: "center", objectFit: "cover" }}
      >
        <img src={logo} width="15%" alt="Logo" />

        <Typography
          ml={2}
          sx={{
            fontSize: "3rem",

            color: "orangered",
            fontFamily: "fantasy",
          }}
        >
          Cookit
        </Typography>
      </div>
    </Link>
  );
};

export default Logo;
