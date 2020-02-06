const express = require("express");
const router = express.Router();

//6: generate the next winner - who is next?
router.post("/", (req, res, next) => {
  const jumplings = res.locals.jumplingData;
  const history = res.locals.jumplingHistory;
  if (jumplings.length > 0) {
    const targetIndex = Math.floor(Math.random() * jumplings.length);
    const nextPerson = jumplings[targetIndex];
    console.log(nextPerson);
    history.push(nextPerson);
    res.status(201).send(nextPerson);
  } else {
    const err = new Error("Bad Request: No Jumplings");
    err.code = 400;
    next(err);
  }
});

//7: get history of presenters
router.get("/", (req, res) => {
  const history = res.locals.jumplingHistory;
  res.status(200).send(history);
});

module.exports = router;
