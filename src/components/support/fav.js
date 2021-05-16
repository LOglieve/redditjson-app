import React, {useState, useEffect} from 'react';


export function Fav(props){

      //display selected favourite subreddit to user
    const reDirectToFav = async(favSub) =>{
        console.log(favSub);
        await props.setSubreddit(favSub);
        await props.fetchData(favSub);
        

    }

    return(
        <div className = "favMenu">
            <h3>Favourites</h3>
            <div>
            {(props.list != null) ? props.list.map((fav, index) => <FavItem key = {index} favSub = {fav} remove = {props.remove} reDirect = {reDirectToFav}/>) : <h2>This subreddit does not exist</h2>}
            </div>


        </div>

    )

}

function FavItem(props){

    return(
        <div className = "favourite">
            <div onClick = {() => props.reDirect(props.favSub)}>
                <h1 >r/{props.favSub}</h1> 
                {/*cannot pass a function with properties straight into an onClick */}
             </div>
            <button onClick = {() => props.remove(props.favSub)}>X</button>
        </div>
        
        
    )

}