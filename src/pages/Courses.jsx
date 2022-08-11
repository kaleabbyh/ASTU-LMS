import { Grid, Pagination } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CourseFilter from "../components/CourseFilter";
import Post from "../components/Post";
import courses from "../courses";

const Courses = ({ mode, setMode }) => {
  return (
    <Grid container>
      <Grid item xs={12} lg={9}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Grid
            gap={3}
            item
            sx={{
              padding: {
                xs: 2,
                md: 8,
              },
              paddingTop: 0,
              display: { sm: "grid", xs: "block" },
              gridTemplateColumns: {
                md: "repeat(2, 1fr)",
                xl: "repeat(3, 1fr)",
              },
            }}
          >
            {courses.map((course) => (
              <Post key={course.id} course={course} />
            ))}
          </Grid>
          <Pagination
            sx={{ paddingBottom: 4, marginTop: -2 }}
            count={99}
            variant="outlined"
            color="primary"
          />
        </Box>
      </Grid>
      <Grid
        item
        lg={3}
        display={{ xs: "none", lg: "block" }}
      >
        <CourseFilter />
      </Grid>
    </Grid>
  );
};

export default Courses;
