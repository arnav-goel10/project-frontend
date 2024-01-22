import { Button } from "@mui/material";

const SignOutButton = () => {
  return (
    <Button
      variant="contained"
      size="large"
      sx={{
        backgroundColor: "orangered",
        padding: "1.5vh 2vw",
        fontSize: "2.5vh",
        borderRadius: "30px",
        fontFamily: "Segoe UI",
        width: "33%",
        marginRight: "2rem",
      }}
      onClick={() => localStorage.removeItem("jwt")}
    >
      Sign Out
    </Button>
  );
};

export default SignOutButton;
