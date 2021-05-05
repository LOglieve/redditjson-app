import React, {useState, useEffect} from 'react';
import Article from './components/Article';
import Nav from './components/nav';
import Fav from './components/fav';

function App() {
  const [articles, setArticle] = useState([]);
  const [subreddit, setSubreddit] = useState("hondacivic");
  const [favList, setFavList] = useState(["hondacivic", "food"]);

  const handleSubChange = (e) => { 
    setSubreddit(e.target.value.toLowerCase());
    
  }

  const handleEnter = (e) =>{
    console.log(e.nativeEvent);
    if(e.key === "Enter"){
        //trigger search
        console.log("MMMMM EGG")
        fetchData();

    }
  }
    
 
  const fetchData = async () => {
    const fetchURL = `https://www.reddit.com/r/${subreddit}.json`;
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


  const removeItem = (item) =>{
    let favs = favList.filter(fav => fav != item);
    setFavList(favs); 
  };

  

  return (
    <div className="App">

      <Nav subreddit = {subreddit} handleChange = {handleSubChange} handleEnter = {handleEnter}/>
      <div className = "main">
        <Fav list = {favList} remove = {removeItem}/>
        <div className = "content">
          

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
