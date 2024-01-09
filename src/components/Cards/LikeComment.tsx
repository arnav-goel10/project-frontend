import { IconButton, Stack, Typography } from "@mui/material";
import LikeButton from "./LikeButton";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import { Link } from "react-router-dom";

interface Props {
  likeCount: number;
  commentsCount: number;
}

const LikeComment = ({ likeCount, commentsCount }: Props) => {
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
            alignItems: "center",
            justifyContent: "space-between", // Distribute elements evenly
            marginBottom: "1rem",
            marginTop: "0.5rem",
          }}
        >
          <LikeButton count={likeCount} />

          <Stack direction="row" spacing={0.5} alignItems="center">
            <Link to="/comment">
              <IconButton aria-label={`Comment Section ${commentsCount}`}>
                <ForumOutlinedIcon sx={{ fontSize: "2vw" }} />
              </IconButton>
            </Link>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {commentsCount}
            </Typography>
          </Stack>
        </div>
      </Stack>
    </>
  );
};

export default LikeComment;
