import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const [formErrors, setFormErrors] = React.useState({
    email: "",
    password: "",
    firstName: "",
  });

  // Handle the submit event of the form
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default action of the form
    const data = new FormData(event.currentTarget); // Create a new FormData object from the form̥

    setFormErrors({
      email: "",
      password: "",
      firstName: "",
    });

    const email = data.get("email") as string;
    const password = data.get("password") as string;
    const firstName = data.get("firstName") as string;

    if (!email) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
    }

    if (!password) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
    }

    if (!firstName) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "First Name is required",
      }));
    }
    if (true) {
      axios
        .post("http://127.0.0.1:3000/users", {
          name: firstName + " " + data.get("lastName"),
          email: email,
          password: password,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                error={!!formErrors.firstName}
                helperText={formErrors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={!!formErrors.email}
                helperText={formErrors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                error={!!formErrors.password}
                helperText={formErrors.password}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 4 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-start">
            <Grid item>
              <Link to="/login">Already have an account? Log in</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
