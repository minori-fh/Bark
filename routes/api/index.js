var router = require("express").Router();

var userRoutes = require("./user");
var authRoutes = require("./auth");
var accountRoutes = require("./account");

// ../api/...
router.use("/user", userRoutes);
router.use("/auth", authRoutes);
router.use("/account", accountRoutes);

module.exports = router;