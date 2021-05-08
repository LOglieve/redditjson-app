import React, {useState, useEffect} from 'react';
import Article from './components/Article';
import Nav from './components/nav';
import Fav from './components/fav';
import SubBar from './components/subBar';

function App() {
  const [articles, setArticle] = useState([]);
  const [subreddit, setSubreddit] = useState("hondacivic");
  const [favList, setFavList] = useState(["hondacivic", "food"]);

  const handleSubChange = (e) => { 
    setSubreddit(e.target.value.toLowerCase());
    console.log(subreddit);
    
  }

  const handleEnter = (e) =>{
    console.log(e.nativeEvent);
    if(e.key === "Enter"){
        //trigger search
        console.log("MMMMM EGG")
        fetchData();

    }
  }
    
 
  const fetchData = async (sub = subreddit, filter = "") => {
    const fetchURL = `https://www.reddit.com/r/${sub}${filter}.json`;
    console.log(fetchURL);

    try{
      await fetch(fetchURL).then(res =>{
        res.json().then(data => {
          console.log(data.data.children);
          setArticle(data.data.children);
  
        })
      })
    }catch(error){
      console.log(error);
        return;
    }
  }

  useEffect(() => {
    fetchData();
    
    
  }, []);


  //remove subreddit from favourites list
  const removeItem = (item) =>{
    let favs = favList.filter(fav => fav != item);
    setFavList(favs); 
  };

  //display selected favourite subreddit to user
  const reDirectToFav = (favSub) =>{
    fetchData(favSub);
    setSubreddit(favSub);
    console.log(subreddit);

  }

  return (
    <div className="App">

      <Nav subreddit = {subreddit} handleChange = {handleSubChange} handleEnter = {handleEnter}/>
      <div className = "main">
        <Fav list = {favList} remove = {removeItem} reDirect = {reDirectToFav}/>
        <div className = "content">
          
          <SubBar subreddit = {subreddit} fetchData = {fetchData} />

          <div className = "articles">
            {
            (articles != null) ? articles.map((article, index) => <Article key = {index} article = {article.data} />) : <h2>This subreddit does not exist</h2>
            }
          </div>

        </div>
        

      </div>
      
    </div>
  );
}

export default App;
