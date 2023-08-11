import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function SchoolGallary() {
  return (
    <ImageList
      sx={{ width: "100%", height: "30%" }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "images/school/gate1.jpg",
    title: "Astu main gate 1",
    rows: 2,
    cols: 2,
  },
  {
    img: "images/school/aggrement_soul.jpg",
    title: "Aggrement Soul",
  },
  {
    img: "images/school/csedpt.jpeg",
    title: "CSE department",
  },
  {
    img: "images/school/maxresdefault.jpg",
    title: "Astu main gate 2",
    cols: 2,
    rows: 2,
  },
  {
    img: "images/school/maps1.png",
    title: "Astu map",
    cols: 2,
    rows: 2,
  },
  {
    img: "images/school/2014graduatephoto.png",
    title: "2014 graduate",
    rows: 4,
  },
  {
    img: "images/school/union.jpg",
    title: "Astu Union",
    rows:2
  },
  {
    img: "images/school/slide5.jpg",
    title: "Astu slide 1",
  },
  {
    img: "images/school/slide14.jpg",
    title: "Astu slide 2",
  },
  {
    img: "images/accessible-eLearning-why-how-design-it-810x424.png",
    title: "Astu elearning 2",
    rows: 2,
    cols: 2,
  },
  {
    img: "images/e-learning-2.jpg",
    title: "Astu elearning",
    rows: 2,
  },
];
