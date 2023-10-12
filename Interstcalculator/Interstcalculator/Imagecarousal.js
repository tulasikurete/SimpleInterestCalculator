import React, { useState } from "react";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";

const images = [
  {
    label: "img1",
    imgPath:
      "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
  },
  {
    label: "Bird",
    imgPath:
      "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696809600&semt=sph",
  },
  {
    label: "Bali",
    imgPath:
      "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
  },
  {
    label: " Serbia",
    imgPath:
      "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
  },
];

export default function Imagecarousal() {
  const [image, setImage] = useState(0);

  const nextHandller = () => {
    if (image === images.length - 1) {
      setImage(0);
    } else {
      setImage(image + 1);
    }
  };
  const backHandller = () => {
    if (image === 0) {
      setImage(images.length - 1);
    } else {
      setImage(image - 1);
    }
  };

  console.log({ image });
  return (
    <Box>
      <Grid container>
        <img src={images[image].imgPath} />
        
        
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <KeyboardArrowRight onClick={nextHandller} />
        </Grid>
        <Grid item xs={6}>
          <KeyboardArrowLeft onClick={backHandller} />
        </Grid>
      </Grid>
    </Box>
  );
}
