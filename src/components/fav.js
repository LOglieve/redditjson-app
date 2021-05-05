import React, {useState, useEffect} from 'react';
import FavItem from './favItem';


export default function Fav(props){

    return(
        <div className = "favMenu">
            <h3>Favourites</h3>
            <div>
            {(props.list != null) ? props.list.map((fav, index) => <FavItem key = {index} subreddit = {fav} remove = {props.remove} />) : <h2>This subreddit does not exist</h2>}
            </div>


        </div>

    )

}