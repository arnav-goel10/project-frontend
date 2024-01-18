import * as React from "react";
import { Navigate, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate(); // Access the navigate object

  const [formErrors, setFormErrors] = React.useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  // Handle the submit event of the form
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default action of the form
    const data = new FormData(event.currentTarget); // Create a new FormData object from the form̥

    setFormErrors({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    });

    const email = data.get("email") as string;
    const password = data.get("password") as string;
    const firstName = data.get("firstName") as string;
    const lastName = data.get("lastName") as string;

    function validEmail(email: string) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email.length > 0) {
        return emailRegex.test(email);
      }
      return false;
    }

    function validFirst(first: string) {
      if (first.length > 0) {
        return true;
      }
      return false;
    }

    function validLast(last: string) {
      if (last.length > 0) {
        return true;
      }
      return false;
    }

    function validPassword(password: string) {
      if (password.length > 8) {
        return true;
      }
      return false;
    }

    if (!validEmail(email)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "Input correct Email",
      }));
    }

    if (!validPassword(password)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password should be atleast 8 digits",
      }));
    }

    if (!validFirst(firstName)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "First Name is required",
      }));
    }

    if (!validLast(lastName)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        lastName: "Last Name is required",
      }));
    }

    if (
      validEmail(email) &&
      validFirst(firstName) &&
      validLast(lastName) &&
      validPassword(password)
    ) {
      axios
        .post("http://127.0.0.1:3000/users", {
          name: firstName + " " + lastName,
          email: email,
          password: password,
        })
        .then(function (response) {
          console.log(response);
          navigate("/login"); // Navigate to /login after successful API post
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
                error={!!formErrors.lastName}
                helperText={formErrors.lastName}
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
