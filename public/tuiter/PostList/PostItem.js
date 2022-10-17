export default function PostItem(post){

return (`
<li class = "group-list-item" style = "list-style-type: none">
 <div class = "row border border-secondary">
  <div class = "row pt-3" >
    <div class = "col-1">
      <img src = ${post.avatarIcon} height = 50px class = "float-start rounded-circle">
    </div>
    <div class = "col-6 float-start">
      <div class = "fw-bolder">
        <a href = "#" class = "text-white" style = "text-decoration:none">${post.userName}
          <span class="fa-stack wd-certified-icon">
                <i class="fas fa-certificate fa-stack-2x"></i>
                <i class="fas fa-check fa-stack-1x text-dark"></i>
          </span>
        </a>
        <span class = "text-secondary">
          @ ${post.handle}
          - ${post.time}
        </span>
      </div>
    </div>
    <div class = "col">
      <a href = "#" >
        <i class="fas fa-ellipsis-h text-decoration-none text-white float-end"></i>
      </a>
    </div>
  </div>
  <!-- The row that contains the text of post -->
  <div class = "row">
    <div class = "col-1"></div>
    <div class = "col">${post.postText}</div>
    <div class = "col-2"></div>
  </div>
  <!-- The row that contains the image and summary-->
   <div class = "row">
    <div class = "row">
    <img src = ${post.postImage} class="border border-secondary rounded" style = "position:relative; left:50px;width:500px">
    </div>
    ${post.containsArticle === '1'? `<div class = "border border-secondary rounded" style = "position:relative; left:50px;width:500px;">`: `<div class = "rounded" style = "position:relative; left:50px;width:500px;">`}
      <h6>${post.postTitle}</h6>
      ${post.postSummary ? `${post.postSummary}`:``}

      ${post.postLinkAttached ? `<i class="fa-solid fa-link"></i>${post.postLinkAttached}`:``}
    </div>
   </div>
  <!-- The row that contains icons and comments-->
   <div class = "row pt-3 pb-3" style = "position:relative; left:50px;width:500px;">
     <div class = "col">
     <a href = "#" class = "text-decoration-none text-secondary">
       <i class="far fa-comment fa-lg text-secondary"></i>
       <span class = "">${post.commentNum}</span>
     </a>
     </div>

     <div class = "col">
       <a href = "#" class = "text-decoration-none text-secondary">
         <i class="fas fa-retweet fa-lg"></i>
         <span class = "">${post.retweetNum}</span>
       </a>
     </div>

     <div class = "col">
       <a href = "#" class = "text-decoration-none text-secondary">
         <i class="far fa-heart fa-lg"></i>
         <span class = "">${post.likeNum}</span>
       </a>
     </div>


     <div class = "col">
      <a href = "#" class = "text-decoration-none text-secondary">
        <i class="fa-solid fa-arrow-up-from-bracket fa-xl"></i>
      </a>
     </div>
  </div>
  </li>
`
);
}