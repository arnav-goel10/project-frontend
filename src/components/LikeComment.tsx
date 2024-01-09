import { Button, Stack } from "@mui/material";
import { useState } from "react";
import Heart from "react-animated-heart";
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
        <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
        <LikeButton />
        {likecount}
      </Stack>
    </>
  );
};

export default LikeComment;
