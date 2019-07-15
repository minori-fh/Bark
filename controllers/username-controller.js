var db = require("../models");

module.exports = {
    find: function (req, res) {
        db.Username.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (response) {
            console.log("got here");
            res.json(response);
        });
    },
    create: function (req, res) {
        db.Username.create(req.body).then(function (response) {
            res.json(response);
        });
    }
};