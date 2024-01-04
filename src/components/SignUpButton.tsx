import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const SignUpButton = () => {
  return (
    <Link to="/signup">
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
        SignUp
      </Button>
    </Link>
  );
};

export default SignUpButton;
