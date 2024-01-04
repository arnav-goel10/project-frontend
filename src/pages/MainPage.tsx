import { Grid, Hidden } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import HeaderMainPage from "../components/HeaderMainPage";

const MainPage = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={3}>
          <SideBar />
        </Grid>
        <Grid item xs={7} sx={{ margin: "3rem 2rem" }}>
          <HeaderMainPage />
        </Grid>
        <Grid item xs>
          Filter
        </Grid>
      </Grid>
    </>
  );
};

export default MainPage;
