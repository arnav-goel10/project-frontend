import React, { useState } from "react";
import { Grid, Stack, styled } from "@mui/material";
import SideBar from "../components/SideBar";
import HeaderMainPage from "../components/HeaderMainPage";
import TogglesBar from "../components/TogglesBar";
import { useTheme } from "@mui/material";
import CardSpacious from "../components/CardSpacious";

const MainPage: React.FC = () => {
  // State to store the selected cuisine
  const [selectedCuisine, setSelectedCuisine] = useState<string>();

  // Function to handle the selection of a cuisine
  const handleCuisineSelect = (cuisine: string) => {
    setSelectedCuisine(cuisine);
  };

  // Styled component to style the item
  const Item = styled("div")(({ theme }) => ({
    // Set the background color based on the theme mode
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  // Get the theme from the context
  const theme = useTheme();
  return (
    <Grid container sx={{ bgcolor: theme.palette.primary.contrastText }}>
      <Grid item xs={2.75}>
        <SideBar onCuisineClick={handleCuisineSelect} />
      </Grid>

      <Grid item xs={7.5} sx={{ mt: "2rem", width: "100%" }}>
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
          <Stack direction={"column"} spacing={2} style={{ width: "90%" }}>
            <Item>
              <TogglesBar />
            </Item>

            <CardSpacious
              image={
                "https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg"
              }
              title={"Recipe"}
              text={
                "CHECKINGLOLOLOLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLl"
              }
            />
          </Stack>
        </Grid>
      </Grid>
      <Grid item xs>
        Filter
      </Grid>
    </Grid>
  );
};

export default MainPage;
