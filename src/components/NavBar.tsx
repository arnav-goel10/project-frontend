import { Box, useTheme } from "@mui/material";
import LoginButton from "./LoginButton";
import ThemeChangeButton from "./ThemeChangeButton";
import Logo from "./Logo";
import SignUpButton from "./SignUpButton";
import SearchBar from "./SearchBar";
interface Props {
  toggleTheme: () => void;
}
const NavBar: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Box
      component="div"
      display="flex"
      alignItems="center"
      padding="0.5rem 1.5rem"
      borderRadius="1rem"
      sx={{ backgroundColor: "#e6e6e6" }}
      justifyContent={"space-between"}
      height={"10vh"}
    >
      <Box display="flex" alignItems="center">
        <Logo />
        <SearchBar />
      </Box>

      <Box display="flex" alignItems="center">
        <Box>
          <LoginButton />
          <SignUpButton />
        </Box>
        <ThemeChangeButton toggleTheme={toggleTheme} />
      </Box>
    </Box>
  );
};

export default NavBar;
