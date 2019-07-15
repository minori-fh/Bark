var router = require("express").Router();
var account = require("../../controllers/account-controller");

// Matches with "/api/account"
router.route("/")
  .get(account.find)
  .post(account.create)
  .put(account.update)
  .delete(account.delete);

router.route("/count")
  .get(account.count);

module.exports = router;