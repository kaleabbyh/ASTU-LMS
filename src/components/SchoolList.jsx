import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const SchoolLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary,
}));

export default function SchoolList() {
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
      <Button onClick={handleClick} className="navbar-btn">
        Schools
      </Button>
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
          <SchoolLink to={"/school"}>
            <Typography>
              School of Freshman division
            </Typography>
          </SchoolLink>
        </MenuItem>
        <Divider />
        <MenuItem>
          {" "}
          <SchoolLink to={"/school"}>
            <Typography>
              School Applied Scence
            </Typography>
          </SchoolLink>
        </MenuItem>
        <Divider />
        <MenuItem>
          <SchoolLink to={"/school"}>
            <Typography >
              School Computting and Electrical Engineering
            </Typography>
          </SchoolLink>
        </MenuItem>
        <Divider />
        <MenuItem>
          <SchoolLink to={"/school"}>
            <Typography>
              School Mechanical Engineering
            </Typography>
          </SchoolLink>
        </MenuItem>
        <MenuItem>
          <SchoolLink to={"/school"}>
            <Typography>
              School of Civil and Architectural Engineering
            </Typography>
          </SchoolLink>
        </MenuItem>
      </Menu>
    </>
  );
}
