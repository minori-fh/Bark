var db = require("../models");

module.exports = {
    findAllLocation: function (req, res) {
        db.Post.findAll({
            where: {
                city: req.params.city
            },
            include: [db.Blogger]
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    },
    findAllCategory: function (req, res) {
        db.Post.findAll({
            where: {
                city: req.params.city,
                CategoryId: req.params.categoryId
            },
            include: [db.Blogger]
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    },
    getOne: function (req, res) {
        db.Post.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Blogger]
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    },
    create: function (req, res) {
        var bloggerID = req.session.passport.user;
        console.log(req.body)
        db.Post.create({
            title: req.body.title,
            body: req.body.body,
            image: req.body.image,
            city: req.body.city,
            CategoryId: parseInt(req.body.CategoryId),
            BloggerUuid: bloggerID
        }, {
                include: [db.Blogger]
            })
            .then(function (newPost) {
                console.log(newPost)
            })
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
            },
            include: [db.Blogger]
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    },
    findAllPosts: function (req, res) {
        var bloggerID = req.session.passport.user;
        db.Post.findAll({
            where: {
                BloggerUuid: bloggerID
            },
            include: [db.Blogger]
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    },
    searchAllPosts: function (req, res){
        db.Post.findAll({
            where: {

            }
        })
    }
};

