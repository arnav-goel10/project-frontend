import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import MainPage from "./pages/MainPage";
import NavBar from "./components/NavBar";
import { Grid, Hidden } from "@mui/material";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}
export default App;
