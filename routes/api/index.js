var router = require("express").Router();

var userRoutes = require("./user");
var authRoutes = require("./auth");
var accountRoutes = require("./account");
var postRoutes = require("./post");

// ../api/...
router.use("/user", userRoutes);
router.use("/auth", authRoutes);
router.use("/account", accountRoutes);
router.use("/post", postRoutes);

module.exports = router;