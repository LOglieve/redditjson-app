import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

import Comment from './support/comment';

export default function Post(props){

    const {postId} = useParams();
    console.log(props.post);

    useEffect(() =>{
        props.fetchPost(postId);
        
    }, [])


    return(
        <div className = "content">
            
            <div className = "post">
                <h1>{props.post.title}</h1>
                <p>{props.post.body}</p>

                {(props.post.url != null) ? <img id = "post-image" src = {props.post.url} max/> : "" }
                
            </div>
            <div className = "comments">

                {
                    (props.comments != null) ? props.comments.map((comment, index) => <Comment key = {index} comment = {comment.data} />) : <h2>No comments availible</h2>
                }

            </div>

        </div>
        
    )
}