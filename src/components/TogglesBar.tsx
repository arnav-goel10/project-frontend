import NewTopSort from "./NewTopSort";
import CardViewSort from "./CardViewSort";
import CreatePostButton from "./CreatePostButton";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

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
        <Link to="/newpost">
          <CreatePostButton />
        </Link>
      </Grid>
    </Grid>
  );
};

export default TogglesBar;
