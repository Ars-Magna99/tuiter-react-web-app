import React from "react";
import TuitStats from "./TuitStats.js"
import {useDispatch} from "react-redux";
import {createTuit,deleteTuit} from "../tuits/tuits-reducer";

const TuitItem = (
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
let tuitImage;
if(tuit.hasImage){
  tuitImage = <img src = {tuit.image} className="border border-secondary rounded" style = {{position:"relative",top:0, left:50,width:500}}></img>;
} else{
  tuitImage = <></>
};

const dispatch = useDispatch();

const deleteTuitHandler = (id) => {
  dispatch(deleteTuit(id));
}
 return(
<li className = "group-list-item" style = {{"listStyleType":"none"}}>
 <div className = "row border border-secondary">
  <div className = "row pt-3" >
    <div className = "col-1">
       <img height = "50" className = "float-start rounded-circle" src = {tuit.avatarIcon}></img>
    </div>
    <div className = "col-6 float-start">
      <div className = "fw-bolder">
        <a href = "#" className = "text-dark" style = {{"textDecoration":"none"}}> {tuit.userName}
          <span className="fa-stack wd-certified-icon">
                <i className="fas fa-certificate fa-stack-2x text-primary"></i>
                <i className="fas fa-check fa-stack-1x text-white"></i>
          </span>
        </a>
        <span className = "text-secondary">
          {tuit.handle} - {tuit.time}
        </span>
      </div>
    </div>
    <div className = "col">
      <a href = "#" >
        <i className="fas fa-ellipsis-h text-decoration-none text-white float-end"></i>
      </a>
      <i className="bi bi-x-lg float-end"
                        onClick={() => deleteTuitHandler(tuit._id)}></i>
    </div>
  </div>
  <div className = "row">
    <div className = "col-1"></div>
    <div className = "col">{tuit.tuit}</div>
    <div className = "col-2"></div>
  </div>
   <div className = "row">
      <div className = "row">
      {tuitImage}
      </div>
   </div>
    <TuitStats tuit = {tuit}/>
   </div>
  </li>
 );
};
export default TuitItem;