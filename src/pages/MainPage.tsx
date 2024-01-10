import React, { useState } from "react";
import { Grid, Stack, styled } from "@mui/material";
import SideBar from "../components/sidebar/SideBar";
import TogglesBar from "../components/mainpage/TogglesBar";
import { useTheme } from "@mui/material";
import CardSpaciousList from "../components/Cards/spacious/CardSpaciousList";
import HeaderMainPage from "../components/mainpage/HeaderMainPage";

const MainPage: React.FC = () => {
  const [selectedCuisine, setSelectedCuisine] = useState<string>();

  const handleCuisineSelect = (cuisine: string) => {
    setSelectedCuisine(cuisine);
  };

  const Item = styled("div")(({ theme }) => ({
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
            marginLeft: "3.5rem",
            marginTop: "2rem",
          }}
        >
          <Stack direction={"column"} spacing={2} style={{ width: "90%" }}>
            <HeaderMainPage selectedCuisine={selectedCuisine} />
            <Item>
              <div style={{ position: "static", width: "100%", zIndex: 1 }}>
                <TogglesBar />
              </div>
            </Item>
            <span
              style={{
                overflow: "auto",
                maxHeight: "calc(100vh)",
                scrollbarWidth: "thin",
              }}
            >
              <CardSpaciousList
                data_array={[
                  {
                    user_id: "lol",
                    title: "INDIAN RECIPE!!!",
                    text: "If you want to override a component's styles using custom classes, you can use the className prop, available on each component. To override the styles of a specific part of the component, use the global classes provided by Material UI, as described in the previous sectio",
                    like_count: 5,
                    comments_count: 5,
                    video:
                      "https://packaged-media.redd.it/ql1jb5jn5mbc1/pb/m2-res_1920p.mp4?m=DASHPlaylist.mpd&v=1&e=1704927600&s=791c6140c50f8fb78dbcabd09aede636ade75b67#t=0",
                  },
                  {
                    user_id: "hehehheh",
                    title: "INDIAN RECIPE!!!",
                    text: "If you want to override a component's styles using custom classes, you can use the className prop, available on each component. To override the styles of a specific part of the component, use the global classes provided by Material UI, as described in the previous sectio",
                    like_count: 5,
                    comments_count: 5,
                    image:
                      "https://preview.redd.it/if-a-punjabi-bengali-tamilian-businessman-said-this-i-v0-r29qegxzqmbc1.jpeg?auto=webp&s=16d56f1bf935bb52d432514bd60e772bd4a0d43e",
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
