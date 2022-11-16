import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import PostSummaryItem from "./post-summary-item.js";
import {findTuitsThunk} from "../../services/tuits-thunks";

const PostSummaryList = () => {
const {tuits, loading} = useSelector(
  state => state.tuitsData)
 const dispatch = useDispatch();
 useEffect(() => {
   dispatch(findTuitsThunk())
 }, [])
 return(
   <ul className="list-group">
     {
       tuits.map(tuit =>
         <PostSummaryItem
           key={tuit._id} post={tuit}/> )
     }
   </ul>
 );
};
export default PostSummaryList;