import { Box, Grid } from "@mui/material";
import LoginButton from "./LoginButton";
import ThemeChangeButton from "./ThemeChangeButton";
import Logo from "./Logo";
import SignUpButton from "./SignUpButton";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px 15px 30px",
        borderRadius: 15,
        backgroundColor: "#e6e6e6",
        marginBottom: "20px",
      }}
    >
      <Grid>
        <Logo />
      </Grid>
      <Grid>
        <SearchBar />
      </Grid>
      <Grid
        style={{
          display: "flex",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <Grid
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <LoginButton />
          <SignUpButton />
        </Grid>
        <ThemeChangeButton />
      </Grid>
    </Box>
  );
};

export default NavBar;
