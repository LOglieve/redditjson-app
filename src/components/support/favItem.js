import React, {useState, useEffect} from 'react';



export default function FavItem(props){
    return(
        <div className = "favourite">
            <div onClick = {() => props.reDirect(props.subreddit)}>
                <h1 >r/{props.subreddit}</h1> 
                {/*cannot pass a function with properties straight into an onClick */}
             </div>
            <button onClick = {() => props.remove(props.subreddit)}>X</button>
        </div>
        
        
    )

}