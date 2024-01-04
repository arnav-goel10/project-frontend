import { Box } from "@mui/material";
import LoginButton from "./LoginButton";
import ThemeChangeButton from "./ThemeChangeButton";
import Logo from "./Logo";
import SignUp from "../pages/SignUpPage";
import SignUpButton from "./SignUpButton";
import SearchBar from "./SearchBar";

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
      <div>
        <SearchBar />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <LoginButton />
          <SignUpButton />
        </div>
        <ThemeChangeButton />
      </div>
    </Box>
  );
};

export default NavBar;
