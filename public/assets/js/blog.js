$(document).ready(function(){
    var postContainer = $(".post-container");

function getPosts(category){
    var categoryString = category || "";

    if (categoryString) {
        categoryString = "/category/" + categoryString;
      }
      $.get("/api/posts" + categoryString, function(data) {
        console.log("Posts", data);
        posts = data;
        if (!posts || !posts.length) {
          displayEmpty();
        }
        else {
          initializeRows();
        }
      });
}

function initializeRows(){
    postContainer.empty();

    var postsToAdd = [];
    for (var i = 0; i < posts.length; i++) {
      postsToAdd.push(createNewRow(posts[i]));
    }

    blogContainer.append(postsToAdd);
};

function createNewRow(post){
    var newPostCard = $("<div>");
    newPostCard.addClass("card");
    var newPostCardHeading = $("<div>");
    newPostCardHeading.addClass("card-header");
    var deleteBtn = $("<button>");
    deleteBtn.text("Upvote");
    deleteBtn.addClass("upvote btn btn-primary");


}

getPosts();

});