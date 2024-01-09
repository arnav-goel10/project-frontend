import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

interface Props {
  count: number;
}

const LikeButton = ({ count }: Props) => {
  const [isChecked, setIsChecked] = useState(false); // Track checkbox state

  const handleClick = async () => {
    console.log(isChecked ? "unliked" : "liked");
  };

  const handleCheckboxChange = async () => {
    await handleClick();
    setIsChecked(!isChecked); // Toggle state on change
  };

  return (
    <div style={{ marginLeft: "2rem", display: "block", width: "fit-content" }}>
      <FormControlLabel
        control={
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<FavoriteIcon sx={{ color: "orangered" }} />}
            name="checkedH"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        }
        label={count}
      />
    </div>
  );
};

export default LikeButton;
