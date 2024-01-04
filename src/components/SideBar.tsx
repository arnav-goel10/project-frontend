import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { ListSubheader } from "@mui/material";
import SideBarListElement from "./SideBarListElement"; // Import the new component

export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  // Example data for list items
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

  return (
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
        sx={{ fontSize: "1.5rem", fontWeight: "bold", fontFamily: "Segoe UI" }}
      >
        Cuisines
      </ListSubheader>
      <List component="nav">
        {cuisines.map((cuisine, index) => (
          <SideBarListElement
            key={index}
            label={cuisine}
            selected={selectedIndex === index}
            onClick={() => handleListItemClick(index)}
          />
        ))}
      </List>
    </Box>
  );
}
