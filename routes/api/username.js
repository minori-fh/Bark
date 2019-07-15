var router = require("express").Router();
var usernameController = require("../../controllers/username-controller");

// Matches with "/api/user"
router.route("/")
  .post(usernameController.create);

router.route("/:id")
  .get(usernameController.find);

module.exports = router;