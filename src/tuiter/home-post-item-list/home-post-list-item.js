import React from "react";
const HomePostListItem = (
 {
    post = {
        "name": "Elon Musk",
        "userName": "@elonmusk",
        "time": "23h",
        "title": "Amazing show about @inspiration4x mission!",
        "userImage":"musk.jpeg",
        "image": "spaceman.jpeg",
        "comments": "4.2k",
        "retweet":"3.5k",
        "head_content":"Contrary to popular belief, Lorem Ipsum is not simply random text...",
        "content":"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        "likes":"37.5k"
      }
 }
) => {
 return(
    <div className="container mb-2">
        <img src={`/images/${post.userImage}`} className='wd-float-left me-2 bordering' height={40} width={40} alt=""/>
       
            <div className="row">
                <span className=""><b>{post.name}&nbsp;</b> <span className="wd-handle text-secondary"> {post.userName} <span>&#8226;</span> {post.time}</span></span>
                <span>{post.title}</span>
                <div className="position-relative">
                    <img src={`/images/${post.image}`}
                        className="card-img-top mt-2" alt=""/>   
                </div>
                <span className={`border border-light rounded-bottom mb-3  ${post.content === ''?'d-none':''}`}>
                    <span className="card-text text-black">{post.head_content}</span><br/>
                    <span className="card-text text-secondary">
                        {post.content}
                    </span>
                    <br/>
                </span>

                <p className="d-flex justify-content-between mt-1">
                    <i className='bi bi-chat' style={{color: 'grey'}}> {post.comments}</i>
                    <i className='bi bi-repeat' style={{color: 'grey'}}> {post.retweet}</i>
                    <i className='bi bi-suit-heart' style={{color: 'grey'}}> {post.likes}</i>
                    <i className='bi bi-upload' style={{color: 'grey'}}></i>
                </p>
            </div>
 
    </div>
 );
};
export default HomePostListItem;