import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import MainPage from "./pages/MainPage";
import NavBar from "./components/NavBar";
import { ThemeProvider, createTheme } from "@mui/material";
import NewPostPage from "./pages/NewPostPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = React.useMemo(() => {
    return createTheme({
      palette: {
        mode: darkMode ? "dark" : "light",
      },
    });
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

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
