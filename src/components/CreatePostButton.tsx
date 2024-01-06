import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CreatePostButton = () => {
  return (
    <Button
      variant="outlined"
      startIcon={<AddCircleOutlineIcon sx={{ fontSize: 40 }} />}
      sx={{
        color: "orangered",
        border: "1px solid orangered",
        padding: "0.8rem 1.6rem",
        borderRadius: "1.5rem",
        fontSize: "1.15rem",
      }}
    >
      &nbsp;Create &nbsp;Post
    </Button>
  );
};

export default CreatePostButton;
