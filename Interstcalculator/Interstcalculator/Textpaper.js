import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const TextQuestion = [
  {
    Q: "1: Javascript is a _____ language.",
    options: [
      "1.Programming",

      "2.Application",

      "3.Scripting",

      "4.None of the above",
    ],
    ans:"scripting",
  },
  {
    Q: "2: JavaScript is a _____ Side Scripting Language.",
    options: ["1.Server", "2.Browser", "3.ISP", "4.None of the above"],
    ans:"Browser",
  },
  {
    Q: "3: Which of the following purpose, JavaScript is designed for ?",
    options: [
      "1.To Execute Query Related to DB on Server",

      "2.To Style HTML Pages",

      "3.To Perform Server Side Scripting Opertion",

      "4.To add interactivity to HTML Pages",
    ],
    ans:"To add interactivity to HTML Pages "
  },
  {
    Q: "4: JavaScript can be written",
    options: [
      "1.directly on the Server Script",

      "2.directly into HTML pages",

      "3.All of the above",

      "4.None of the above",
    ],
    ans:"All of the above"
    
  },
  {
    Q: "5: JavaScript code is written inside file having extension",
    options: ["1.jvs", "2. .js", "3..jsc", "4.javascript"],
    ans:".js"
  },
];
export default function Text() {
  const [question, setQuestion] = useState(0);
const [ans, setAns] = useState();
const[score,setscore] = useState(0);
  const backHandller = () => {
    if (question === 0) {
      setQuestion(TextQuestion.length - 1);
    } else {
      setQuestion(question - 1);
    }
  };
  const nextHandller = () => {
    if (question === TextQuestion.length - 1) {
      setQuestion(alert("you ae end of the Question"));
    } else {
      setQuestion(question + 1);
    }
  };
  const correctAns = (event)=>{
    setAns(event.target.value);
    if(ans===ans){
setscore(+1);
    }

  }

  return (
    <Box>
      <List sx={{ margin: "20px  280px auto " }}>
        <ListItem>
          <ListItemText
            primary={TextQuestion[question].Q}
            secondary={
              <React.Fragment>
                {TextQuestion[question].options.map((event, i) => (
                  <Typography onClick={correctAns}>{event}</Typography>
                ))}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
      <Grid container>
        <Grid item xs={6}>
          <Grid container>
            <Typography sx={{ marginTop: 2 }}>Back </Typography>
            <KeyboardArrowLeft sx={{ fontSize: 50 }} onClick={backHandller} />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Typography sx={{ marginTop: 2 }}>NEXT </Typography>
            <KeyboardArrowRight sx={{ fontSize: 50 }} onClick={nextHandller} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
