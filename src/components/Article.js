import React from 'react';

export default function Article(props){
    return(
        <article>
            <a href = {"//www.reddit.com" + props.article.permalink} target = "_blank">
                <h3>{props.article.title}</h3>
            </a>


        </article>


    )
}