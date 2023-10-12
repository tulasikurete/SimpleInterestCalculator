import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Button, Grid } from "@mui/material";
export default function Bmicalculator() {
  const [weight, setwieght] = useState(1);
  const [height, setHeight] = useState(1);
  const [bmi, setBmi] = useState(34.48);
  const weightHandller = (event) => {
    const value = Number(event.target.value);
    setwieght(value);
    const Hgt = height / 100;
    const BMI = weight / (Hgt * Hgt);
    setBmi(BMI);
  };
  const heightHandller = (event) => {
    const value = Number(event.target.value);
    setHeight(value);
    const Hgt = height / 100;
    const BMI = weight / (Hgt * Hgt);
    setBmi(BMI);
  };

  return (
    <Grid style={{ background: "gray", width: 600,height:600 }}>
      <Grid container>
        <Box sx={{ width: 1500, background: "white", margin: 20,height:200 }}>
          <paper elevation={4}>
            <Grid style={{ background: "blue", color: "white" }}>
              <typography style={{ fontSize: 20, marginLeft: 30 }}>
                BMI CALCULATOR
              </typography>
            </Grid>
            <Slider
              size="small"
              defaultValue={ 80}
              aria-label="Small"
              min={30}
              max={200}
              valueLabelDisplay="auto"
              onChange={weightHandller}
            />
            <Slider
              defaultValue={162}
              aria-label=" Default"
              valueLabelDisplay= "auto"
              min={30}
              max={200}
              onChange={heightHandller}
            />
            <Grid container>
              <typography style={{ marginLeft: 100 }}>Your BMI is</typography>
              <p
                style={{
                  width: 70,
                  height: 30,
                  background: "blue",
                  borderRadius: 40,
                  color: "white",
                  marginLeft: -80,
                  marginTop: 45,
                }}
              >
                <typography style={{ marginLeft: 13 }}>{bmi}</typography>
                
              </p>
            </Grid>
          </paper>
        </Box>
      </Grid>
    </Grid>
  );
}
