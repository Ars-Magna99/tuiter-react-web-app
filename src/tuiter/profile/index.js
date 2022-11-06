import React from "react";
import {useSelector,useDispatch} from "react-redux";
import TopNav from "./topnav.js"
import ProfileBoard from "./profile-item.js"

const ProfileComponent = (
) => {

const profile = useSelector(state => state.profile);
console.log(profile.firstName);
return(
<>
<TopNav profile = {profile}/>
<ProfileBoard profile = {profile}/>
</>
);
};

export default ProfileComponent;