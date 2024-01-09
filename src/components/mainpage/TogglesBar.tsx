import NewTopSort from "./NewTopSort";
import CardViewSort from "./CardViewSort";
import CreatePostButton from "./CreatePostButton";
import { Grid, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const TogglesBar = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      alignItems={"center"}
      bgcolor={theme.palette.mode === "dark" ? "#0B1416" : "white"}
    >
      <Grid item xs={2}>
        <NewTopSort />
      </Grid>
      <Grid item xs={2}>
        <CardViewSort />
      </Grid>
      <Grid item xs={8} textAlign={"end"}>
        <Link to="/newpost">
          <CreatePostButton />
        </Link>
      </Grid>
    </Grid>
  );
};

export default TogglesBar;
