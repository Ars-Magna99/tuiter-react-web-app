import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const TopNavbar = (
{
profile = {
  "firstName": "Ziyan", "lastName": "Wang", "handle": "@ziw152","tweetNum":103,
  "profilePicture": "jose.png", 	"bannerPicture": "polyglot.png",
  "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.",
  "website": "youtube.com/webdevtv",
  "location": "Boston, MA",	"dateOfBirth": "7/7/1968",	"dateJoined": "4/2009",
  "followingCount": 340,	"followersCount": 223
}}
) => {

return(
<nav className="navbar navbar-light bg-white border border-light">
  <div className = "col-1 pl-5">
  <Link to="/tuiter/home">
     <i className="fas fa-arrow-left pl-5 fa-2xl text-dark"></i>
  </Link>
  </div>
  <div className = "col">
  <h1 className = "float-left">{profile.firstName}  {profile.lastName} </h1>
  <h6 className = "text-secondary float-left">{profile.tweetNum}  Tweets</h6>
  </div>
</nav>

);
};

export default TopNavbar;