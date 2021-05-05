import React from 'react';


export default function Article(props){
    return(
        <article className = "article">
            <a href = {"//www.reddit.com" + props.article.permalink} target = "_blank">
                <h3>{props.article.title}</h3>
            </a>

            {
                (props.article.thumbnail_height != null) ? <img height = {props.article.thumbnail_height} width = {props.article.thumbnail_width} src = {props.article.thumbnail} /> : ""
            }
                

            


        </article>


    )
}