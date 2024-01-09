import * as React from "react";
import { ListSubheader, useTheme } from "@mui/material";
import SideBarListElement from "./SideBarListElement";
import { Box, List } from "@mui/material";

interface Props {
  onCuisineClick: (cuisine: string) => void;
}

const cuisines = [
  "All",
  "Indian",
  "Chinese",
  "Italian",
  "Japanese",
  "Mexican",
  "Spanish",
  "Thai",
  "Vietnamese",
  "French",
  "Greek",
  "Korean",
  "Lebanese",
  "American",
  "British",
  "Caribbean",
  "Irish",
  "Mediterranean",
  "Nordic",
  "German",
  "Eastern European",
  "Jewish",
];

const SideBar: React.FC<Props> = ({ onCuisineClick }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (index: number, cuisine: string) => {
    setSelectedIndex(index);
    onCuisineClick(cuisine);
  };
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          width: "95%",
          maxWidth: 360,
          bgcolor: theme.palette.mode === "dark" ? "#0B1416" : "white",
          paddingTop: "2rem",
          paddingLeft: "2rem",
          paddingRight: "5rem",
          fontFamily: "fantasy",
          color: theme.palette.secondary.light,
          borderRight: `1px solid ${
            theme.palette.mode === "light" ? "#E5E5E5" : "#252C2E"
          }`,
          overflow: "auto", // Add this line to make the list scrollable
          maxHeight: "calc(100vh)", // Adjust the height as per your requirement
          scrollbarWidth: "thin", // Hide the scrollbar on Firefox
          "&::-webkit-scrollbar": {
            width: "0.4em",
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "transparent",
          },
        }}
      >
        <Box
          sx={{
            overflow: "auto", // Add this line to make the subheader scrollable
            maxHeight: "calc(100vh - 4rem)", // Adjust the height as per your requirement
          }}
        >
          <ListSubheader
            sx={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              fontFamily: "Segoe UI",
            }}
          >
            Cuisines
          </ListSubheader>
        </Box>
        <List component="nav">
          {cuisines.map((cuisine, index) => (
            <SideBarListElement
              key={index}
              label={cuisine}
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(index, cuisine)}
            />
          ))}
        </List>
      </Box>
    </>
  );
};

export default SideBar;
