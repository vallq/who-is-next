const express = require("express");
const app = express();
const apiEndpoints = require("./apiEndpoints");

const jumplings = [
  { id: 1, name: "Luigi" },
  { id: 3, name: "Mario" }
];

const history = [];

app.use(express.json());

//0: get API endpoints
app.get("/", (req, res) => {
  res.send(apiEndpoints);
});

//1: get jumplings
app.get("/jumplings", (req, res) => {
  res.status(200).send(jumplings);
});

//2: add one jumpling
app.post("/jumplings", (req, res) => {
  const nextPerson = req.body;
  jumplings.push(nextPerson);
  res.status(201).send(req.body);
});

//3: get jumpling with id
app.get("/jumplings/:id", (req, res) => {
  const targetJumplingId = req.params.id;
  const retrieveJumpling = jumplings.filter(jumpling => {
    return String(jumpling.id) === targetJumplingId;
  });
  //const message = `you have requested for user ${retreiveJumpling.name} of id: ${req.params.id}`;
  res.status(200).send(retrieveJumpling);
});

//4: update jumpling with id (if id matches, replace jumpling )
app.put("/jumplings/:id", (req, res) => {
  const newJumpling = req.body;
  const targetJumplingId = req.params.id;
  const retrieveJumpling = jumplings.filter(jumpling => {
    return String(jumpling.id) === targetJumplingId;
  });
  const findMatch = retrieveJumpling => {
    if (retrieveJumpling) {
      return retrieveJumpling.id;
    }
  };
  const targetIndex = jumplings.findIndex(findMatch);
  jumplings[targetIndex] = newJumpling;
  res.status(200).send(jumplings[targetIndex]);
});

//5: delete jumplings with id
app.delete("/jumplings/:id", (req, res) => {
  const targetJumplingId = req.params.id;
  const retrieveJumpling = jumplings.filter(jumpling => {
    return String(jumpling.id) === targetJumplingId;
  });
  const findMatch = retrieveJumpling => {
    if (retrieveJumpling) {
      return retrieveJumpling.id;
    }
  };
  const targetIndex = jumplings.findIndex(findMatch);
  const removedJumpling = jumplings.splice(targetIndex, 1);
  res.status(200).send(removedJumpling);
});

//6: generate the next winner - who is next?
app.post("/jumplings/presenters", (req, res) => {
    let min = 0;
    let max = jumplings.length;
    const targetIndex = (min, max) => {
      return Math.floor(Math.random() * jumplings.length);
    };
    const nextPerson = jumplings[targetIndex];
    history.push(nextPerson);
    res.status(201).send(nextPerson);
  });
  
  //7: get history of presenters
  app.get("/jumplings/presenters", (req, res) => {
    res.status(200).send(history);
  });  

module.exports = app;
