import React, { useState } from "react";
import { Grid, useTheme } from "@mui/material";
import SideBar from "../components/SideBar";
import HeaderMainPage from "../components/HeaderMainPage";

const MainPage: React.FC = () => {
  const theme = useTheme();
  const [selectedCuisine, setSelectedCuisine] = useState<string>();

  const handleCuisineSelect = (cuisine: string) => {
    setSelectedCuisine(cuisine);
  };

  return (
    <Grid container>
      <Grid item xs={3}>
        <SideBar onCuisineClick={handleCuisineSelect} />
      </Grid>

      <Grid item xs={7} sx={{ mt: "2rem" }}>
        <HeaderMainPage selectedCuisine={selectedCuisine} />
      </Grid>
      <Grid item xs={2}>
        Filter
      </Grid>
    </Grid>
  );
};

export default MainPage;
