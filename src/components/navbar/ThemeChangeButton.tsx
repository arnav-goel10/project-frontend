import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
interface Props {
  toggleTheme: () => void;
}
const ThemeChangeButton: React.FC<Props> = ({ toggleTheme }) => {
  // State to store our current theme
  const [isDarkMode, setDarkMode] = React.useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = (checked: boolean) => {
    // Update the state with the new dark mode value
    setDarkMode(checked);
    // Call the toggleTheme function to update the theme
    toggleTheme();
  };
  return (
    // Render the dark mode switch component
    <DarkModeSwitch
      // Set the initial checked state
      checked={isDarkMode}
      // Callback to handle the change event
      onChange={toggleDarkMode}
      // Set the size of the switch
      size={"4.5vw"}
    />
  );
};

export default ThemeChangeButton;
