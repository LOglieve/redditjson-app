import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";

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
            <img onClick = {home} src = "../resources/logo" id = "logo" alt = "logo" />
            <input id = "searchBar" type="text" className= "input" value = {props.subreddit} onKeyPress= {handleEnter} onChange = {handleSubChange}></input>
            
        </div>


    );
}