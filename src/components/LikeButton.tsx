import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

interface Props {
  count: number;
}

const LikeButton = ({ count }: Props) => {
  return (
    <div
      style={{
        marginLeft: "2rem",
        display: "block",
        width: "fit-content",
      }}
    >
      <FormControlLabel
        control={
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<FavoriteIcon sx={{ color: "orangered" }} />}
            name="checkedH"
          />
        }
        label={count}
      />
    </div>
  );
};

export default LikeButton;
