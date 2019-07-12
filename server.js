var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

require("./routes/api/location-api.js")(app);
require("./routes/api/post-api.js")(app);
require("./routes/view/html-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
