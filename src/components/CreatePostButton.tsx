import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CreatePostButton = () => {
  return (
    <Button
      variant="outlined"
      startIcon={<AddCircleOutlineIcon />}
      sx={{
        color: "orangered",
        border: "1px solid orangered",
        padding: "0.8rem 1.6rem",
        borderRadius: "5rem",
        fontSize: "1.15rem",
      }}
    >
      &nbsp;Create &nbsp;Post
    </Button>
  );
};

export default CreatePostButton;
