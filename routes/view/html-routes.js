var router = require("express").Router();
var path = require("path");

// module.exports = function (app) {

//     app.get("/", function (req, res) {
//         res.sendFile(path.join(__dirname, "./public/login.html"))
//     })

// }
// ---------------------------
router.get("/", function(req, res){
    var auth = req.isAuthenticated();
    console.log("hi hi")
    if(auth) {
        res.sendFile(path.join(__dirname, "/../../public/index.html"));
    } else {
        res.sendFile(path.join(__dirname, "/../../public/login.html"));
    }

});

router.get('/index', function(req, res){
    var auth = req.isAuthenticated();
    console.log("hi")
    if(auth) {
        res.sendFile(path.join(__dirname, "/../../public/index.html"));
    } else {
        res.redirect("/");
    }
})

module.exports = router;