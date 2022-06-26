console.log("Hi")


// Like count Increment


var totalLikeComments = document.getElementById('likeComment');
var isClickedPositive = false;
totalLikeComments.addEventListener('click', function (e){
    let valPositive = e.target.value;
    var allComment = document.getElementById('displayTotalComment').innerText;
    
    if (isClickedPositive == false && valPositive == "+") {
        allComment = parseInt(allComment);
        document.getElementById('displayTotalComment').innerText = allComment += 1;
        isClickedPositive = true;
        isClickedNegetive = false; 
        
    }
    
})


// like count decrement

var totalDisLikeComments = document.getElementById('disLikeComment');
var isClickedNegetive = false;
totalDisLikeComments.addEventListener('click', function (e){
    let valPositive = e.target.value;
    if (isClickedNegetive == false && valPositive == "-") {
        var allComment = document.getElementById('displayTotalComment').innerText;
        allComment = parseInt(allComment);
        document.getElementById('displayTotalComment').innerText = allComment -= 1;
       isClickedNegetive = true;
       isClickedPositive = false;

        
    }
    
})

$(document).ready( function (){

    
    $.ajax({
        url : "./data.json",
        success : function (data) {
            // debugger
            console.log(data);
            var comments = data.comments;
            
            console.log(comments);
            // var x = comments[0].id;
            console.log(comments.length);
            for (let i = 0; i <= comments.length; i++) {
                var totalCommentsDiv = document.createElement("div")
                
                
                var totalComments = document.getElementById('displayTotalComment');
                if (comments[i].id == "1") {
                    totalComments.innerHTML = comments[i].score;
                    var uName = comments[i].user.username;
                    var uDetails = document.createElement("p")
                    uDetails.className = "uName";
                    uDetails.innerText = uName;
                    var imgUrl = comments[i].user.image.png;
                    var uImg = new Image;
                    uImg.src = imgUrl;
                    var userImg  = document.createElement('div');

                    userImg.append(uImg, uDetails);
                    
                    var content = comments[i].content;
                    var contentDiv = document.createElement('div')
                    contentDiv.className = "contentDiv";
                    var userDiv = document.getElementById('userCommentSection-parent');
                    contentDiv.innerHTML = content;
                    // userDiv.append(userImg);
                    userDiv.append(userImg,contentDiv);
                    var reply = document.getElementById("replyBtn");
                    let isClicked = false;
                    reply.addEventListener('click', function (){
                        if (isClicked == false) {
                            var replyText = document.createElement("textarea");
                            replyText.className = "userReplyText"
                            let addComment = document.createElement('button');
                            addComment.innerHTML = "Add";
                            let cencelCommment = document.createElement('button');
                            cencelCommment.innerHTML = "Cencel";
                            
                            var content = document.getElementsByClassName('contentDiv');
                            userDiv.append(replyText,addComment,cencelCommment);
                            addComment.addEventListener('click', function () {
                                let addCommentText = document.createElement('div');
                                let newComment =  replyText.value;
                                addCommentText.append(newComment);
                                let deleteComment = document.createElement('button');
                                deleteComment.className = 'deleteButton';
                                deleteComment.innerHTML = "Delete";
                                contentDiv.append(addCommentText,deleteComment);
                                deleteComment.addEventListener("click", function () {
                                    addCommentText.style = "display:none";
                                    deleteComment.style = "display:none";
                                })
                                console.log(newComment);
                                // if (newComment != "") {
                                //     addComment.innerHTML = newComment;
    
                                // }
                            })
                            isClicked = true;
                            cencelCommment.addEventListener('click', function () {
                                replyText.style = "display:none";
                                addComment.style = "display:none";
                                cencelCommment.style = "display:none";
                                return isClicked = false;
                            })
    
    
                            
                        }
                        
                        
                        
                    })
                    
                } 
                // else if (comments[i].id == "2") {
                //     var uName = comments[i].user.username;
                //     var uDetails = document.createElement("p")
                //     uDetails.className = "uName";
                //     uDetails.innerText = uName;
                //     var imgUrl = comments[i].user.image.png;
                //     var uImg = new Image;
                //     uImg.src = imgUrl;
                //     var userImg  = document.getElementById('userId1');
                //     userImg.append(uImg);
                //     userImg.append(uDetails);
                //     var content = comments[i].content;
                //     var contentDiv = document.createElement('div')
                //     contentDiv.className = "contentDiv";
                //     var userDiv = document.getElementById('userCommentSection-parent');
                //     contentDiv.innerHTML = content;
                //     userDiv.append(contentDiv);
                //     var reply = document.getElementById("replyBtn");
                //     let isClicked = false;
                //     reply.addEventListener('click', function (){
                //         if (isClicked == false) {
                //             var replyText = document.createElement("textarea");
                //             replyText.className = "userReplyText"
                //             let addComment = document.createElement('button');
                //             addComment.innerHTML = "Add";
                //             let cencelCommment = document.createElement('button');
                //             cencelCommment.innerHTML = "Cencel";
                            
                //             var content = document.getElementsByClassName('contentDiv');
                //             userDiv.append(replyText,addComment,cencelCommment);
                //             addComment.addEventListener('click', function () {
                //                 let addCommentText = document.createElement('div');
                //                 let newComment =  replyText.value;
                //                 addCommentText.append(newComment);
                //                 let deleteComment = document.createElement('button');
                //                 deleteComment.className = 'deleteButton';
                //                 deleteComment.innerHTML = "Delete";
                //                 contentDiv.append(addCommentText,deleteComment);
                //                 deleteComment.addEventListener("click", function () {
                //                     addCommentText.style = "display:none";
                //                     deleteComment.style = "display:none";
                //                 })
                //                 console.log(newComment);
                //                 // if (newComment != "") {
                //                 //     addComment.innerHTML = newComment;
    
                //                 // }
                //             })
                //             isClicked = true;
                //             cencelCommment.addEventListener('click', function () {
                //                 replyText.style = "display:none";
                //                 addComment.style = "display:none";
                //                 cencelCommment.style = "display:none";
                //                 return isClicked = false;
                //             })
    
    
                            
                //         }
                        
                        
                        
                //     })
                // }
            }

            
            // var cLength = comments.length;
// debugger;
            // for (let index = 0; index < comments.length; index++) {
                
                
            //     var commentInfo = comments[index];
            //     var imgUrl = commentInfo.user.image.webp;
            //     var imge = new Image()
            //     imge.src = imgUrl;
            //     var uname = commentInfo.user.username;
            //     var createdAt = commentInfo.createdAt;
            //     var s = `<span class="uimage"><img src = "${imgUrl}"/></span><span class="uname">${uname}</span><span class="timepassed">${createdAt}</span>`
                // var uname = commentInfo.user.username;
                // $(".userCommentSection").append(s)
                // $(".uimage").append(imge);
                // $(".uname").text(commentInfo.user.username)
                // $(".timepassed").text(commentInfo.createdAt)
                // $(".userComments").text(commentInfo.content)


    
                // var content = comments[0].content;
        
                
                // $(".userInfo").after( function (){
                //     $(".userInfo").html("<div></div>")
                // }

                // )
            // }
            // var id = comments[0].id;
        },
        error : function (error){
            console.log(error)
        }
    })
}
)


