import NewTopSort from "./NewTopSort";
import CardViewSort from "./CardViewSort";
import CreatePostButton from "./CreatePostButton";
import { Grid, Stack } from "@mui/material";

const TogglesBar = () => {
  return (
    <Grid container alignItems={"center"} textAlign={"start"} mr={"3rem"}>
      <Grid item xs={2}>
        <NewTopSort />
      </Grid>
      <Grid item xs={2}>
        <CardViewSort />
      </Grid>
      <Grid item xs={8} textAlign={"end"}>
        <CreatePostButton />
      </Grid>
    </Grid>
  );
};

export default TogglesBar;
