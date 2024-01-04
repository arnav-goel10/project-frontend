import { Avatar, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import SelectedListItem from "./SideBar"; // Import with correct name

const HeaderMainPage = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Avatar
        src="https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg"
        sx={{ width: 100, height: 100 }}
      />
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ ml: 5, fontSize: 50 }}
      >
        Indian Cuisine
      </Typography>
    </Box>
  );
};

export default HeaderMainPage;
