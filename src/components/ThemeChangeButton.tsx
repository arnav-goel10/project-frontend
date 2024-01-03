import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeChangeButton = () => {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };
  return (
    <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={60} />
  );
};

export default ThemeChangeButton;
