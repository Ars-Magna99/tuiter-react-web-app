import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {deleteTuitThunk, findTuitsThunk} from "../../services/tuits-thunks";

const initialState = {
   tuits: [],
   loading: false
}


const currentUser = {
 "userName": "NASA",
 "handle": "@nasa",
 "avatarIcon": "../images/NASA_logo.png",
};

const templateTuit = {
 ...currentUser,
 "hasImage":false,
 "liked":false,
 "time": "1 min",
 "liked": false,
 "replies": 0,
 "retuits": 0,
 "likes": 0,
}


const tuitsSlice = createSlice({
 name: 'tuits',
  initialState,
  extraReducers: {
  [updateTuitThunk.fulfilled]:
    (state, { payload }) => {
      state.loading = false
      const tuitNdx = state.tuits
        .findIndex((t) => t._id === payload._id)
      state.tuits[tuitNdx] = {
        ...state.tuits[tuitNdx],
        ...payload
      }
    },
    [deleteTuitThunk.fulfilled] :
      (state, { payload }) => {
      state.loading = false
      state.tuits = state.tuits
        .filter(t => t._id !== payload)
    },
    [createTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuits.push(payload)
    },
    [findTuitsThunk.pending]:
       (state) => {
          state.loading = true
          state.tuits = []
    },
    [findTuitsThunk.fulfilled]:
       (state, { payload }) => {
          state.loading = false
          state.tuits = payload
    },
    [findTuitsThunk.rejected]:
       (state) => {
          state.loading = false
    }
  },
 reducers: {
    deleteTuit(state, action) {
      const index = state
         .findIndex(tuit =>
            tuit._id === action.payload);
      state.splice(index, 1);
    },
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    }
  }
});
export const {createTuit,deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;


