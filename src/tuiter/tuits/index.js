import React from "react";
import TuitItem from './TuitItem'
import {useSelector} from "react-redux";

const TuitsList = () => {
    const postsArray = useSelector(state => state.tuits)
    return (
        <>
        {
            postsArray.map(post =>
                <TuitItem post={post}/>
              )
        }
        </>
    );
};

export default TuitsList;