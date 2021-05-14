import React, {useState, useEffect} from 'react';

export default function Comment(props){

    return(
        <div className = "comment">
            <h3>{props.comment.body}</h3>
            

        </div>

    )

}