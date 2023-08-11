import styled from "@emotion/styled";
import {
  CalendarMonth,
  Check,
  ExpandMore,
  Language,
  PeopleAlt,
  Subtitles,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Icon,
  Link,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import ContentList from "../components/course/ContentList";
import RatingBar from "../components/RatingBar";
import courses from "../courses";

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: "720px",
  paddingLeft: "2rem",
  [theme.breakpoints.down("md")]: {
    maxWidth: "600px",
    paddingLeft: 0,
  },
}));
const data = [
  "Create dynamic web apps using the latest in web technology",
  "Practice your skills with many large projects, exercises, and quizzes",
  "Become fluent in the toolchain supporting React, including NPM, Webpack, Babel, and ES6/ES2015 Javascript syntax",
  "Realize the power of building reusable components",
  "Acquire the programming skills needed to obtain a software engineering job",
  "Master the fundamentals concepts behind React and Redux",
  "Be the engineer who explains how Redux works to everyone else, because you know the fundamentals so well",
];

const CourseDetail = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      width: "100vw",
    }}
  >
    <Box
      component={"div"}
      sx={{
        padding: { xs: "2rem 1rem", md: "2rem 6rem" },
        color: "#ffffff",
        backgroundColor: "#1C1D1F",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <HeaderContainer flexGrow={0.3}>
        <Typography variant={"h4"} component={"h4"}>
          React JS: The Complete Developer's Guide
        </Typography>
        <Typography component={"p"}>
          Master React Js by learning popular design patterns and building
          complex projects. Includes Next Js, Typscript, and Express!
        </Typography>
      </HeaderContainer>
      <HeaderContainer flexGrow={0.3}>
        <Typography>
          <Box display={"flex"}>
            <Icon sx={{ marginRight: 1 }} fontSize="small">
              <PeopleAlt />
            </Icon>
            <span>Created by &nbsp; </span>

            <Link fontWeight={700} color="skyBlue" underline="none">
              Animaw Bayih (PhD)
            </Link>
          </Box>
        </Typography>
        <Typography>
          <Icon sx={{ marginRight: 1 }} fontSize="small">
            <CalendarMonth />
          </Icon>
          <span>Last updated: 08/2022</span>
        </Typography>
        <Typography>
          <Icon sx={{ marginRight: 1 }} fontSize="small">
            <Language />
          </Icon>
          <span>
            English
            <Icon sx={{ marginRight: 1, marginLeft: 1 }} fontSize="small">
              <Subtitles />
            </Icon>
            English [Auto], Amharic [Auto] ,<span>5 more</span>
          </span>
        </Typography>
        <RatingBar />
      </HeaderContainer>
    </Box>
    <Grid spacing={3} mt={2} px={{ sm: 1, lg: 5 }} container direction={"row"}>
      <Grid item sm={12} lg={9}>
        <Box border={"1px solid #bfb9b9"}>
          <Typography p={2} variant="h4" fontWeight={600}>
            What you'll learn
          </Typography>
          <Box display={"flex"} flexDirection="row" flexWrap="wrap">
            {data.map((item) => (
              <Box maxWidth={"400px"}>
                <ListItem desablepadding>
                  <ListItemIcon key={item}>
                    <Check />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              </Box>
            ))}
          </Box>
        </Box>
        <Box p={{ xs: "1rem 1rem" }} border={"1px solid #bfb9b9"} mt={2}>
          <Typography
            variant="body2"
            color="text.secondary"
            p={1}
            compontent={"p"}
          >
            This course covers everything you need to know to write high-­quality
            React code. You'll learn about React components using the functional
            method of writing them as well as the class method. You'll learn
            about managing the state of your application using several different
            methods, including with React Hooks and with the setState method.
            You'll learn how to put components together to make complete and
            dynamic user interfaces. You'll learn how to fetch data from an
            external data source and use it in your application. And, you'll
            learn how to store data in the user's web browser to improve the
            performance and usability of your application. Speaking of
            usability, you'll learn about best practices for making your
            application work on mobile devices as well as on the desktop, and
            you'll also learn how to make sure that your application will be
            accessible.
          </Typography>
          <Typography 
            variant="body2"
            color="text.secondary"
            p={1}
            compontent={"p"}>
          Because React takes advantage of many of the latest and
            greatest improvements and enhancements to the underlying JavaScript
            language, I'll be giving you JavaScript lessons throughout the book.
            Some of the new JavaScript syntax can be a little confusing to those
            of us who first learned the language in its early days, but I'll
            provide plenty of simple and real-­world examples to explain each
            new bit of syntax or shortcut.
          </Typography>
        </Box>
      </Grid>
      <Grid item lg={3}>
        <Card>
          <CardMedia
            component="img"
            alt="green iguana"
            height="240"
            image="/images/courses/reactdev.jpeg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              React Js Tutorial
            </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                p={1}
                compontent={"p"}
              >
                Our React.JS Course equips the learner for developing a
                single-page or mobile applications and creates reusable
                components for web pages and mobile applications.The React.JS Course Curriculum
                contains basic elements like introduction, JSX overview,
                Environmental setup, real-time applications, forms and UI,
                Component Lifecycle, Event Handling, and Styles along with
                advanced features such as router and navigations, Flux, Redux,
                and Unit testing methods. Check out the detailed React.
              </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="large">Start Course</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
    <Container maxWidth="lg">
      <Box py={2}>
        <Typography pt={4} variant="h5" compontent={"h5"}>
          React Js Course Content
        </Typography>
        <ContentList />
        <Button
          sx={{
            width: "100%",
            marginTop: "1rem",
            "&:hover": {
              backgroundColor: "#00695c",
              color: "#fff",
            },
          }}
          variant="outlined"
          color="primary"
          aria-label="more"
        >
          <ExpandMore />
          Learn More
        </Button>
      </Box>
    </Container>
    <Container maxWidth="xl">
      <Grid mt={2} direction="row" container spacing={2}>
        <Grid mt={-5} item xs={12} md={6} lg={3}>
          <Box
            boxShadow={"0 0 5px 2px #bcbcbc"}
            borderTop={"3px solid #00695c"}
            borderLeft={"5px solid #00695c"}
            m={2}
          >
            <Paper>
              <Typography component={"p"} p={2}>
                Learn the best React.JS Course in Ethiopia to create and manage
                view layers of web pages and mobile apps. Our trainers are
                skilled and certified to provide comprehensive coaching with
                hands-on exposure. Connect us at +251 22545786 for more
                information about React.JS Training
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid mb={2} item xs={0} md={6} lg={9}>
          <Typography variant="h5" compontent="h5">
            You may also also like
          </Typography>
          <Box display="flex" flexWrap="wrap">
            {courses.map(({ title, logo, about }, index) => (
              <Box m={1}>
                <Paper elevation={2} minWidth={300}>
                  <ListItem button key={index + about}>
                    <ListItemAvatar>
                      <Avatar variant="rounded" alt="Course logo" src={logo} />
                    </ListItemAvatar>
                    <ListItemText primary={title} secondary={about} />
                  </ListItem>
                </Paper>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default CourseDetail;
