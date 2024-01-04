import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <TextField
      id="outlined-search"
      variant="outlined"
      placeholder="Search Cookit"
      InputProps={{
        endAdornment: <SearchIcon />,
        style: {
          borderRadius: "40px",
          backgroundColor: "white",
          padding: "2px 20px",
          fontSize: "20px",
        },
      }}
      sx={{ width: 600 }}
    />
  );
};

export default SearchBar;
