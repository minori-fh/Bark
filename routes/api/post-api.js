var db = require("../../models");
var router = require("express").Router();

router.get("/api/posts/:locationId", function (req, res) {
    db.Post.findAll({
        where: {
            LocationId: req.params.locationId
        }
    }).then(function (dbPost) {
        res.json(dbPost);
    });
});

router.get("/api/posts/:locationId/category/:categoryId", function (req, res) {
    db.Post.findAll({
        where: {
            LocationId: req.params.locationId,
            CategoryId: req.params.categoryId
        }
    }).then(function (dbPost) {
        res.json(dbPost);
    });
});

router.get("/api/posts/:id", function (req, res) {
    db.Post.findOne({
        where: {
            id: req.params.id
        }
    }).then(function (dbPost) {
        res.json(dbPost);
    });

});

router.post("/api/posts", function (req, res) {
    db.Post.create(req.body).then(function (dbPost) {
        res.json(dbPost);
    });
});

router.delete("/api/posts/:id", function (req, res) {
    db.Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (dbPost) {
        res.json(dbPost);
    });
});

router.put("/api/posts", function (req, res) {
    db.Post.update(req.body, {
        where: {
            id: req.body.id
        }
    }).then(function (dbPost) {
        res.json(dbPost);
    });
});

module.exports = router;
