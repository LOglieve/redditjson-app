import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect, useHistory} from 'react-router-dom';


import Nav from './components/support/nav';
import Post from './components/post';

import {Fav} from './components/support/fav';
import SubBar from './components/support/subBar';
import Article from './components/support/Article';


function App() {
  const [articles, setArticle] = useState([]);
  const [subreddit, setSubreddit] = useState("hondacivic");
  const [favList, setFavList] = useState(["hondacivic", "food"]);
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);


    
  const fetchPost = async(postId) => {
    setPost("");
    setComments([]);
    const fetchURL = `https://www.reddit.com/r/${subreddit}/${postId}.json`;
    try{
      await fetch(fetchURL).then(res =>{
        res.json().then(data => {
          setPost(data[0].data.children[0].data);
          setComments(data[1].data.children);
  
        })
      })
    }catch(error){
      console.log(error);
        return;
    }

  }
 
  const fetchData = async (sub = subreddit, filter = "", type = "") => {
    const fetchURL = `https://www.reddit.com/r/${subreddit}${filter}.json`;
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

  const addToFav = (newFav) =>{
	  let contained = favList.filter(fav => fav === newFav);
	  console.log(contained);
	  if(contained.length === 0){
		setFavList(favList.concat(newFav));
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



  return (


    <Router>
      <Redirect from = '/' to = '/home'></Redirect>
      <div className="App">

        <Nav subreddit = {subreddit} setSubreddit = {setSubreddit} fetchData = {fetchData}/>

        <div className = "main">
            <Fav className = "favMenu" list = {favList} remove = {removeItem} subreddit = {subreddit} setSubreddit = {setSubreddit} fetchData = {fetchData} />
           

            	<div className = "content">
				<SubBar subreddit = {subreddit} fetchData = {fetchData} addToFav = {addToFav}/>
					<Route path = "/home">
						<div className = "articles">
							{
							(articles != null) ? articles.map((article, index) => <Article key = {index} article = {article.data} />) : <h2>This subreddit does not exist</h2>
							}
						</div>
					</Route>

					<Route path = "/post/:postId"><Post fetchPost = {fetchPost} post = {post} comments = {comments}/></Route>

                 
                </div>
            
           
                

        </div>
        
        


      </div>


    </Router>
    
  );
}

export default App;
