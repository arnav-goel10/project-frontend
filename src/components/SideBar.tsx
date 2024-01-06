import * as React from "react";
import { ListSubheader } from "@mui/material";
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
  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          paddingTop: "2rem",
          paddingLeft: "2rem",
          paddingRight: "4rem",
          fontFamily: "fantasy",
        }}
      >
        <ListSubheader
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            fontFamily: "Segoe UI",
          }}
        >
          Cuisines
        </ListSubheader>
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
