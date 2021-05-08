import React, {useState, useEffect} from 'react';

export default function Post(props){
    useEffect(() =>{
        fetchData();
    })

    return(
        <div>
            <div className = "post">
                <h1></h1>
                <p></p>
                <img />
            </div>

        </div>
        
    )
}