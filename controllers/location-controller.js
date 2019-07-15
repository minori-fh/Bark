var db = require("../models");

module.exports = {
    get: function (req, res) {
        db.Location.findAll({}).then(function (response) {
            res.json(response);
        });
    },
    getOne: function (req, res) {
        db.Location.findOne({
            where: {
                area: req.params.city
            }
        }).then(function (response) {
            res.json(response);
        });
    },
    create: function (req, res) {
        db.Location.create(req.body).then(function (response) {
            res.json(response);
        });
    }
};