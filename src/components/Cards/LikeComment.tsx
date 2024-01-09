import { IconButton, Stack } from "@mui/material";
import LikeButton from "./LikeButton";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import { Link } from "react-router-dom";

const LikeComment = () => {
  const likecount = 3;
  return (
    <>
      <Stack direction="row" alignItems="center">
        <div
          style={{
            marginLeft: "0.5rem",
            backgroundColor: "#c9c9c9",
            padding: "0.25rem 1rem",
            borderRadius: "5rem",
            display: "flex",
            alignItems: "center", // Align icons vertically within the div
            justifyContent: "center",
            marginBottom: "1rem",
            marginTop: "0.5rem",
          }}
        >
          <LikeButton count={likecount} />
          <Link to="/comment">
            <IconButton aria-label="Comment Section">
              <ForumOutlinedIcon sx={{ fontSize: "2vw" }} />
            </IconButton>
          </Link>
        </div>
      </Stack>
    </>
  );
};

export default LikeComment;
