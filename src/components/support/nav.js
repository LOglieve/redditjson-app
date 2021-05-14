import React, {useState, useEffect} from 'react';

export default function Nav(props){

    return(
        <div className = "navBar">
            <img src = "../resources/logo" id = "logo" alt = "logo" />
            <input id = "searchBar" type="text" className= "input" value = {props.subreddit} onKeyPress= {props.handleEnter} onChange = {props.handleChange}></input>
            
        </div>


    );
}