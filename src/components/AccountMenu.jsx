import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { Badge, Link } from "@mui/material";
import {
  MailOutline,
  NotificationsOutlined,
  Person,
  SettingsOutlined,
} from "@mui/icons-material";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar alt="Hana Girma" src="/images/useravatar.png" />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <ListItemIcon>
            <Person fontSize="small" />
          </ListItemIcon>
          Hana Girma
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Badge color="secondary" badgeContent={3}>
              <MailOutline fontSize="small" />
            </Badge>
          </ListItemIcon>
          Messages
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Badge color="secondary" badgeContent={"9+"}>
              <NotificationsOutlined fontSize="small" />
            </Badge>
          </ListItemIcon>
          Notifications
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <SettingsOutlined fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout color="error" fontSize="small" />
          </ListItemIcon>
          <Link underline="none" color={"text.primary"} href="/login">
            Logout
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
}
