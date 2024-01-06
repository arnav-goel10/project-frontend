import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { SvgIcon } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import NewReleasesIcon from "@mui/icons-material/NewReleases";

const NewTopSort = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [dashboardContent, setDashboardContent] = React.useState("New"); // Initial selection

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

  const newIcon = (
    <NewReleasesIcon
      sx={{
        fontSize: 22,
      }}
    />
  );
  const topIcon = (
    <KeyboardDoubleArrowUpIcon
      sx={{
        fontSize: 22,
      }}
    />
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
        {dashboardContent === "New" ? newIcon : topIcon}
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
        <MenuItem onClick={() => handleMenuItemClick("New")}>
          {newIcon}&nbsp;&nbsp;New
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("Top")}>
          {topIcon}&nbsp;&nbsp;Top
        </MenuItem>
      </Menu>
    </div>
  );
};

export default NewTopSort;
