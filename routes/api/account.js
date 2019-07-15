var router = require("express").Router();
var account = require("../../controllers/account-controller");

// Matches with "/api/account"
router.route("/")
  .get(account.find)
  .get(account.count)
  .post(account.create)
  .put(account.update)
  .delete(account.delete);

module.exports = router;