import React, { useState } from "react";
import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {changeFName,updateProfile} from "../profile/profile-reducer.js"


const EditProfileComponent = (
) => {

const profile = useSelector(state => state.profile);
const dispatch = useDispatch();

const [FName,setFirstName] = useState(profile.firstName);
const [LName,setLastName] = useState(profile.lastName);
const [Bio,setBio] = useState(profile.bio);
const [Birthdate,setBirthdate] = useState(profile.dateOfBirth);
const [Location,setLocation] = useState(profile.location);
const [Web,setWeb] = useState(profile.website)

const changeFNameHandler = (newFName) => {
dispatch(changeFName(newFName))
}

const doneEditingProfile = (profile) => {
  console.log(FName);
  console.log(Bio);
  console.log(Location);
    console.log(Birthdate);
  dispatch(updateProfile({...profile, firstName:FName,lastName:LName,location:Location,bio:Bio,dateOfBirth:Birthdate}));
}

return(

<div className = "container border border-secondary">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className = "nav-item active ms-2 mt-1 mb-1" >
      <Link to="/tuiter/profile">
         <i className="fa-solid fa-x pl-5 fa-xl text-dark"></i>
      </Link>
      </li>

      <li className="nav-item active ms-5">
        <h3>Edit Profile</h3>
      </li>

      <span className="nav-item active ms-5 float-end">
        <button onClick={() => doneEditingProfile(profile)} className = "rounded-pill btn btn-primary" style = {{"position":"relative","left":"250px"}}>Save</button>
      </span>
    </ul>
  </div>
</nav>
<div className = "col">
    <img className = "img-fluid" src={profile.bannerPicture}></img>
    </div>
     <li className="list-group-item">
        <div className="col-2">
                <img className = "rounded-circle" width = {150} height = {150} src={profile.profilePicture} style = {{"position":"relative","top":"-75px"}}></img>

        </div>
    </li>
<div className = "row ps-4">
    <div className = "col">
      <label htmlFor="firstname">First Name:</label>
      <input type = "text" className="form-control" id = "firstname" onChange = {(e) => setFirstName(e.target.value)} value = {FName} style = {{"width":"120px"}}></input>
    </div>
    <div className = "col">
      <label htmlFor="lastname">Last Name:</label>
      <input type = "text" className="form-control" id = "lastname" onChange = {(e) => setLastName(e.target.value)} value = {LName} style = {{"width":"120px"}}></input>
    </div>
  </div>

      <div className = "col pt-2">
        <label htmlFor="Bio">Bio:</label>
        <textarea type = "text" className="form-control" id = "bio" onChange = {(e) => setBio(e.target.value)} value = {Bio} style = {{"height":"120px"}} ></textarea>
      </div>

      <div className = "col pt-2">
        <label htmlFor="web">Website:</label>
        <input type = "text" className="form-control" id = "web" onChange = {(e) => setWeb(e.target.value)} value = {Web} style = {{"width":"320px"}} ></input>
      </div>

        <div className = "col pt-3">
          <label htmlFor="DOB">Date Of Birth:</label>
          <input type = "date" className="form-control" id = "DOB" onChange = {(e) => setBirthdate(e.target.value)} value = {Birthdate} style = {{"width":"120px"}}></input>
        </div>
      <div className = "col" className = "pt-3 pb-2 mb-2">
        <label htmlFor="loication">Location:</label>
        <input type = "text" className="form-control" id = "location" onChange = {(e) => setLocation(e.target.value)} value = {Location} style = {{"width":"120px"}}></input>
      </div>
</div>
);
};

export default EditProfileComponent;