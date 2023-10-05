import React, { useState } from "react";
import { Box, Grid, List, ListItem, ListItemText, Button } from "@mui/material";

import TextField from "@mui/material/TextField";

const currencies = [
  {
    value: "year",
    label: "year",
  },
  {
    value: "month",
    label: "month",
  },
];
export default function Interest() {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(12);
  const [time, setTime] = useState(1);
  const [interest, setInterest] = useState(12);
  const [totalAmount, setTotalAmount] = useState(12);
  const result = () => {
    const interest = principal * rate * time;
    setInterest(interest / 100);
    setTotalAmount(interest / 100 + principal);
  };
  return (
    <Box
      style={{
        border: "1px solid gray",
        background: "#01e26e",
        height: 800,
        width: 700,
      }}
    >
      <h2 style={{marginLeft:80}}>Simple Interest Calculator</h2>
      <Grid
        container
        style={{
          margin: 80,
          border: "1px solid black",
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
            <TextField
              id="outlined-select-currency-native"
              select
              label="Year"
              defaultValue="EUR"
              SelectProps={{
                native: true,
              }}
            >
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
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
      </Grid>
    </Box>
  );
}
