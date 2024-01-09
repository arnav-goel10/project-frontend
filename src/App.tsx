import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import MainPage from "./pages/MainPage";
import NavBar from "./components/NavBar";
import { ThemeProvider, createTheme } from "@mui/material";
import NewPostPage from "./pages/NewPostPage";

function App() {
  // Create a state variable called darkMode and set it to false
  const [darkMode, setDarkMode] = useState(false);

  // Create a theme variable and set it to a theme created using the createTheme function from the @mui/material library
  const theme = React.useMemo(() => {
    return createTheme({
      palette: {
        mode: darkMode ? "dark" : "light",
      },
    });
  }, [darkMode]);

  // Create a function called toggleTheme that sets the darkMode state variable to the opposite of its current value
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  // Return a React element that contains the NavBar component, a Routes component, and a Route component
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar toggleTheme={toggleTheme} />

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/newpost" element={<NewPostPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
