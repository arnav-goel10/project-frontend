import { Button, Stack } from "@mui/material";
import { useState } from "react";
import LikeButton from "./LikeButton";

const LikeComment = () => {
  const [isClick, setClick] = useState(false);
  const likecount = 3;
  return (
    <>
      <Stack
        direction={"row"}
        style={{ marginTop: "0rem", marginLeft: "0rem" }}
      >
        <LikeButton count={likecount} />
      </Stack>
    </>
  );
};

export default LikeComment;
