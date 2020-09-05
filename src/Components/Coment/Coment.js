import React from 'react';
import './Coment.css'
import  { useState, useEffect } from 'react';
const Coment = (props) => {
    //    console.log(props)
    const{name,email,body}=props.Coment
    // const[postsIMG,setpostsIMG]=useState()
    // useEffect(()=>{
    //   fetch(`https://jsonplaceholder.typicode.com/photos/`)
    //   .then(res=>res.json())
    //   .then(data=>setpostsIMG(data))
     
    // },[])
    // console.log(postsIMG)
    // const {url}=postsIMG.
    return (
        <div className="CommentSection">
            <h3>{name}</h3>
            <h4>{email}</h4>
             <p>{body}</p>
        </div>
    );
};

export default Coment;
