import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
interface Props {
  toggleTheme: () => void;
}
const ThemeChangeButton: React.FC<Props> = ({ toggleTheme }) => {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    toggleTheme();
  };
  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={"4.5vw"}
    />
  );
};

export default ThemeChangeButton;
