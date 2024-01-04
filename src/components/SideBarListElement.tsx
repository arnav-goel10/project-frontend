import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

interface SideBarListElementProps {
  label: string;
  icon?: React.ReactNode; // Optional icon for the list item
  selected?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const SideBarListElement: React.FC<SideBarListElementProps> = ({
  label,
  icon,
  selected,
  onClick,
}) => {
  return (
    <ListItemButton
      selected={selected}
      onClick={onClick}
      sx={{ borderRadius: "2rem", margin: "0.25rem 1.5rem" }}
    >
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export default SideBarListElement;
