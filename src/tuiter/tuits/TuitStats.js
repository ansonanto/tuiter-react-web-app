import React from "react";

const TuitsStats = ({post={}}) => {
    return (
        <>
        {
            
                <p className="d-flex justify-content-between mt-1">
                    <i className='bi bi-chat' style={{color: 'grey'}}> {post.replies}</i>
                    <i className='bi bi-repeat' style={{color: 'grey'}}> {post.retuits}</i>
                    {
                        post.liked && 
                        <i className='bi bi-suit-heart-fill' style={{color: 'red'}}> {post.likes}</i>
                    }
                    {
                        !post.liked && 
                        <i className='bi bi-suit-heart' style={{color: 'grey'}}> {post.likes}</i>
                    }
                    <i className='bi bi-upload' style={{color: 'grey'}}></i>
                </p>
              
        }
        </>
    );
};

export default TuitsStats;