import * as React from "react";
import PropTypes from "prop-types";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import {
  CssBaseline,
  ListItemIcon,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import { Book, Info, PermContactCalendar, School } from "@mui/icons-material";
import AccountMenu from "./AccountMenu";
import SchoolList from "./SchoolList";
import NavLink from "./widgets/NavLink";

const drawerWidth = 240;
const navItems = [
  ["Schools", <School />],
  ["Courses", <Book />],
  ["About", <Info />],
  ["Contact", <PermContactCalendar />],
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Avatar sx={{ my: 2, mx: "auto" }} src="/images/logo.png" />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "left", paddingLeft: "32px" }}>
              <ListItemIcon>{item[1]}</ListItemIcon>
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.1),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.05),
    },
    marginLeft: 0,
    width: "100%",
    color: alpha(theme.palette.text.secondary, 0.5),
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: alpha("#269f9f", 0.5),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: theme.palette.text.primary,
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("lg")]: {
        width: "24ch",
        "&:focus": {
          width: "30ch",
        },
      },
      [theme.breakpoints.between("md", "lg")]: {
        width: "12ch",
        "&:focus": {
          width: "16ch",
        },
      },
    },
  }));
  const container =
    window !== undefined ? () => window().document.body : undefined;

  function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar component="nav">
          <Toolbar className="navbar">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              component="div"
              sx={{ flexGrow: 0.3, display: { xs: "none", sm: "block" } }}
            />
            <NavLink to={"/"}>
              <Avatar
                sx={{
                  transform: "scale(1.25)",
                  display: { xs: "none", sm: "none", md: "block" },
                }}
                src="/images/logo2.png"
              />
            </NavLink>
            <Box
              component="div"
              sx={{ flexGrow: 0.5, display: { xs: "none", sm: "block" } }}
            />
            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              <SchoolList />
            </Box>

            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              {navItems.map((item) =>
                item[0] === "Schools" ? null : item[0] === "Courses" ? (
                  <NavLink key={item} to={"/courses"}>
                    {item[0]}
                  </NavLink>
                ) : item[0] === "About" ? (
                  <NavLink key={item} to={"/about"}>
                    {item[0]}
                  </NavLink>
                ) : (
                  item[0] === "Contact" && (
                    <NavLink key={item} to={"/contact"}>
                      {item[0]}
                    </NavLink>
                  )
                )
              )}
            </Box>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 0 }}>
              <AccountMenu />
            </Box>
            <Box
              component="div"
              sx={{ flexGrow: 0.2, display: { xs: "none", sm: "block" } }}
            />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </React.Fragment>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
