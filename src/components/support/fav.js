import React, {useState, useEffect} from 'react';


export function Fav(props){

    return(
        <div className = "favMenu">
            <h3>Favourites</h3>
            <div>
            {(props.list != null) ? props.list.map((fav, index) => <FavItem key = {index} subreddit = {fav} remove = {props.remove} reDirect = {props.reDirect}/>) : <h2>This subreddit does not exist</h2>}
            </div>


        </div>

    )

}

export function FavItem(props){

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