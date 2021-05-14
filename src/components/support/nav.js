import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";

export default function Nav(props){
    let history = useHistory();

    const home = () => {
        history.push("/home");
    }

    return(
        <div className = "navBar">
            <img onClick = {home} src = "../resources/logo" id = "logo" alt = "logo" />
            <input id = "searchBar" type="text" className= "input" value = {props.subreddit} onKeyPress= {props.handleEnter} onChange = {props.handleChange}></input>
            
        </div>


    );
}