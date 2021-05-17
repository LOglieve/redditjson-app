import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';



export default function Post(props){

    const {postId} = useParams();
    console.log(props.post);

    useEffect(() =>{
        props.fetchPost(postId);
        
    }, [])

    console.log(props.comments);


    return(
        <div className = "content">
            
            <div className = "post">
                <h1>{props.post.title}</h1>
                <p>{props.post.selftext}</p>

                {(props.post.url != null) ? <img id = "post-image" src = {props.post.url} max/> : "" }
                
            </div>
            <div className = "comments">
                <h1>Comments {props.comments.length}</h1>

                {
                    (props.comments != null) ? props.comments.map((comment, index) => <Comment key = {index} comment = {comment.data} />) : <h2>No comments availible</h2>
                }

            </div>

        </div>
        
    )
}

function Comment(props){

    return(
        <div className = "comment">
            <p>{props.comment.body}</p>
            <h6></h6>
            

        </div>

    )

}