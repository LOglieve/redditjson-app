import React, {useState, useEffect} from 'react';
import Article from './components/Article';

function App() {
  const [articles, setArticle] = useState([]);
  const [subreddit, setSubreddit] = useState("");

  useEffect(() => {
    fetch("https://www.reddit.com/r/hondacivic.json").then(res =>{
      if(res.status != 200){
        console.log("Error");
        return;
      }

      res.json().then(data=>{
        if(data != null){
          console.log(data.data.children);
          setArticle(data.data.children);
        }

      })
    })


    //will reRun everythime subreddit changes
  }, [subreddit]);



  return (
    <div className="App">

      <input type="text" className= "input" value ="hondacivic"></input>
      <div className = "articles">
        {
          (articles != null) ? articles.map((article, index) => <Article key = {index} article = {article.data} />) : ""
          
        }



      </div>
    </div>
  );
}

export default App;
