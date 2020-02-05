const PORT = 3000;
const app = require("./app");

app.listen(PORT, () => {
  console.log(`You are on the server on http://localhost:${PORT}`);
});
