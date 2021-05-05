import React, {useState, useEffect} from 'react';



export default function Nav(props){

    return(
        <div className = "navBar">
            <img id = "logo" alt = "logo" src = "../resources/logo.png"/>
            <input type="text" className= "input" value = {props.subreddit} onKeyPress= {props.handleEnter} onChange = {props.handleChange}></input>


        </div>


    );
}