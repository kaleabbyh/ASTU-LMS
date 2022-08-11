import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import {
  Divider,
  Fab,
  Slider,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { StackedBarChart } from "@mui/icons-material";

export default function CourseFilter() {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <Box
      position="fixed"
      display={"flex"}
      flexDirection="column"
      alignItems="center"
      mt={1}
      px={2}
      minWidth={300}
      bgcolor={"background.paper"}
    >
      <Typography p={2} variant="h5">
        Filter Courses
      </Typography>
      <List dense sx={{ width: "100%" }}>
        {[0, 1, 2].map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem
              key={value}
              secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={handleToggle(value)}
                  checked={checked.indexOf(value) !== -1}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              }
              disablePadding
              disableRipple
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt={`Avatar n°${value + 1}`}
                    src={`/static/images/avatar/${value + 1}.jpg`}
                  />
                </ListItemAvatar>
                <ListItemText
                  id={labelId}
                  primary={`Filter attribute ${value + 1}`}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <ListItem>
        <ListItemText id="switch-list-1" primary="Filter attribute" />
        <Switch edge="end" />
      </ListItem>
      <ListItem>
        <ListItemText id="switch-list-1" primary="Filter attribute" />
        <Switch edge="end" />
      </ListItem>
      <ListItem>
        <ListItemText id="switch-list-1" primary="Filter attribute" />
        <Switch edge="end" />
      </ListItem>
      <Divider/>
      <Box maxWidth={300}>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="web">Web</ToggleButton>
          <ToggleButton value="android">Android</ToggleButton>
          <ToggleButton value="ios">iOS</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Divider />
      <Typography>Filter by rating</Typography>
      <Box minWidth={200}>
        <Slider
          aria-label="rating"
          defaultValue={3.5}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={0.5}
          marks
          min={0}
          max={5}
        />
      </Box>
      <Fab
        sx={{ marginTop: 5 }}
        variant="extended"
        size="medium"
        color="primary"
        aria-label="add"
      >
        <StackedBarChart sx={{ mr: 1 }} />
        Apply Filter
      </Fab>
    </Box>
  );
}
