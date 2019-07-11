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
    var upvoteBtn = $("<button>");
    upvoteBtn.text("Upvote");
    upvoteBtn.addClass("upvote btn btn-primary");

    var newPostTitle = $("<h2>");
    var newPostDate = $("<small>");
    var newPostCategory = $("<h5>");
    newPostCategory.text(post.category);

    var newPostCardBody = $("<div>");
    newPostCardBody.addClass("card-body");
    var newPostBody = $("<p>");
    newPostTitle.text(post.title + " ");
    newPostBody.text(post.body);

    // need to make fomatted date with moments
    newPostDate.text(post.createdAt);
    newPostTitle.append(newPostDate);

    newPostCardHeading.append(upvoteBtn);
    newPostCardHeading.append(newPostTitle);
    newPostCardHeading.append(newPostCategory);
    newPostCardBody.append(newPostBody);
    newPostCard.append(newPostCardHeading);
    newPostCard.append(newPostCardBody);
    newPostCard.data("post", post);
    return newPostCard;


}

getPosts();

});