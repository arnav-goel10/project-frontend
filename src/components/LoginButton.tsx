import { Calculate } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Link to="/login">
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "orangered",
          padding: "1.5vh 3vw",
          fontSize: "2.5vh",
          borderRadius: "30px",
          fontFamily: "Segoe UI",
          width: "33%",
        }}
      >
        LogIn
      </Button>
    </Link>
  );
};

export default LoginButton;
