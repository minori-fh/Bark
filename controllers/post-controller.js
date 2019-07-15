var db = require("../models");

module.exports = {
    findAllLocation: function (req, res) {
        db.Post.findAll({
            where: {
                city: req.params.city
            }
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    },
    findAllCategory: function (req, res) {
        db.Post.findAll({
            where: {
                city: req.params.city,
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
                id: req.params.postId
            }
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    }
};