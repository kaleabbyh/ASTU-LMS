import { Box, Button, Typography } from "@mui/material";
import { Carousel } from "react-carousel-minimal";
import events from "../events";

let data = events.map((event) => ({ image: event.image, caption: event.name }));

function CarouselComponent() {
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <Box>
      <Carousel
        data={data}
        time={5000}
        width="100%"
        height="500px"
        captionStyle={captionStyle}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        style={{
          textAlign: "center",
          maxWidth: "1200px",
          maxHeight: "500px",

          margin: "auto ",
        }}
      />
      <Box
        sx={{
          position:"absolute",
          top:"8%",
          height:"500px",
          paddingTop: 5,
          paddingLeft:{xs:0,sm:5},
          backgroundColor: "rgba(0,0,0,0.8)",
          width: {xs:"100%",lg:"75%"},
          // clipPath:"polygon(0 0, 40% 0, 50% 50%, 40% 100%, 0 100%)"
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            letterSpacing: 10,
            color: "#ffffff",
            fontFamily:"Monoton",
            padding: {
              xs: 2,
              md: 6,
            },
          }}
          variant="h3"
          textAlign={"left"}
        >
          ASTU LMS
        </Typography>
        <Typography
          sx={{
            color: "#29c8be",
            fontFamily:"Uroob",
            paddingLeft: {
              xs:3,
              md: 10,
            },
          }}
          variant="h5"
        >
          Learn Eveything In One Place
        </Typography>
        <Typography
          sx={{
            color: "#29c8be",
            fontFamily:"Uroob",
            paddingLeft: {
              xs:3,
              md: 10,
            },
          }}
          mt={2}
          variant="h5"
        >
          The New way of Learning
        </Typography>
        <Box pl={{xs:3,md:10}} mt={5} width={"100%"}>
          <Button
            sx={{
              color: "#00c8c8",
              borderRadius: 16,
              transition: "all 0.4s",
              "&:hover": {
                color: "#ffffff",
                backgroundColor: "#00c8c8",
                transform: "Scale(1.25)",
              },
            }}
            variant="outlined"
            size="large"
          >
            Start Learning
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CarouselComponent;
