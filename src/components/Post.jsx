import { Favorite, FavoriteBorder, Share, Title } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import RatingBar from "./RatingBar";

// const ResponsiveCardMedia = styled("div")(({ theme }) => ({
//   [theme.breakpoints.down("xs")]: {
//     width:100,
//   },
// }));

const Post = ({ course }) => {
  return (
    <Card
      sx={{
        marginBottom: 2,
        borderRadius: "16px",
        transition: "all .4s",
        opacity: 0.8,
        maxWidth: 330,
        "&:hover": {
          opacity: 1,
          outline: "#47ffe0 solid 1px",
          transform: "translateY(-16px)",
          boxShadow: "0 3px 5px 0 rgba(0,0,0,0.5)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="50%"
        image={course.logo}
        alt={course.title}
      />
      <CardHeader
        avatar={
          <Icon>
            <Title />
          </Icon>
        }
        action={
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
        }
        title={<Typography>{course.title}</Typography>}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {course.about}
        </Typography>
      </CardContent>
      <CardActions>
        <RatingBar />
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <Button
          sx={{
            border: ".5px solid #006ea1",
            "&:hover": { backgroundColor: "#006ea1", color: "#fff" },
            borderRadius: 8,
            width: 100,
          }}
          variant="outlined"
          size="small"
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
