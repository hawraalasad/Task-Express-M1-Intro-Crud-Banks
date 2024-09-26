const accounts = require("../../accounts");

const getAllAccounts = (req, res) => {
  return res.status(200).json({ data: accounts });
};

const createAccount = (req, res) => {
  console.log(req.body);
  let length = accounts.length;
  const newAccount = {
    id: accounts[length - 1].id + 1,
    username: req.body.username,
    funds: req.body.funds,
  };
  accounts.push(newAccount);
  res.status(201).json({
    message: "added account",
    data: accounts,
  });
};

const deleteAccount = (request, response) => {
  const { id } = request.params;
  const updatedAccounts = accounts.filter((account) => {
    if (account.id != id) {
      return true;
    } else {
      return false;
    }
  });
  return response.status(200).json({ data: updatedAccounts });
};

const updateAccount = (request, response) => {
  const { accountId } = request.params;
  const foundAccount = accounts.find((account) => {
    if (account.id == accountId) {
      return true;
    }
  });
  foundAccount.id = request.body.id;
  return response.status(200).json({ data: foundAccount });
};

module.exports = {
  getAllAccounts,
  createAccount,
  deleteAccount,
  updateAccount,
};
