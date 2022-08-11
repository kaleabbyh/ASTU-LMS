import {
  Avatar,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box sx={{ padding: 2, position: "sticky" }}>
      <Typography variant="h6" fontWeight={100} mb={2}>
        Latest events
      </Typography>
      <ImageList cols={3} rowHeight={100} gap={5}>
        <ImageListItem>
          <img src="../images/event1.jpg" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="../images/event2.jpg" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="../images/event3.jpg" alt="" />
        </ImageListItem>
      </ImageList>
      <Typography variant="h6" fontWeight={100} mt={2}>
        Latest Conversations
      </Typography>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="F" src="F" />
          </ListItemAvatar>
          <ListItemText
            primary="fikreab mekuriaw"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  hello everyone
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="M" src="M" />
          </ListItemAvatar>
          <ListItemText
            primary="kaleab bayih"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  astu made me awesome
                </Typography>
                {" — Wish I could come, but I'm out of town now…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="K" />
          </ListItemAvatar>
          <ListItemText
            primary="kaleab bayih"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  good to see you guys
                </Typography>
                {" — i am there too. Have you ever…"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Rightbar;
