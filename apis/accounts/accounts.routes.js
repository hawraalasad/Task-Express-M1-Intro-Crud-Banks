const express = require("express");
const {
  deleteAccount,
  createAccount,
  getAllAccounts,
  updateAccount,
} = require("./accounts.controller");
const accounts = require("../../accounts");
const accountRouter = express.Router();

accountRouter.get("/accounts", getAllAccounts);
accountRouter.post("/accounts/create", createAccount);

accountRouter.delete("/accounts/:id", deleteAccount);

accountRouter.put("/accounts/:accountId", updateAccount);

accountRouter.get("/", (req, res) => {
  return res.json(accounts);
});
module.exports = accountRouter;
