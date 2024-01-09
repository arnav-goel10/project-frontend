import { Avatar, Box, Typography, useTheme } from "@mui/material";
import React from "react";

interface Props {
  selectedCuisine?: string; // prop for selected cuisine
}

const HeaderMainPage: React.FC<Props> = ({ selectedCuisine }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: theme.palette.mode === "dark" ? "#0B1416" : "white",
        padding: "2rem",
        borderRadius: "2rem",
        marginLeft: "0.5rem",
        marginRight: "5rem",
      }}
    >
      <Avatar
        src="https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg"
        sx={{ width: 100, height: 100 }}
      />
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ ml: 5, fontSize: 50, color: theme.palette.text.primary }}
      >
        {selectedCuisine === undefined || selectedCuisine === "All"
          ? "All Cuisines"
          : selectedCuisine + "  Cuisine"}
      </Typography>
    </Box>
  );
};

export default HeaderMainPage;
