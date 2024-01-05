import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const CardViewSort = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [dashboardContent, setDashboardContent] = React.useState("Spacious");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (clickedItem: string) => {
    setDashboardContent(clickedItem);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          Spacious
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("Compact")}>
          Compact
        </MenuItem>
      </Menu>
    </div>
  );
};

export default CardViewSort;
