const express = require("express");
const router = express.Router();

//6: generate the next winner - who is next?
router.post("/", (req, res, next) => {
  const jumplings = res.locals.jumplingData;
  const history = res.locals.jumplingHistory;
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
router.get("/", (req, res) => {
  const history = res.locals.jumplingHistory;
  res.status(200).send(history);
});

module.exports = router;
