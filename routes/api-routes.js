var db = require("../models");

module.exports = function (app) {

    app.get("/api/posts/locationId", function (req, res) {
        db.Post.findAll({
            where: {
                LocationId: req.params.LocationId
            }
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });

    app.get("/api/posts/:locationId/category/:categoryId", function (req, res) {
        db.Post.findAll({
            where: {
                LocationId: req.params.LocationId,
                CategoryId: req.params.categoryId
            }
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });

    app.get("/api/posts/:id", function (req, res) {
        db.Post.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbPost) {
            res.json(dbPost);
        });

    });

    app.post("/api/posts", function (req, res) {
        db.Post.create(req.body).then(function (dbPost) {
            res.json(dbPost);
        });
    });

    app.delete("/api/posts/:id", function (req, res) {
        db.Post.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });

    app.put("/api/posts", function (req, res) {
        db.Post.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });
};
