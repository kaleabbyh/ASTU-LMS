import { Box, Grid } from "@mui/material";
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
        {courses.map((course) => (
          <Post key={course.id} course={course} />
        ))}
      </Grid>
      {/* <Pagination
        sx={{ marginTop: { xs: 0, sm: -4 } }}
        count={99}
        variant="outlined"
        color="primary"
      /> */}
      {/* <Button
        color="info"
        sx={{
          marginTop: { xs: 0, sm: -4 },
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
        See More
      </Button> */}
    </Box>
  );
};

export default PopularCourses;
