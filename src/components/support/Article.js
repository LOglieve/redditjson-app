import React from 'react';
import {Link} from 'react-router-dom'

export default function Article(props){
    return(
        
        <Link to = {`/post/${props.article.id}`}>
            <article className = "article">

               <h3 className = 'light-grey'>{props.article.title}</h3>
               <p className = 'light-grey'>{props.article.selftext}</p>
             

                {
                    (props.article.thumbnail_height != null) ? <img height = {props.article.thumbnail_height} width = {props.article.thumbnail_width} src = {props.article.thumbnail} /> : ""
                }
                    
            </article>
        </Link>
            


    )
}