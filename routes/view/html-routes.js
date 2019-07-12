var router = require("express").Router();
var path = require("path");

// module.exports = function (app) {

//     app.get("/", function (req, res) {
//         res.sendFile(path.join(__dirname, "./public/login.html"))
//     })

// }
// ---------------------------

console.log("asdf")

router.get("/", function(req, res){
    console.log("minori was here!")
    var auth = req.isAuthenticated();
    console.log("hi hi");

    if(auth) {
        res.sendFile(path.join(__dirname, "/../../public/home.html"));
        console.log("auth")
    } else {
        res.sendFile(path.join(__dirname, "/../../public/login.html"));
        console.log("else")
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