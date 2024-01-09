import { IconButton, Stack } from "@mui/material";
import LikeButton from "./LikeButton";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import { Link } from "react-router-dom";

const LikeComment = () => {
  const likecount = 3;
  return (
    <>
      <Stack
        direction="row"
        style={{ marginLeft: "2rem", alignItems: "center" }}
      >
        <LikeButton count={likecount} />
        <Link to="/comment">
          <IconButton aria-label="Comment Section">
            <ForumOutlinedIcon sx={{ fontSize: "2.5vw" }} />
          </IconButton>
        </Link>
      </Stack>
    </>
  );
};

export default LikeComment;
