const express = require("express");
const app = express();
const accounts = require("./accounts");
const accountRouter = require("./apis/accounts/accounts.routes");
const PORT = 8000;
//route
app.use(express.json());
app.use("", accountRouter);

app.listen(PORT, () => {
  console.log("Running");
});
