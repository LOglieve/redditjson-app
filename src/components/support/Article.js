import React from 'react';
import {Link} from 'react-router-dom'

export default function Article(props){
    return(
        
        <Link to = {`/post/${props.article.id}`}>
            <article className = "article">

               <h3>{props.article.title}</h3>
             

                {
                    (props.article.thumbnail_height != null) ? <img height = {props.article.thumbnail_height} width = {props.article.thumbnail_width} src = {props.article.thumbnail} /> : ""
                }
                    
            </article>
        </Link>
            


    )
}