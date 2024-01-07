import React, { useState } from "react";
import { Grid } from "@mui/material";
import SideBar from "../components/SideBar";
import HeaderMainPage from "../components/HeaderMainPage";
import TogglesBar from "../components/TogglesBar";

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

      <Grid item xs={7} sx={{ mt: "2rem" }}>
        <HeaderMainPage selectedCuisine={selectedCuisine} />
        <Grid
          item
          xs={10}
          sx={{
            display: "flex",
            textAlign: "start",
            marginLeft: "3.5rem",
            marginTop: "2rem",
          }}
        >
          <TogglesBar />
        </Grid>
      </Grid>
      <Grid item xs={2}>
        Filter
      </Grid>
    </Grid>
  );
};

export default MainPage;
