var router = require("express").Router();
var location = require("../../controllers/location-controller");

router.route("/")
    .get(location.get)
    .post(location.create);

router.route("/:city")
    .get(location.getOne);

module.exports = router;