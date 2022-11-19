import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitsStats = ({tuit = {
    "_id": 100,
    "topic": "Space",
    "userName": "SpaceX",
    "time": "2h",
    "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
    "image": "spacex.jpeg",
    "liked": false,
    "replies": 1,
    "retuits": 2,
    "likes": 5,
    "dislikes": 6, 
    "handle": "@spacex",
    "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
}}) => {
    const dispatch = useDispatch();
    return (
        <>
        {
            
                <p className="d-flex justify-content-between mt-1">
                    <i className='bi bi-chat' style={{color: 'grey'}}> {tuit.replies}</i>
                    <i className='bi bi-repeat' style={{color: 'grey'}}> {tuit.retuits}</i>
                        <div>
                            {
                                tuit.likes ? ( 
                                <i onClick={() => dispatch(updateTuitThunk({
                                    ...tuit,
                                    likes: tuit.likes + 1
                                    }))} className="bi bi-heart-fill me-2 text-danger"></i>)
                                    : (<i onClick={() => dispatch(updateTuitThunk({
                                        ...tuit,
                                        likes: tuit.likes + 1
                                        }))} className="bi bi-heart me-2 text-danger"></i>)
                            }
                            {tuit.likes}
                            
                            
                            
                        </div>
                        <div>
                            {
                                tuit.dislikes ? (
                                    <i onClick={() => dispatch(updateTuitThunk({
                                        ...tuit,
                                        dislikes: tuit.dislikes + 1
                                        }))} className="bi bi-hand-thumbs-down-fill me-2 "></i>
                                ) : (
                                    <i onClick={() => dispatch(updateTuitThunk({
                                        ...tuit,
                                        dislikes: tuit.dislikes + 1
                                        }))} className="bi bi-hand-thumbs-down me-2 "></i>
                                )
                            }
                            {tuit.dislikes}
                        </div>
                    <i className='bi bi-upload' style={{color: 'grey'}}></i>
                </p>
              
        }
        </>
    );
};

export default TuitsStats;