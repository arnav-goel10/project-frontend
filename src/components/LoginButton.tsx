import { Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const LoginButton = () => {
  const theme = useTheme();
  return (
    <Link to="/login">
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "orangered",
          padding: "1rem 3rem",
          fontSize: "1rem",
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
