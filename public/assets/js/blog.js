$(document).ready(function () {
  var postContainer = $(".post-container");

  $(document).on("click", ".post", function  (){
    console.log("sup")
  })
  function getPosts(category) {
    var categoryString = category || "";

    if (categoryString) {
      categoryString = "/category/" + categoryString;
    }
    // $.get("/api/posts" + categoryString, function (data) {
    //   console.log("Posts", data);
    //   posts = data;
    //   if (!posts || !posts.length) {
    //     displayEmpty();
    //   }
    //   else {
    //     initializeRows(posts);
    //   }
    // });
  }

  function initializeRows(posts) {
    postContainer.empty();

    var postsToAdd = [];
    for (var i = 0; i < posts.length; i++) {
      postsToAdd.push(createNewRow(posts[i]));
    }

    postContainer.append(postsToAdd);
  };


  function createNewRow(post) {
    //CREATE NEW post card
    var newPostCard = $("<div>");
    newPostCard.addClass("card");
    //CREATE NEW post card heading
    var newPostCardHeading = $("<div>");
    newPostCardHeading.addClass("card-header");
    //CREATE NEW upvote button
    var upvoteBtn = $("<button>");
    upvoteBtn.text("Upvote");
    upvoteBtn.addClass("upvote btn btn-primary");
    //CREATE NEW post title
    var newPostTitle = $("<h2>");
    //CREATE NEW post date
    var newPostDate = $("<small>");
    //CREATE NEW post category
    var newPostCategory = $("<h5>");
    newPostCategory.text(post.category); //grab category from post
    //CREATE NEW card body
    var newPostCardBody = $("<div>");
    newPostCardBody.addClass("card-body");
    //CREATE NEW post body
    var newPostBody = $("<p>");


    newPostTitle.text(post.title + " "); //grab title from post
    newPostBody.text(post.body); //grab body from post
    // need to make fomatted date with moments
    newPostDate.text(post.createdAt); //grab created at from post
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