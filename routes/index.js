var router = require("express").Router();
var path = require("path");


var apiRoutes = require("./api");
var viewRoutes = require("./view/html-routes");

// api routes
router.use('/api', apiRoutes);

// html routes
router.use('/', viewRoutes);


// catch all
router.use( function(req, res){ res.sendFile(path.join(__dirname, "/../public/404.html"))});

module.exports = router;