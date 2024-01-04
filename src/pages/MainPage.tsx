import { Grid, Hidden } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const MainPage = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={3}>
          <SideBar />
        </Grid>
        <Grid item xs={8}>
          Main
        </Grid>
        <Grid item xs>
          Filter
        </Grid>
      </Grid>
    </>
  );
};

export default MainPage;
