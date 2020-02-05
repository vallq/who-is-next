const express = require("express");
const app = express();
const apiEndpoints = require("./apiEndpoints");
const presenterRouter = require("./presenters");
const jumplingsRouter = require("./jumplings");
const jumplings = [
    { id: 1, name: "Luigi" },
    { id: 3, name: "Mario" }
  ];
  
const history = [];

app.use(express.json());

app.use("/jumplings/presenters", (req, res, next) => {
    res.locals.jumplingData = jumplings;
    res.locals.jumplingHistory = history;
    next();
}, presenterRouter);
app.use("/jumplings", (req, res, next) => {
    res.locals.jumplingData = jumplings;
    res.locals.jumplingHistory = history;
    next();
}, jumplingsRouter);

//0: get API endpoints
app.get("/", (req, res) => {
  res.send(apiEndpoints);
});

module.exports = app;
