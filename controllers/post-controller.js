var db = require("../models");

module.exports = {
    findAllLocation: function (req, res) {
        db.Post.findAll({
            where: {
                LocationId: req.params.locationId
            }
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    },
    findAllCategory: function (req, res) {
        db.Post.findAll({
            where: {
                LocationId: req.params.locationId,
                CategoryId: req.params.categoryId
            }
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    },
    getOne: function (req, res) {
        db.Post.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    },
    create: function (req, res) {
        db.Post.create(req.body).then(function (dbPost) {
            res.json(dbPost);
        });
    },
    remove: function (req, res) {
        db.Post.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    },
    update: function (req, res) {
        db.Post.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    }
};