import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import styles from "./index.css";

const ProfileBoard = (
{
profile = {
  "firstName": "Ziyan", "lastName": "Wang", "handle": "@ziw152","tweetNum":103,
  "profilePicture": "jose.png", 	"bannerPicture": "polyglot.png",
  "bio": "Computer Science Student. Currently looking for SDE interns",
  "website": "youtube.com/webdevtv",
  "location": "Boston, MA",	"dateOfBirth": "7/7/1968",	"dateJoined": "4/2009",
  "followingCount": 340,	"followersCount": 223
}}
) => {


return(
<div className = "container border border-secondary">
    <div className = "col">
    <img className = "img-fluid" src={profile.bannerPicture}></img>
    </div>
     <li className="list-group-item">
        <div className="col-2">
                <img className = "rounded-circle" width = {150} height = {150} src={profile.profilePicture} style = {{"position":"relative","top":"-75px"}}></img>
                  <Link to="/tuiter/edit-profile">
                    <button className="rounded-pill btn btn-outline-dark float-start fw-bold" style = {{"position":"relative","right":"-515px","top":"-140px"}}>
                               Edit Profile
                    </button>
                  </Link>

        </div>
         <div className="col-8" style = {{"position":"relative","top":"-40px","left":"-80px"}}>
           <h3 className="fw-bold">{profile.firstName} {profile.lastName}</h3>
           <div className = "text-secondary">{profile.handle}</div>
         </div>
         <div className = "row" style = {{"position":"relative","top":"-30px","left":"20px","right":"5px"}}>
            <h6>{profile.bio}</h6>
         </div>

        <div className = "row pt-2 pb-2" style = {{"position":"relative","top":"-30px","left":"20px","right":"5px"}}>
           <h6 className = "text-secondary">Personal Website: <a href = {profile.website}>{profile.website}</a></h6>
        </div>

         <div className = "row pb-5 pt-1" style = {{position:"relative","left":"30px","width":"500","top":"-30px"}}>
              <div className = "col">
              <a href = "#" className = "text-decoration-none text-secondary">
                <i className="fa-solid fa-location-pin fa-lg text-secondary"></i>
                <span className = ""> {profile.location}</span>
              </a>
              </div>

              <div className = "col">
                <a href = "#" className = "text-decoration-none text-secondary">
                  <i className="fa-solid fa-fire-flame-simple fa-lg"></i>
                  <span className = ""> Born {profile.dateOfBirth}</span>
                </a>
              </div>

              <div className = "col">
                <a href = "#" className = "text-decoration-none text-secondary">
                  <i className="fa-solid fa-calendar-days fa-lg"></i>
                  <span className = ""> Joined {profile.dateJoined}</span>
                </a>
              </div>
           </div>
           <div className = "row" style = {{position:"relative","left":"30px","width":"500","top":"-60px"}}>
              <div className = "col">
                <h6 className = "text-secondary"><span className = "text-dark"> {profile.followingCount}</span> Following</h6>
              </div>
              <div className = "col" style = {{position:"relative","left":"-150px"}}>
                <h6 className = "text-secondary"><span className = "text-dark">{profile.followersCount}</span> Followers</h6>
              </div>
           </div>
      </li>
</div>
);
};

export default ProfileBoard;