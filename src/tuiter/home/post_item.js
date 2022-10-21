import React from "react";

const PostItem = (
 {
   post = {
    '_id' : 1,
    'avatarIcon': '../../images/user_icon/musk.jpg', 'time':'23h',
   'userName': 'Elon Musk', 'handle': 'ElonMusk','postText':'Amazing show about <a href = "#" className = "text-decoration-none">@Inspiration4</a> mission!',
   'postImage': '../../images/post_image/inspiration4.webp', 'postTitle':'Countdown: Inspiration4 mission to Space | Netflix Official Site',
   'containsArticle':'1',
    'postSummary':'From training to launch to landing,this all-access docuseries rides along with inspiration4 crew on the first all-civilian orbital space...', 'postLinkAttached':'netflix.com',
   'commentNum': '4.2K', 'retweetNum':'3.5K', 'likeNum':'37.5K'
   }
 }
) => {
 return(
<li className = "group-list-item" style = {{"listStyleType":"none"}}>
 <div className = "row border border-secondary">
  <div className = "row pt-3" >
    <div className = "col-1">
       <img height = "50" className = "float-start rounded-circle" src = {post.avatarIcon}></img>
    </div>
    <div className = "col-6 float-start">
      <div className = "fw-bolder">
        <a href = "#" className = "text-dark" style = {{"textDecoration":"none"}}> {post.userName}
          <span className="fa-stack wd-certified-icon">
                <i className="fas fa-certificate fa-stack-2x"></i>
                <i className="fas fa-check fa-stack-1x text-white"></i>
          </span>
        </a>
        <span className = "text-secondary">
          @ {post.handle} - {post.time}
        </span>
      </div>
    </div>
    <div className = "col">
      <a href = "#" >
        <i className="fas fa-ellipsis-h text-decoration-none text-white float-end"></i>
      </a>
    </div>
  </div>
  <div className = "row">
    <div className = "col-1"></div>
    <div className = "col">{post.postText}</div>
    <div className = "col-2"></div>
  </div>
   <div className = "row">
    <div className = "row">
    <img src = {post.postImage} className="border border-secondary rounded" style = {{position:"relative",top:0, left:50,width:500}}></img>
    </div>
    <div className = {post.containsArticle === '1'? " border border-secondary rounded":"rounded"} style = {{position:"relative",left:50,width:500,borderRadius:10}}>
      <h5>{post.postTitle}</h5>
      {post.postSummary ? post.postSummary:''}
      <i className = {post.postLinkAttached !=='' ? "fa-solid fa-link":''}></i>
      <a href = {`${post.postLinkAttached}`} >{post.postLinkAttached}</a>
    </div>
   </div>
   <div className = "row pt-3 pb-3" style = {{position:"relative",left:50,width:500}}>
     <div className = "col">
     <a href = "#" className = "text-decoration-none text-secondary">
       <i className="far fa-comment fa-lg text-secondary"></i>
       <span className = ""> {post.commentNum}</span>
     </a>
     </div>

     <div className = "col">
       <a href = "#" className = "text-decoration-none text-secondary">
         <i className="fas fa-retweet fa-lg"></i>
         <span className = ""> {post.retweetNum}</span>
       </a>
     </div>

     <div className = "col">
       <a href = "#" className = "text-decoration-none text-secondary">
         <i className="far fa-heart fa-lg"></i>
         <span className = ""> {post.likeNum}</span>
       </a>
     </div>


     <div className = "col">
      <a href = "#" className = "text-decoration-none text-secondary">
        <i className="fa-solid fa-arrow-up-from-bracket fa-xl"></i>
      </a>
     </div>
  </div>
  </div>
  </li>
 );
};
export default PostItem;