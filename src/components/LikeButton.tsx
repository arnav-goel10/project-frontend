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
    <div>
      <FormControlLabel
        control={
          <Checkbox
            icon={<FavoriteBorder style={{ fontSize: "2.5vw" }} />}
            checkedIcon={
              <FavoriteIcon sx={{ color: "orangered", fontSize: "2.5vw" }} />
            }
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
