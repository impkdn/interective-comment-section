console.log("Hi");
function addComment(ev) {
  var totalReplySection2 = document.createElement("div");
  totalReplySection2.className = "total-reply-section";
  var countingSection = document.createElement("div");
  countingSection.className = "counting-section";
  var positiveBtn = document.createElement("button");
  positiveBtn.className = "positive-btn";
  // positiveBtn.innerHTML = "Plus";
  var negetiveBtn = document.createElement("button");
  negetiveBtn.className = "negetive-btn";
  // negetiveBtn.innerHTML = "Minus";
  var userTotalLikes = document.createElement("div");
  userTotalLikes.innerHTML = 0;
  countingSection.append(positiveBtn, userTotalLikes, negetiveBtn);

  // user comments section
  var userReplySec = document.createElement("div");
  userReplySec.className = "user-reply-sec";
  var userDetails = document.createElement("div");
  userDetails.className = "user-details";
  var userReply = document.createElement("div");
  userReply.className = "user-reply";
  // user image and user name and time and rply button
  var userNameImg = document.createElement("div");
  userNameImg.className = "user-name-image";

  var userImg = new Image();
  var imgLink = data.currentUser.image.png;
  userImg.src = imgLink;

  var userName = document.createElement("span");
  userName.className = "user-name";
  userName.append(data.currentUser.userName);

  var timePassed = document.createElement("span");
  timePassed.className = "time-passed";

  timePassed.innerHTML = 'Just Now';

  var replyButton = document.createElement("button");
  replyButton.className = "reply-button";
  replyButton.innerHTML = "Reply";
//   replyButton.id = reply[j].id;
  // var isClicked = false;
  // var isClicked = false;

  // user comments

//   var userReply = document.createElement("div");
  userComment.className = "user-comment";
  userReply.append(reply[j].content);
  userNameImg.append(userImg, userName, timePassed);
  userDetails.append(userNameImg, replyButton);
  userReplySec.append(userDetails, userReply);
  totalReplySection2.append(countingSection, userReplySec);
  // totalCommentSection2.append(totalReplySection2);
  wrapper.append(totalReplySection2);
}

function hasClass(elem, className) {
  return elem.className.split(" ").indexOf(className) > -1;
}
var wrapper = document.getElementById("wrapper");
wrapper.className = "main-wrapper";

$(document).ready(function () {
  $.ajax({
    url: "./data.json",

    success: function (data) {
      var comments = data.comments;
      // Time elapsed calculator
      // function timeElapsed(params) {

      // }

      for (let i = 0; i < comments.length; i++) {
        var totalCommentSection2 = document.createElement("div");
        totalCommentSection2.className = "total-comment-section";

        var countingSection = document.createElement("div");
        countingSection.className = "counting-section";
        var positiveBtn = document.createElement("button");
        positiveBtn.className = "positive-btn";
        // positiveBtn.innerHTML = "Plus";
        var negetiveBtn = document.createElement("button");
        negetiveBtn.className = "negetive-btn";
        // negetiveBtn.innerHTML = "Minus";
        var userTotalLikes = document.createElement("div");
        userTotalLikes.innerHTML = comments[i].score;
        countingSection.append(positiveBtn, userTotalLikes, negetiveBtn);

        // user comments section
        var userCommentSec = document.createElement("div");
        userCommentSec.className = "user-comment-sec";
        var userDetails = document.createElement("div");
        userDetails.className = "user-details";
        var userComment = document.createElement("div");
        userComment.className = "user-comment";
        // user image and user name and time and rply button
        var userNameImg = document.createElement("div");
        userNameImg.className = "user-name-image";

        var userImg = new Image();
        var imgLink = comments[i].user.image.png;
        userImg.src = imgLink;

        var userName = document.createElement("span");
        userName.className = "user-name";
        userName.append(comments[i].user.username);

        var timePassed = document.createElement("span");
        timePassed.className = "time-passed";
        timePassed.append(comments[i].createdAt);

        var replyButton = document.createElement("button");
        replyButton.className = "reply-button";
        replyButton.innerHTML = "Reply";
        // replyButton.id = comments[i].id;
        // var isClicked = false;

        // user comments

        var userComment = document.createElement("div");
        userComment.className = "user-comment";
        userComment.append(comments[i].content);
        var reply = comments[i].replies;
        console.log(reply);

        userNameImg.append(userImg, userName, timePassed);
        userDetails.append(userNameImg, replyButton);

        userCommentSec.append(userDetails, userComment);

        totalCommentSection2.append(countingSection, userCommentSec);
        var wrapper = document.getElementById("wrapper");
        wrapper.append(totalCommentSection2);

        if (reply != "") {
          // var replies = document.createElement("div");
          // let isClicked = false;

          for (let j = 0; j < comments[i].replies.length; j++) {
            var totalReplySection2 = document.createElement("div");
            totalReplySection2.className = "total-reply-section";
            var countingSection = document.createElement("div");
            countingSection.className = "counting-section";
            var positiveBtn = document.createElement("button");
            positiveBtn.className = "positive-btn";
            // positiveBtn.innerHTML = "Plus";
            var negetiveBtn = document.createElement("button");
            negetiveBtn.className = "negetive-btn";
            // negetiveBtn.innerHTML = "Minus";
            var userTotalLikes = document.createElement("div");
            userTotalLikes.innerHTML = reply[j].score;
            countingSection.append(positiveBtn, userTotalLikes, negetiveBtn);

            // user comments section
            var userReplySec = document.createElement("div");
            userReplySec.className = "user-reply-sec";
            var userDetails = document.createElement("div");
            userDetails.className = "user-details";
            var userReply = document.createElement("div");
            userReply.className = "user-reply";
            // user image and user name and time and rply button
            var userNameImg = document.createElement("div");
            userNameImg.className = "user-name-image";

            var userImg = new Image();
            var imgLink = reply[j].user.image.png;
            userImg.src = imgLink;

            var userName = document.createElement("span");
            userName.className = "user-name";
            userName.append(reply[j].user.username);

            var timePassed = document.createElement("span");
            timePassed.className = "time-passed";
            timePassed.append(reply[j].createdAt);

            var replyButton = document.createElement("button");
            replyButton.className = "reply-button";
            replyButton.innerHTML = "Reply";
            replyButton.id = reply[j].id;
            // var isClicked = false;
            // var isClicked = false;

            // user comments
            

            var userReply = document.createElement("div");
            userComment.className = "user-comment";
            userReply.append(reply[j].content);
            userNameImg.append(userImg, userName, timePassed);
            userDetails.append(userNameImg, replyButton);
            userReplySec.append(userDetails, userReply);
            totalReplySection2.append(countingSection, userReplySec);
            // totalCommentSection2.append(totalReplySection2);
            wrapper.append(totalReplySection2);
          }
        }
      }
    },
  });
});


wrapper.addEventListener("click", function (e) {
  if (hasClass(e.target, "reply-button")) {
    console.log("hi");
    var parentDiv = e.target.parentElement;
    var secondParent = parentDiv.parentElement.parentElement;
    console.log(secondParent.className);
    var wrapdiv = document.createElement("div");
    var textArea = document.createElement("textarea");
    textArea.style.marginRight = "20px";
    textArea.className = "reply-text";
    const addButton = document.createElement("button");
    addButton.className = "addReply";
    addButton.innerHTML = "Add";
    const cancelButton = document.createElement("button");
    cancelButton.innerHTML = "Cancel";
    cancelButton.className = "cancelReply";
    wrapdiv.append(textArea, addButton, cancelButton);
    secondParent.appendChild(wrapdiv);

    // var textDiv = document.getElementById(comments[i].id);
    // textDiv.appendChild(textArea);
    // totalCommentSection2.append(textArea)

    // wrapper.appendChild(textArea);

    // var addComment = document.createElement('button');
    // addComment.className = 'add-comment';
    // addComment.addEventListener('click', function () {
    // var newText = document.createElement('p');
    // newText.className = 'new-text';
    // newText.append(textArea.value);

    // })
  } else if ((e.target, "addReply")) {
  }
});


function cencelWork (e) {
  
}