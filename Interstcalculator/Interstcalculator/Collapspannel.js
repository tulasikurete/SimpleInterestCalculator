import { Grid, Box, Typography, Button, Collapse } from "@mui/material";
import React, { useState } from "react";
const FAQS = [
  {
    heading: " Is this AGood Product",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro undeducimus officiis animi vitae!",
  },
  {
    heading: " Is this AGood Product 2",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro undeducimus officiis animi vitae!",
  },
  {
    heading: " Is this AGood Product 3",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro undeducimus officiis animi vitae!",
  },
];
export default function Faqs() {
  return (
    <Grid container style={{ background: "#061ab8" }}>
      <Grid container style={{ margin: 60 }}>
        {FAQS.map((faq, i) => (
          <Faq key={i} data={faq} />
        ))}
      </Grid>
    </Grid>
  );
}

function Faq({ data }) {
  const [open, setOpen] = useState(true);
  const collaps = () => {
    setOpen(!open);
  };
  return (
    <Grid container style={{ background: "white",margin:15,padding:10 }}>
      <Grid item xs={11}>
        <Typography><b>{data.heading} </b> </Typography>
        <Collapse in={open}>
          <Typography >{data.description} </Typography>
        </Collapse>
      </Grid>
      <Grid item xs={1}>
        <Button
          variant="outlined"
          sx={{
            
            minWidth: 10,
          
            
          
            background: "#d3d8fd",
            color: "blue",
          }}
          onClick={collaps}
        >
          {open ? "-" : "+"}
        </Button>
      </Grid>
    </Grid>
  );
}
