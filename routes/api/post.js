var router = require("express").Router();
var post = require("../../controllers/post-controller");


router.route("/")
    .post(post.create);

router.route("/:locationId")
    .get(post.findAllLocation);

router.route("/:postId")
    .get(post.getOne)
    .put(post.update)
    .delete(post.remove);

router.route("/:locationId/category/:categoryId")
    .get(post.findAllCategory);

router.route("/:city")
    .get(post.getOne);

module.exports = router;