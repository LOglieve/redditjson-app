import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import logo from "../../resources/logo.png";

export default function Nav(props){
    let history = useHistory();

    const home = () => {
        history.push("/home");
    }

    const handleSubChange = (e) => { 
      props.setSubreddit(e.target.value.toLowerCase());
      console.log(props.subreddit);
      
    }
  
    const handleEnter = (e) =>{
      console.log(e.nativeEvent);
      if(e.key === "Enter"){
          //trigger search
          home();
          console.log("MMMMM EGG")
          props.fetchData();
  
      }
    }

    return(
        <div className = "navBar">
            <div>
                <img onClick = {home} src = {logo} id = "logo" alt = "logo" />
            </div>
            <div>
                <input id = "search-bar" type="text" className= "input" value = {props.subreddit} onKeyPress= {handleEnter} onChange = {handleSubChange}></input>
            </div>
            
            
        </div>


    );
}