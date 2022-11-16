import React, {useEffect} from "react";
//import postsArray from './posts.json';
import PostSummaryItem from "./post-summary-item";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";

const  PostSummaryList = () => {
  const postsArray = useSelector(state => state.tuitsData)
  console.log(postsArray)
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    // eslint-disable-line react-hooks/exhaustive-deps

 return(
   <ul className="list-group">
     {
       postsArray.map(post =>
         <PostSummaryItem
           key={post._id} post={post}/> )
     }
   </ul>
 );
};
export default PostSummaryList;

