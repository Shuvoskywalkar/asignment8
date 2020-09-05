import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ShowDetails.css'
import Comentry from '../Coment/Coment'
const ShowDetails = () => {
    
    const{Id}=useParams();
          const[postsNews,setpostsNews]=useState([])
        useEffect(()=>{
          fetch(`https://jsonplaceholder.typicode.com/posts/${Id}/`)
          .then(res=>res.json())
          .then(data=>setpostsNews(data))
        //   console.log(postsNews)
        },([]))
        const{body,userId,title}=postsNews
             
        
        const[Coments,setComent]=useState([])
      useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${Id}/comments?`)
        .then(res=>res.json())
        .then(data=>setComent(data))
       
      },([]))
    //   console.log(Coments)
    return (
        <div className="ShowBody">
          <h3><b>POST TITLE:</b>{title}</h3>
           <h2>Detail::
              {body}</h2>

        <h1>The Coments:</h1>
        <div className="coments">
         {Coments.map((coment)=><Comentry Coment={coment}></Comentry>)}
        </div>
        </div>
    );
};

export default ShowDetails;