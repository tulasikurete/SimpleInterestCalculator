import React, { useState } from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Button,
  Paper,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import TextField from "@mui/material/TextField";

export default function Interest() {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(12);
  const [time, setTime] = useState(1);
  const [interest, setInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [timeFrame, setTimeframe] = useState("month");
  const selectHandler = (event) => {
    setTimeframe(event.target.value);
  };

  const result = () => {
    const currentTime = timeFrame === "year" ? time * 12 : time;
    const interest = principal * rate * currentTime;

    setInterest(interest / 100);
    setTotalAmount(interest / 100 + principal);
  };
  return (
    <Box className="color">
      <Grid container>
        <Grid item xs={6}>
          <Paper
            elevation={4}
            style={{
              margin: 80,

              width: 500,
              hight: 300,
              borderRadius: 5,
              background: "white",
            }}
          >
            <Grid container style={{ margin: 20 }}>
              <Grid item xs={6}>
                <TextField
                  id="standard-basic"
                  label="Principal($)"
                  variant="standard"
                  className="txt"
                  onChange={(event) => setPrincipal(Number(event.target.value))}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="standard-basic"
                  label="Rate"
                  value={rate}
                  variant="standard"
                  onChange={(event) => setRate(Number(event.target.value))}
                />
              </Grid>
            </Grid>
            <Grid container style={{ margin: 20 }}>
              <Grid item xs={6}>
                <TextField
                  id="standard-basic"
                  label="Time"
                  variant="standard"
                  value={time}
                  onChange={(event) => setTime(Number(event.target.value))}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl variant="standard">
                  <InputLabel htmlFor="component-simple"></InputLabel>
                  <Select
                    label="year"
                    onChange={selectHandler}
                    value={timeFrame}
                  >
                    <MenuItem value="year">year</MenuItem>
                    <MenuItem value="month">month</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item>
                <Button
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    background: "green",
                    color: "white",
                    marginLeft: 200,
                  }}
                  onClick={result}
                >
                  calculate
                </Button>
              </Grid>
            </Grid>

            <Grid container>
              <List
                sx={{ width: "100%", maxWidth: 360 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                style={{ background: "#72ffb4", margin: 20 }}
              >
                <ListItem>
                  <ListItemText id="princepal" primary="Principal Amount :" />
                  <p>{principal}</p>
                </ListItem>
                <ListItem>
                  <ListItemText id="total" primary="Total Interest :" />
                  <p>{interest}</p>
                </ListItem>
                <ListItem>
                  <ListItemText id="t amount" primary="Total Amount :" />
                  <p>{totalAmount}</p>
                </ListItem>
              </List>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Box style={{ marginTop: 120, marginLeft: -90 }}>
            <typography style={{ color: "white", fontSize: 75 }}>
              SIMPLE INTEREST
            </typography>
            <p>
              {" "}
              <typography style={{ fontSize: 95 }}>CALCULATOR</typography>
            </p>
            <div style={{ background: "white", width: 550, height: 50 }}>
              <h3 style={{ marginLeft: 10, fontSize: 40 }}>
                HTML,CSS & REACT.JS
              </h3>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
