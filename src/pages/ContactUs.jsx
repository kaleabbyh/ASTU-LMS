import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import LogoBox from "../components/LogoBox";
const ContactUs = ({ theme }) => {
  return (
    <Box
      pb={10}
      className="contact-page"
      display={"flex"}
      flexDirection="column"
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        marginTop: "0 !important",
        marginBottom: "0 !important",
      }}
    >
      <Typography
        color={"#ffffff"}
        bgcolor={"#333"}
        variant="h3"
        component="h1"
        p={5}
        fontSize={"2vw"}
        letterSpacing={5}
        fontWeight={"800"}
        textTransform={"uppercase"}
        fontFamily="Nova Flat"
      >
        Reach out to us
      </Typography>
      <Box p={5} display="flex" alignItems={"center"} flexDirection={"row"}>
        <LogoBox>
          <Box>
            <img
              style={{
                borderRadius: "50%",
                opacity: "50%",
                height: 300,
                width: 300,
              }}
              src="/images/e-learning-2.jpg"
              alt=""
            />
          </Box>
        </LogoBox>
        <Card
          sx={{
            border: "1px solid #02ba73",
            borderRadius: 8,
            padding: { xs: 0, sm: 2 },
            mx: { xs: 0, sm: 1, md: 2 },
            minWidth: { xs: 300, sm: 500, md: 500, lg: 600 },
          }}
        >
          <CardContent>
            <Stack spacing={2}>
              <TextField
                fullWidth
                label="email"
                type={"email"}
                placeholder="your email"
                autoComplete="false"
              />
              <TextareaAutosize
                minRows={6}
                maxRows = {10}
                maxLength = {500}
                label="message"
                type={"text"}
                placeholder="your message ..."
              />
            </Stack>
          </CardContent>
          <CardActions>
            <Box component="div" sx={{ flexGrow: 1 }} />
            <Button
              sx={{
                border: "1px solid #048bde",
                "&:hover": { backgroundColor: "#048bde", color: "#fff" },
                borderRadius: 8,
                width: 150,
              }}
              variant="outlined"
              size="large"
            >
              Send
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default ContactUs;
