import React from "react";
import {deleteTuit} from "../tuits/tuits-reducer";
import TuitsStats from "./TuitStats";
import {useDispatch} from "react-redux";
const TuitItem = (
 {
    post = {
        "_id": 234,
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        "image": "spacex.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
    }
 }
) => {
const dispatch = useDispatch();
const deleteTuitHandler = (id) => {
  dispatch(deleteTuit(id));
}

 return(
    <div className="container mb-2">
        <img src={`/images/${post.image}`} className='wd-float-left me-2 bordering' height={40} width={40} alt=""/>
        <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(post._id)}></i>
            <div className="row">
                <span className=""><b>{post.userName}&nbsp;</b> <span className="wd-handle text-secondary"> {post.handle} <span>&#8226;</span> {post.time}</span></span>
                {/* <span>{post.title}</span>
                <div className="position-relative">
                    <img src={`/images/${post.image}`}
                        className="card-img-top mt-2" alt=""/>   
                </div> */}
                <span className={'border border-light rounded-bottom mb-3'}>
                    <span className="card-text text-secondary">
                        {post.tuit}
                    </span>
                    <br/>
                </span>

               <TuitsStats post={post}/>
            </div>
 
    </div>
 );
};
export default TuitItem;