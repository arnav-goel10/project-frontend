import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material";

const SearchBar = () => {
  const theme = useTheme();
  return (
    <TextField
      id="outlined-search"
      variant="outlined"
      placeholder="Search Cookit"
      InputProps={{
        // add an icon to the end of the input
        endAdornment: <SearchIcon />,
        style: {
          borderRadius: "2rem",
          backgroundColor: theme.palette.background.default,
          padding: "0.15vh 1.5vw",
          fontSize: "2vh",
        },
      }}
      sx={{ width: "100%" }}
    />
  );
};

export default SearchBar;
