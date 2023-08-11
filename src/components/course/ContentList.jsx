import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Icon,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { ExpandMore, ListAlt, PlayCircleFilled, VideoFile } from "@mui/icons-material";
import styled from "@emotion/styled";
import { padding } from "@mui/system";

const data = [
  {
    title: "Introduction to React",
    content: [
      "What is React? ",
      "Why React? ",
      "React version history ",
      "React 16 vs React 15 ",
      "Just React – Hello World ",
      "Using create-react-app ",
      "Anatomy of react project ",
      "Running the app ",
      "Debugging first react app ",
    ],
    time: "2hrs.",
  },
  {
    title: "Templating using JSX",
    content: [
      "Working with React. createElement",
      "Expressions",
      "Using logical operators",
      "Specifying attributes",
      "Specifying children",
      "Fragments",
    ],
    time: "1.5 hrs.",
  },
  {
    title: "About Components",
    content: [
      "Significance of component architecture",
      "Types of components",
      "Functional",
      "Class based",
      "Pure",
      "Component Composition",
    ],
    time: "2hrs",
  },
  {
    title: "Working with state and props",
    content: [
      "What is state and it significance",
      "Read state and set state",
      "Passing data to component using props",
      "Validating props using propTypes",
      "Supplying default values to props using defaultProps",
      "Rendering lists",
      "Using react key prop",
      "Using map function to iterate on arrays to generate elements",
    ],
    time: "3hrs",
  },
  {
    title: "Event handling in React",
    content: [
      "Understanding React event system",
      "Understanding Synthetic event",
      "Passing arguments to event handlers",
    ],
    time: "1.3hrs",
  },
  {
    title: "Understanding component lifecycle and  handling errors",
    content: [
      "Understand the lifecycle methods",
      "Handle errors using error boundaries",
    ],
    time: "1hr",
  },
  {
    title: "Working with forms",
    content: [
      "Controlled components",
      "Uncontrolled components",
      "Understand the significance to default Value prop",
      "Using react ref prop to get access to DOM element",
    ],
    time: "2.5hrs",
  },
  {
    title: "Context",
    content: [
      "What is context",
      "When to use context",
      "Create Context",
      "Context.Provider",
      "Context.Consumer",
      "Reading context in class",
    ],
    time: "3hrs",
  },
  {
    title: "Hooks",
    content: [
      "What are hooks",
      "Why do you need hooks",
      "Different types of hooks",
      "Using state and effect hooks",
      "Rules of hooks",
      "Routing with react router",
    ],
    time: "3hrs",
  },
  {
    title: "Code-Splitting",
    content: [
      "What is code splitting",
      "Why do you need code splitting",
      "React.lazy",
      "Suspense",
      "Route-based code splitting",
      "Setting up react router",
      "Understand routing in single page applications",
      "Working with BrowserRouter and HashRouter components",
      "Configuring route with Route component",
      "Using Switch component to define routing rules",
      "Making routes dynamic using route params",
      "Working with nested routes",
      "Navigating to pages using Link and NavLink component",
      "Redirect routes using Redirect Component",
      "Using Prompt component to get consent of user for navigation",
      "Path less Route to handle failed matches",
    ],
    time: "5hrs.",
  },
];
const Span = styled("span")(({ them }) => ({
  padding: "0 1rem",
  color: "blueViolet",
  fontSize:"14px",
}));
export default function ContentList() {
  const sections = data.length +8;
  function totalLectures() {
    let sum = 0;
    data.forEach((element) => {
      sum += element.content.length;
    });
    return sum+50;
  }
  return (
    <List component="nav" disablePadding>
      <Box display="flex" flexWrap={"wrap"} p={1} bgcolor={"rgba(0,0,0,0.05)"}>
        <Span>📁 {sections} Sections</Span>
        <Span>🎬 {totalLectures()} Lectures</Span>
        <Span>📚 3 eBooks</Span>
        <Span>⏲ 57h 34min total length</Span>
      </Box>
      {data.map((item) => (
        <Accordion key={item}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="course-content"
            id="course-content"
            sx={{
              backgroundColor: "rgba(71, 98, 130, 0.1)",
            }}
          >
            <Typography pr={1} fontWeight={700}>
              {data.indexOf(item) + 1}
            </Typography>
            <Box display={"flex"}>
              <Typography sx={{ fontSize: "16px" }}>{item.title}</Typography>
            </Box>
            <Box flexGrow={1} />
            <Typography sx={{ padding: "0 1rem", color: "blueviolet" }}>
              {item.content.length} lectures
            </Typography>
            <Typography px={2}>{item.time}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "rgba(71, 98, 130, 0.2)" }}>
            {item.content.map((c) => (
              <>
                <Divider />
                <ListItemButton
                  key={c}
                  sx={{ py: 0, minHeight: 32, color: "rgba(0,0,0,.8)" }}
                >
                  <span style={{ padding: "0 0.5rem" }}>
                    {item.content.indexOf(c)}
                  </span>
                  <ListItemText
                    primary={c}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: "medium",
                    }}
                  />
                  <ListItemIcon>
                    <IconButton>
                      <PlayCircleFilled color="primary" />
                    </IconButton>
                  </ListItemIcon>
                </ListItemButton>
              </>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </List>
  );
}
