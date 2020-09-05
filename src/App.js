import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import home from './Components/Home/home';
import { useState } from 'react';
import { useEffect } from 'react';
import ShowDetails from './Components/ShowDetails/ShowDetails';
import Nomatch from './Components/Nomatch/Nomatch';

function App() {
  const[posts,setposts]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(res=>res.json())
    .then(data=>setposts(data))
  },[])
  // console.log(posts)
  return (
    
      
      <Router>
      <Switch>

         <Route exact path="/">
        <Home posts={posts}></Home>
        </Route>
      <Route path="/ShowDetails/:Id">
        <ShowDetails >
        </ShowDetails >
      </Route>
      <Route path="*">
        <Nomatch></Nomatch>
      </Route>
      </Switch>
     
      </Router>
    

    
  );
}

export default App;
