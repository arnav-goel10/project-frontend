import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { SvgIcon } from "@mui/material";

const NewTopSort = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [dashboardContent, setDashboardContent] = React.useState("Spacious"); // Initial selection

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (clickedItem: string) => {
    setDashboardContent(clickedItem);
    setAnchorEl(null); // Close menu when item is clicked
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const SpaciousIcon = (
    <svg
      fill="currentColor"
      height="16"
      icon-name="view-card-outline"
      viewBox="0 0 20 20"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.882 1H2.118A1.12 1.12 0 0 0 1 2.119v15.762A1.119 1.119 0 0 0 2.118 19h15.764A1.12 1.12 0 0 0 19 17.881V2.119A1.12 1.12 0 0 0 17.882 1Zm-.132 16.75H2.25v-7.138h15.5v7.138ZM2.25 9.362V2.25h15.5v7.112H2.25Z"></path>
    </svg>
  );

  const CompactIcon = (
    <svg
      fill="currentColor"
      height="16"
      icon-name="view-classic-outline"
      viewBox="0 0 20 20"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.882 2H2.118A1.118 1.118 0 0 0 1 3.116v13.768A1.118 1.118 0 0 0 2.118 18h15.764A1.118 1.118 0 0 0 19 16.884V3.116A1.118 1.118 0 0 0 17.882 2ZM2.25 3.25h15.5V7H2.25V3.25Zm15.5 13.5H2.25v-3.5h15.5v3.5Zm0-4.75H2.25V8.25h15.5V12Z"></path>
    </svg>
  );

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={anchorEl ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={anchorEl ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "orangered" }}
      >
        {dashboardContent === "Spacious" ? SpaciousIcon : CompactIcon}
        &nbsp;&nbsp;
        {dashboardContent}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleMenuItemClick("Spacious")}>
          {SpaciousIcon} &nbsp;&nbsp;Spacious
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("Compact")}>
          {CompactIcon}&nbsp;&nbsp; Compact
        </MenuItem>
      </Menu>
    </div>
  );
};

export default NewTopSort;
