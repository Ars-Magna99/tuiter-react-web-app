import React from "react";
import {updateTuitThunk,createTuitThunk,deleteTuitThunk, findTuitsThunk} from "../../services/tuits-thunks.js";
import {useDispatch,useSelector} from "react-redux";

const TuitStats = (
{
   tuit = {
    "userName": "SpaceX",
    "avatarIcon": "spacex.jpeg",
    "time": "2h",
    "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
    "image": "spacex.png",
    "liked": true,
    "replies": 123,
    "retuits": 432,
    "likes": 2345,
    "handle": "@spacex",
    "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being."
   }
}
) => {
let heart_icon;
if (tuit.liked){
  heart_icon = <i className="fa-solid fa-heart fa-lg" style = {{"color":"red"}}></i>;
} else{
  heart_icon = <i className="far fa-heart fa-lg"></i>;
}
 const dispatch = useDispatch();

return(
<div className = "row pt-3 pb-3" style = {{position:"relative",left:50,width:500}}>
     <div className = "col">
     <a href = "#" className = "text-decoration-none text-secondary">
       <i className="far fa-comment fa-lg text-secondary"></i>
       <span className = ""> {tuit.replies}</span>
     </a>
     </div>

     <div className = "col">
       <a href = "#" className = "text-decoration-none text-secondary">
         <i className="fas fa-retweet fa-lg"></i>
         <span className = ""> {tuit.retuits}</span>
       </a>
     </div>

     <div className = "col">
        Likes: {tuit.likes}
        <i onClick={() => dispatch(updateTuitThunk({
          ...tuit,
          likes: tuit.likes + 1
        }))} className="bi bi-heart-fill me-2 text-danger"></i>
     </div>

      <div className = "col">
         Dislikes: {tuit.dislikes}
         <i onClick={() => dispatch(updateTuitThunk({
           ...tuit,
           Dislikes: tuit.dislikes + 1
         }))} className="bi bi-hand-index-thumb-fill me-2 text-dark"></i>
      </div>

     <div className = "col">
      <a href = "#" className = "text-decoration-none text-secondary">
        <i className="fa-solid fa-arrow-up-from-bracket fa-xl"></i>
      </a>
     </div>
  </div>

);
};

export default TuitStats;

