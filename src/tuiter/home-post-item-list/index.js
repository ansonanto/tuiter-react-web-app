import React from "react";
import HomePostListItem from './home-post-list-item'
import homePostArray from './home-posts.json';

const HomePostItemList = () => {
    return (
        <>
        {
            homePostArray.map(post =>
                <HomePostListItem post={post}/>
              )
        }
        </>
    );
};

export default HomePostItemList;