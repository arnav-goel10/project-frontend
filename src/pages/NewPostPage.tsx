import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";

export default function CreatePost() {
  // State to store form values
  const [postData, setPostData] = React.useState({
    title: "",
    text: "",
    user_id: 1,
    image: null,
    video: null,
  });

  // Function to handle changes to our form
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostData({ ...postData, [event.target.name]: event.target.value });
  };

  // Function to handle image upload
  const handleImageUpload = (image: any) => {
    setPostData({ ...postData, image });
  };

  // Function to handle video upload
  const handleVideoUpload = (video: any) => {
    setPostData({ ...postData, video });
  };

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., send data to a server
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <MapsUgcIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create a New Post
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                value={postData.title}
                onChange={handleChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                multiline
                fullWidth
                rows={4}
                id="text"
                label="Recipe Text"
                name="text"
                value={postData.text}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <input type="file" accept="image/*, video/*" />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 4 }}
              >
                Create Post
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
