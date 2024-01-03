import { Box } from "@mui/material";
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
