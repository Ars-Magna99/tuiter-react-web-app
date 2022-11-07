import { createSlice } from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";

const currentUser = {
 "userName": "NASA",
 "handle": "@nasa",
 "avatarIcon": "../images/NASA_logo.png",
};


const profile = {
                  "firstName": "Ziyang", "lastName": "Wang", "handle": "@ziw152","tweetNum":103,
                  "profilePicture": "../../images/user_icon/batman.png", 	"bannerPicture": "../../images/user_icon/universe.jpg",
                  "bio": "Computer Science Student. Currently looking for SDE interns.",
                  "website": "https://github.com/Ars-Magna99",
                  "location": "Boston, MA",	"dateOfBirth": "1997-09-08",	"dateJoined": "4/2009",
                  "followingCount": 340,	"followersCount": 223
                }

const profileSlice = createSlice({
 name: 'profile',
 initialState: profile,
 reducers: {
    changeFName(state, action) {
      state.firstName = action.payload.firstName;
    },
    updateProfile(state, action) {
        console.log(action.payload);
        return state = action.payload;
    }
  }
});
export const {changeFName,updateProfile} = profileSlice.actions;
export default profileSlice.reducer;



