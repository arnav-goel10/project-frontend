import React, { useState } from "react";
import { Grid, Stack, styled } from "@mui/material";
import SideBar from "../components/sidebar/SideBar";
import TogglesBar from "../components/mainpage/TogglesBar";
import { useTheme } from "@mui/material";
import CardSpaciousList from "../components/Cards/spacious/CardSpaciousList";
import HeaderMainPage from "../components/mainpage/HeaderMainPage";

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
    backgroundColor: theme.palette.mode === "dark" ? "#0B1416" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.mode === "dark" ? "#3F3B34" : "#F2F4F5",
  }));

  const theme = useTheme();
  return (
    <Grid
      container
      sx={{
        bgcolor: theme.palette.mode === "dark" ? "#0B1416" : "white",
        marginTop: "4rem",
      }}
    >
      <Grid item xs={2.75}>
        <SideBar onCuisineClick={handleCuisineSelect} />
      </Grid>

      <Grid item xs={7.5} sx={{ width: "100%" }}>
        <Grid
          item
          xs={10}
          sx={{
            display: "flex",
            textAlign: "start",
            marginLeft: "1.5rem",
          }}
        >
          <Stack direction={"column"} spacing={2} style={{ width: "95%" }}>
            <span
              style={{
                overflow: "auto", // Add this line to make the list scrollable
                maxHeight: "calc(100vh)", // Adjust the height as per your requirement
                scrollbarWidth: "thin", // Hide the scrollbar on Firefox
              }}
            >
              <HeaderMainPage selectedCuisine={selectedCuisine} />

              <Item>
                <div style={{ position: "static", width: "100%", zIndex: 1 }}>
                  <TogglesBar />
                </div>
              </Item>
              <CardSpaciousList
                data_array={[
                  {
                    user_id: "lol",
                    title: "INDIAN RECIPE!!!",
                    text: "If you want to override a component's styles using custom classes, you can use the className prop, available on each component. To override the styles of a specific part of the component, use the global classes provided by Material UI, as described in the previous sectio",
                    like_count: 5,
                    comments_count: 5,
                    image:
                      "https://i.redd.it/15naya74qj361.jpg",
                  },
                  {
                    user_id: "hehehheh",
                    title: "INDIAN RECIPE!!!",
                    text: "If you want to override a component's styles using custom classes, you can use the className prop, available on each component. To override the styles of a specific part of the component, use the global classes provided by Material UI, as described in the previous sectio",
                    like_count: 5,
                    comments_count: 5,
                    image:
                      "https://i.redd.it/15naya74qj361.jpg",
                  },
                ]}
              />
            </span>
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
