var db = require("../../models");

module.exports = function (app) {

    app.get("/api/location", function (req, res) {
        db.Location.findAll({}).then(function (dbPost) {
            res.json(dbPost);
        });
    });

    app.get("/api/location/:city", function (req, res) {
        db.Location.findOne({
            where: {
                name: req.params.city
            }
        }).then(function (dbPost) {
            res.json(dbPost);
        });

    });

    app.post("/api/location", function (req, res) {
        db.Location.create(req.body).then(function (dbPost) {
            res.json(dbPost);
        });
    });
};
