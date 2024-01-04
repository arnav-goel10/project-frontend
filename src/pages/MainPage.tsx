import React, { useState } from "react";
import { Grid } from "@mui/material";
import SideBar from "../components/SideBar";
import HeaderMainPage from "../components/HeaderMainPage";

const MainPage: React.FC = () => {
  const [selectedCuisine, setSelectedCuisine] = useState<string>();

  const handleCuisineSelect = (cuisine: string) => {
    setSelectedCuisine(cuisine);
  };

  return (
    <Grid container>
      <Grid item xs={3}>
        <SideBar onCuisineClick={handleCuisineSelect} />
      </Grid>

      <Grid item xs={7}>
        <HeaderMainPage selectedCuisine={selectedCuisine} />
      </Grid>
    </Grid>
  );
};

export default MainPage;
