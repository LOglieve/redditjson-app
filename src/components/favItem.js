import React, {useState, useEffect} from 'react';



export default function FavItem(props){
    return(
        <div className = "favourite">
            <h1>r/{props.subreddit}</h1> 
            <button onClick = {() => props.remove(props.subreddit)}>X</button>
        </div>
    )

}
//onClick = {props.remove(props.subreddit)}