const express = require("express");
const app = express();
const accounts = require("./accounts");
//route
app.use(express.json());
app.get("/", (req, res) => {
  return res.json("My name is Hawraa");
});

app.get("/accounts", (req, res) => {
  return res.status(200).json(accounts);
});
app.post("/accounts/create", (req, res) => {
  console.log(req.body);
  const newAccount = {
    id: req.body.id,
    username: req.body.username,
    funds: req.body.funds,
  };
  accounts.push(newAccount);
  res.status(201).json({
    message: "added account",
    data: accounts,
  });
});

app.listen(8000, () => {
  console.log("Running");
});
