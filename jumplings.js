const express = require("express");
const router = express.Router();

//1: get jumplings
router.get("/", (req, res) => {
  const jumplings = res.locals.jumplingData;
  res.status(200).send(jumplings);
});

//2: add one jumpling
router.post("/", (req, res) => {
  const jumplings = res.locals.jumplingData;
  const nextPerson = req.body;
  jumplings.push(nextPerson);
  res.status(201).send(nextPerson);
});

//3: get jumpling with id
router.get("/:id", (req, res) => {
  const jumplings = res.locals.jumplingData;
  const targetJumplingId = req.params.id;
  const retrieveJumpling = jumplings.filter(jumpling => {
    return String(jumpling.id) === targetJumplingId;
  });
  //const message = `you have requested for user ${retreiveJumpling.name} of id: ${req.params.id}`;
  res.status(200).send(retrieveJumpling);
});

//4: update jumpling with id (if id matches, replace jumpling )
router.put("/:id", (req, res) => {
  const jumplings = res.locals.jumplingData;
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
router.delete("/:id", (req, res) => {
  const jumplings = res.locals.jumplingData;
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

module.exports = router;
