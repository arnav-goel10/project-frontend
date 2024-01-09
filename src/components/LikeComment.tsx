import { Stack } from "@mui/material";
import LikeButton from "./LikeButton";

const LikeComment = () => {
  const likecount = 3;
  return (
    <>
      <Stack direction={"row"}>
        <LikeButton count={likecount} />
      </Stack>
    </>
  );
};

export default LikeComment;
