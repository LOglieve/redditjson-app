import React, {useState} from 'react';

export default function SubBar(props){
    const [timeFrame, setTimeFrame] = useState("day");

    const getSelected = () =>{
        const drop = document.getElementById("time");
        const selected = drop.options[drop.selectedIndex].value;
        console.log(selected);
        setTimeFrame(selected);

    }
    return(
        <div className = "subBar">
            <div><h1>{props.subreddit}</h1></div>
            <button onClick = {() => props.fetchData(props.subreddit, "/hot")}>Hot</button>
            <button onClick = {() => props.fetchData(props.subreddit, "/new")}>New</button>
            <button onClick = {() => props.fetchData(props.subreddit, `/top`)}>Top</button>
            
            {/*
            json api doesnt seem to allow top/?t=day etc find fix

            /?t=${timeFrame} goes on end of /top
            <select onChange = {getSelected} name="time" id="time">
                <option value="hour">Hour</option>
                <option value="day">Day</option>
                <option value="week">Week</option>
                <option value="month">Month</option>
                <option value="year">Year</option>
                <option value="all">All Time</option>
            </select>
         */}
        </div>
    )
}