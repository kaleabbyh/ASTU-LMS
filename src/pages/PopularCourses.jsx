import { Box, Button, Grid, Link } from "@mui/material";
import Post from "../components/Post";
import React from "react";
import courses from "../courses";

const PopularCourses = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Grid
        gap={3}
        item
        sm={9}
        sx={{
          padding: {
            xs: 2,
            sm: 8,
          },
          display: { sm: "grid", xs: "block" },
          gridTemplateColumns: {
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          },
        }}
      >
        {courses
          .filter((course) => Number(course.id) < 5)
          .map((course) => (
            <Post key={course.id} course={course} />
          ))}
      </Grid>

        <Button
          color="info"
          sx={{
            alignSelf:"flex-end",
            margin:{xs:"-1rem 2rem 1rem 0",sm:"-3rem 10rem 2rem 0"},
            transition: "all .4s",
            "&:hover": {
              transform: "ScaleX(1.25)",
              borderRadius: 4,
              border: "0.75px solid rgba(38,159,159,0.25)",
            },
          }}
          size="large"
          variant="text"
        >
          <Link underline="none" color="inherit" href="/courses">See More</Link>
        </Button>
    </Box>
  );
};

export default PopularCourses;
